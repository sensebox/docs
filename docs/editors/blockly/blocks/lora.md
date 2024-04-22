---
sidebar_position: 8
title: LoRa
hide_title: false
---


# LoRa


## Aktivierung

![](/img/blockly-bilder/lora/blockly-lora-1.svg)


Mit diesen Blöcken kannst du das Lora-Bee initialisieren und dich mit dem [The Things Network](https://www.thethingsnetwork.org/) verbinden. Je nachdem, welche Aktivierungsmethode du verwendest (OTAA oder ABP), musst du die entsprechenden ID's in dem Block eintragen. Zusätzlich kann das Übertragungsintervall in Minuten eingestellt werden.


## Lora-Nachricht

![](/img/blockly-bilder/lora/blockly-lora-2.svg)

Verwende diese Blöcke, um eine Nachricht über das LoRa-Netzwerk zu versenden. Hierbei wird kein spezielles Format für die Nachricht (oft auch Payload genannt) verwendet. Die Daten werden hierbei als Byte codiert, sodass diese schnell und effizient über das LoRa-Netz übertragen werden können. Anschließend müssen die Daten in der TTN Console wieder über einen speziellen Decoder in ein lesbares Format umgewandelt werden.

## Decoder erstellen

Beim TTN Decoding geht es nur darum, Bytes zu verstehen. Danach ist es möglich, schnelle Lösungen zu erstellen, um auf deine von der senseBox gemessenen Daten zuzugreifen.


### Theorie
LoRaWAN ist nicht geeignet für das Senden von großen Datenmengen. Deshalb werden die Informationen in kleine Bytes unterteilt und gesendet. Ein Byte enhält 8 Bit. Das heißt, man kann zwischen 256 verschiedenen Werten unterscheiden. 2 Bytes enhalten schon 16 Bits, sodass es möglich ist, zwischen 65536 Werten zu unterscheiden.

Die nachfolgende Tabelle gibt eine Übersicht über die Bandbreite:

______________________________________________________________________________
| Bytes | Bit | min (signed)   | max (signed)  | min (unsigned) | max (unsigned) |
| :-------: | :-----:|:----------------:|:---------------:|:----------------:|:----------------:|
| 1     | 8   | -128           | 127           | 0              | 255            |
| 2     | 16  | −32.768        | 32.767        | 0              | 65.535         |
| 3     | 24  | −2.147.483.648 | 2.147.483.647 | 0              | 4.294.967.295  |
______________________________________________________________________________

In der Tabelle gibt es zwei verschiedenen Typen: "signed" und "unsigned". Signed Werte decken sowohl den positiven als auch den negativen Wertebereich ab.

Beispiel: Du möchtest die Luftfeuchtigkeit messen. Die Werte liegen zwischen 0% und 100%. Es handelt sich aber um keine Kommazahlen, sondern nur um ganzzahlige Werte. Man könnte nun ein Byte verwenden, der dem Wert für die Luftfeuchtigkeit entspricht. Möchte man allerdings eine Dezimalzahl mit zwei Nachkommastellen versenden, reicht 1 Byte nicht mehr aus. 2 Bytes müssen verwendet werden.

Stelle dir vor, wir messen 85,42%. Ein einfacher Ansatz wäre es, die Messung zu nehmen und mit 100 zu multiplizieren. Nun haben wir einen Wert von 85,42 * 100 = 8542. Wir können 8542 in zwei Bytes kodieren, sie an TTN senden und diese zwei Bytes decodieren, um 8542 zu erhalten. Diese Zahl kann nun durch 100 geteilt werden und wir erhalten den Wert von 85,42%. So funktioniert es im Grunde genommen.


### Beispiel

__Blockly__:
Auf der Arduino Seite wird die [lora-serialization](https://github.com/thesolarnomad/lora-serialization) Bibliothek verwendet. Die Dokumentation zeigt eine [Funktion](https://github.com/thesolarnomad/lora-serialization#unsigned-16bit-integer-2-bytes), um einen Wert mit 16 Bit zu versenden. Diese Funktion kann genutzt werden, um die Werte für die Luftfeuchtigkeit zu versenden. Der Wert für die Luftfeuchtigkeit liegt zwischen 0 und 100%, sodass folgende Blöcke zum Versenden verwendet werden können:

![](/img/blockly-bilder/lora/blockly-lora-humidity.svg)


Der Messwert wird mit 100 multipliziert, um die zwei Nachkommastellen beizubehalten.

Da der Wert für die Temperatur auch in den negativen Bereich fallen kann, muss zunächst der Wert in einen positven konvertviert werden und anschließend mit einem Wert multipliziert werden, um die Nachkommastellen zu behalten.

![](/img/blockly-bilder/lora/blockly-lora-temperatur.svg)


In diesem Beispiel wird ein Temperatursensor verwendet, der Werte ab -18 Grad Celsius gemessen hat und die Temperatur mit einer Genauigkeit von 0.0013 Grad Celsius rausgibt.

__TTN__:
In der TTN Console kommen nun zwei verschiedene Werte von der senseBox an. Diese Werte müssen nun mithilfe eines Decoders wieder von Bytes zu den ursprünglichen Werten decodiert werden. Den Decoder kannst du unter Payloads definieren:

![](/img/blockly-bilder/lora/blockly-lora-13.png)


```cpp
/**
 * Convert the array of bytes to an unsigned integer, LSB.
 *
 * BEWARE: This is only safe up to 0x1FFFFFFFFFFFFF, so: 6 bytes.
 */
function uint(bytes) {

  return bytes.reduceRight(function(acc, b) {
    // We expect an unsigned value, so to support more than 3 bytes
    // don't use any bitwise operators, which would always yield a
    // signed 32 bits integer instead.
    return acc * 0x100 + b;
  }, 0);
}
```

Hier kann nun der Decoder definiert werden:
```cpp
function Decoder(bytes) {

  var i = 0;
  var decoded = {};
  // The index in the bytes array that needs to be handled next;
  // use along with "i++" which returns the current value, and
  // then increments it for the next usage


  // Relative humidity with 0.01 precision, 0.00 through 100.00, LSB
  var humidity = uint(bytes.slice(i, i+=2)) / 100;
  // Temperature with 0.0013 precision, -18.000 through 67.000, LSB
  var temperature = uint(bytes.slice(i, i+=2)) / 771 - 18;
  // Unary plus operator to cast string result of toFixed to number
  temperature = +temperature.toFixed(3);

  decoded['TEMPERATURE_SENSOR_ID'] = temperature
  decoded['HUMIDITY_SENSOR_ID'] = humidity

  return decoded;
}
```
Die Funktion nimmt die ersten zwei Bytes und konvertiert sie zum Messwert für Luftfeuchtigkeit. Die nächsten zwei Bytes werden zu einem Messwert für die Temperatur konvertiert. Wenn du die openSenseMap als Endpunkt (`https://ttn.opensensemap.org/v1.1`) in der TTN HTTP integration verwendest, werden die Messwerte mit deinen Sensor-IDs verknüpft und die Messwerte auf der openSenseMap angezeigt. Mehr über die openSenseMap TTN Integration findest du [hier](https://sensebox.github.io/books-v2/osem/ttn_integration.html)

### Wichtige Punkte
Einige wichtige Punkte sind zu beachten:

→ Die Dekodierung schlägt fehl / gibt falsche Werte zurück, wenn du nicht alles sendest, was dekodiert werden muss. Wenn der Decoder z.B. einen Feuchte- und einen Temperaturwert akzeptiert, die senseBox aber nur einen Feuchtewert sendet, erhälst du keine korrekten Werte.

→ Beim Senden von Werten, die größer als 3 Bytes sind, ist es ein wenig anders. Werte für die Helligkeit können im Maximum größer sein als ein 2 Byte Integer. Daher werden 3 Bytes benötigt. Du kannst das Ganze wie folgt senden:

![](/img/blockly-bilder/lora/blockly-lora-illuminance.svg)



und wie folgt decodieren:
```cpp
var lux = bytes[i] | bytes[i+1]<<8 | bytes[i+2]<<16;
i = i + 3 // increment counter afterwards
```


## Cayenne LPP
![](/img/blockly-bilder/lora/blockly-lora-5.svg)

![](/img/blockly-bilder/lora/blockly-lora-6.svg)

![](/img/blockly-bilder/lora/blockly-lora-7.svg)

![](/img/blockly-bilder/lora/blockly-lora-8.svg)

![](/img/blockly-bilder/lora/blockly-lora-9.svg)

![](/img/blockly-bilder/lora/blockly-lora-10.svg)

![](/img/blockly-bilder/lora/blockly-lora-11.svg)

![](/img/blockly-bilder/lora/blockly-lora-12.svg)

Das [Cayenne Low Power Payload Format](https://community.mydevices.com/t/cayenne-lpp-2-0/7510) bietet eine einfache Möglichkeit Daten über das LoRaWAN Netzwerk zu versenden. Die Daten können direkt über einen vorhanenden Decoder wieder in ein lesbares Format decodiert werden. Für unterschiedliche Messwerte stehen verschiedenen Blöcke bereit, um zu Gewährleiten, dass alle Nachkommastellen korrekt übertragen werden.

![](/img/blockly-bilder/lora/blockly-lora-14.png)
  
  







In der TTN Konsole kannst du unter __Payload__ den Decoder auswählen. Wähle dort Cayenne LPP aus und die Werte werden automatisch decodiert.

> - [Blockly.senseBox.de](https://blockly.sensebox.de/)

  
