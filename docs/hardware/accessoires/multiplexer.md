---
sidebar_position: 3
title:  I2C-Multiplexer
description: senseBox I2C-Multiplexer
---

# I2C-Multiplexer

Mit einem senseBox I2C-Multiplexer lassen sich bis zu acht Geräte mit gleicher Adressierung parallel über den I2C-Bus betreiben. Dadurch können zum Beispiel mehrere baugleiche Temperatursensoren angeschlossen werden.

![](/img/hardware-bilder/multiplexer/hub_bottom.png)

## Technische Informationen

* "Plug-in-and-Go" senseBox kompatibel durch Breakout-Board mit JST-Anschluss
* 8x JST Anschluss

## Verwendung
Der senseBox I2C-Multiplexer basiert auf dem [TCA9548A von Texas Instruments](http://www.ti.com/product/TCA9548A), welcher bereits Bestandteil vieler Tutorials aus der Community geworden ist. Mit dem folgenden Beispielcode von [Retians Blog](https://arduino-projekte.webnode.at/meine-libraries/i2c-multiplexer-tca9548a/) könnt ihr den Multiplex testen und überprüfen, an welche Kanälen etwas angeschlossen ist:

[https://arduino-projekte.webnode.at/_files/200002383-38c7539c19/TCA9548A_Scanner.ino.txt](https://arduino-projekte.webnode.at/_files/200002383-38c7539c19/TCA9548A_Scanner.ino.txt)

Für die Implementierung des o.g. Beispiels binden wir zuerst die benötigten Bibliotheken ein. `Wire.h` für die I2C Funktionalität und `SenseBoxMCU.h` für die Funktionen des Sensors.

```
#include <Wire.h>
#include <SenseBoxMCU.h>
```

Nun definieren wir die Adresse des Multiplex und eine Liste von Kanälen, an denen die Sensoren angeschlossen sind.

```
byte multiplexAddress = 0x77;
byte channels[] = {0,1,2};
```

Für den Sensor erzeugen wir ein Objekt und starten dessen Instanz hinter der seriellen Verbindung in der Setup-Funktion.

```
HDC1080 hdc

void setup() {
    Serial.begin(115200);
    hdc.begin();
}
```

In der Endlosschleife werden mithilfe einer for-Schleife die Kanäle fortlaufend gewechselt. Für jeden Kanal wird der Multiplex über seine Adresse angesprochen. Dann übergeben wir lediglich die Nummer des Kanals, an den alle Folgebefehle gesendet werden. Das geschieht so lange bis ein neuer Kanal kommuniziert wird.

```
for (int i = 0; i < (sizeof(channels)/sizeof(channels[0])); i++){
   Wire.beginTransmission(multiplexAddress);
   Wire.write(1 << channels[i]);
   Wire.endTransmission();

   Serial.print(channels[i]);
   Serial.print(F(". channel temperature: "));
   Serial.println(hdc.getTemperature());
}
```

Nun lassen sich die Sensoren einzeln auslesen. Man erkennt dabei minimale Abweichungen unter den baugleichen Sensoren:

```
0. channel temperature: 21.96
1. channel temperature: 22.09
2. channel temperature: 22.14
```

Äquivalent lässt sich jedes I2C Gerät mehrfach mit dem Multiplexer nutzen. Falls mehr als acht Geräte mit gleicher Kennung parallel betrieben werden sollen, lässt sich die Adressierung vom Multiplex anhand der drei Lötstellen auf seiner Rückseite und der folgenden Tabelle aus seinem [Datenblatt](http://www.ti.com/lit/ds/symlink/tca9548a.pdf) anpassen:

![](/img/hardware-bilder/multiplexer/datasheet_table.png)

Hervorgehoben in der Tabelle wurde die Standardeinstellung mit der Adressierung 0x77.
