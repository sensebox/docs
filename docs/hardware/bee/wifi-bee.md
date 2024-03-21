---
date: 2020-03-11
title: WiFi-Bee
categories: hardware
description: Mit dem WiFi-Bee können die Messdaten deiner senseBox per WLAN übertragen werden.
type: Document
resources:
  - name: "Shop"
    link: https://sensebox.kaufen/product/wifi-bee
  - name: Atmel ATWINC1500 Data Sheet
    link: http://ww1.microchip.com/downloads/en/DeviceDoc/ATWINC15x0-MR210xB-IEEE-802.11-b-g-n-SmartConnect-IoT-Module-Data-Sheet-DS70005304C.pdf
image1: /images/2020-03-11-bee-wifi/wifi.png
image2: /images/2020-03-11-bee-wifi/1-test.png 
image3: /images/2020-03-11-bee-wifi/2-result.png 
image4: /images/2020-03-11-bee-wifi/3-updater.png 
image5: /images/2020-03-11-bee-wifi/4-firmware-updater.png 
image6: /images/2020-03-11-bee-wifi/5-test-connection.png 
image7: /images/2020-03-11-bee-wifi/6-update-firmware.png    
image8: /images/2020-03-11-bee-wifi/ArduinoUpdaterSelect.png     
image9: /images/2020-03-11-bee-wifi/ArduinoToolsUpdater.png     
image10: /images/2020-03-11-bee-wifi/WifiFirmwareTool.PNG     
image11: /images/2020-03-11-bee-wifi/ingressInput.png     
image12: /images/2020-03-11-bee-wifi/apiInput.png     
image13: /images/2020-03-11-bee-wifi/CertificatesResults.png     

---

# WiFi-Bee

Das Wifi-Bee ist das Verbindungsstück, um die senseBox mit dem Internet zu verbinden. Die Daten der senseBox werden per WLAN (WiFi) in das bestehende Netzwerk übertragen. Das WiFi-Bee basiert auf dem ATWINC1500 Mikrochip von Atmel.


> Bei einigen unserer WiFi-Bees vom Typ WINC1500 kann es vorkommen, dass eine veraltete Firmware (Version 19.4.4) installiert ist. Das kann zu Übertragungsproblemen führen. Sollten diese Probleme bei dir auftreten, schaue dir !!!! an, um die Firmware zu aktualisieren.


![](/img/hardware-bilder/bees/wifi-bee/wifi.png)

## Technische Informationen

* "Plug-in-and-Go" senseBox kompatibel
* Single-band 2.4GHz b/g/n
* Betriebsspannung: 3.0V to 4.2V
* Verschlüsselungsprotokolle: WPA/WPA2 Personal, TLS, SSL
* Netzwerkdienste: DHCP, DNS, TCP/IP (IPv4), UDP, HTTP, HTTPS
* Bezeichnung: WINC1500
* Maße: 24mm x 25mm x 9mm
* Gewicht: 3,5 g

## Verbindungstest

Um die Verbindung des Bees mit dem Internet zu testen, also sowohl die Funktion der Komponente, als auch des Netzwerks, nutze den folgenden Sketch:

````c++
#include <SPI.h>
#include <WiFi101.h>
#include <senseBoxIO.h>

void setup()
{
    // Initialisiert den seriellen Monitor
    Serial.begin(9600);

    // Starte WINC1500 (WiFi-Bee) in XBEE1 Socket neu
    senseBoxIO.powerXB1(false);
    delay(250);
    senseBoxIO.powerXB1(true);
}

void loop()
{
    delay(5000);
    // Gibt installierte und aktuellste Firmware Version aus
    String fv = WiFi.firmwareVersion();
    Serial.print("Firmware installed: ");
    Serial.println(fv);
    Serial.print("Latest firmware: ");
    Serial.println(WIFI_FIRMWARE_LATEST_MODEL_B);

    // Gibt IP-Adresse der senseBox aus
    IPAddress ip = WiFi.localIP();
    Serial.print("IP: ");
    Serial.println(ip);
    delay(5000);
}
```

Wenn bei allen Ausgaben im seriellen Monitor Werte angezeigt werden, insbesondere wenn die IP-Adresse etwa in der Form _192.107.256.4_ ausgegeben wird, ist das WiFi-Bee richtig initialisiert und die senseBox kann mit dem Internet genutzt werden.

## Firmware des WiFi-Bees updaten

>Leider haben einige unserer WiFi-Bees vom Typ WINC1500 eine veraltete Firmware (Version 19.4.4) installiert. Leider gibt es keine andere Möglichkeit dieses Firmware zu updaten als es manuell durchzuführen. Im folgenden Kapitel wird erklärt, wie man herausfindet, welche Firmware man benutzt und (falls man eine veraltete Version hat) wie man diese updatet.

### Test der Version

Zuerst musst du überprüfen, welche Version dein WiFi-Bee hat. Gehe dazu in der Arduino IDE auf `Datei` -> `Beispiele` und unter `"Beispiele für senseBox MCU"` auf `Test_WINC1500`.

![](/img/hardware-bilder/bees/wifi-bee/1-test.png)

Lade nun den Sketch auf dein Board (durch Klicken des Pfeil-Symbols). Beachte, dass auf deinem senseBox Board das WiFi-Bee aufgesteckt sein muss (bitte auf XBEE1 aufstecken). Klicke dann auf den seriellen Monitor (durch Klicken des Lupen-Symbols) und es wird geprüft, ob dein Wifi-Bee funktionsfähig ist und angezeigt, welche Firmware darauf installiert ist.

![](/img/hardware-bilder/bees/wifi-bee/2-result.png)

>Wenn du eine Firmware <b>19.5.2, oder höher</b> hast, kannst du hier abbrechen. Dein WiFi-Bee funktioniert einwandfrei.
>Wenn du eine Firmware <b>geringer als 19.5.2</b> hast, musst du leider die Firmware updaten. Wie das funktioniert erfährst du im nächsten Schritt.

### WiFi-Bee Firmware Update

Um die Firmware zu aktualisieren, folge dem Pfad von oben: `Datei` -> `Beispiele` und unter `"Beispiele für senseBox MCU"` auf `WINC1500_Updater`.

![](/img/hardware-bilder/bees/wifi-bee/3-updater.png)

Lade nun den Sketch auf dein Board (durch klicken des Pfeil-Symbols), auf welchem das WiFi-Bee aufgesteckt ist (bitte auf XBEE1 aufstecken).

Anschließend musst du auf `Werkzeuge` klicken und `Wifi 101 Firmware Updater` auswählen.

![](/img/hardware-bilder/bees/wifi-bee/4-firmware-updater.png)

Zuerst kannst du die Verbindung testen, indem du auf den angezeigten `COM Port` klickst und danach auf `Test connection`. Es sollte folgende Information angezeigt werden: `"The programmer is working!"`

![](/img/hardware-bilder/bees/wifi-bee/5-test-connection.png)

Fast geschafft, jetzt nur noch auf `Update Firmware` klicken und der Upload beginnt. Danach sollte eine Erfolgsmeldung kommen `"The firmware has been updated!"`.

![](/img/hardware-bilder/bees/wifi-bee/6-update-firmware.png)


## SSL Zertifikate der openSenseMap auf das WiFi-Modul laden

Seit einiger Zeit benutzt die senseBox und die openSenseMap `https` zur Authentifizierung von Messwerten. Damit dies reibungslos funktioniert benötigt das WiFi-Modul der senseBox die dazugehörigen SSL-Zertifikate.
In der Regel sind diese bei der senseBox schon vorhanden, dieses Tutorial ist nur für die senseBoxen, bei denen die Übertragung an die openSenseMap nicht funktionert!

Bevor du mit diesem Tutorial weitermachst, stelle sicher, dass du diese beiden Schritte vorher absolviert hast:
<ol>
  <li><a href="https://docs.sensebox.de/arduino/allgemein-arduino-ide-installieren/">Arduino IDE installieren</a></li>
  <li><a href="https://docs.sensebox.de/arduino/board-support-package-installieren/">Board Support Packages installieren</a></li>
</ol>
Hast du das erledigt, kannst du mit diesem Tutorial fortfahren.

Lade den WINC1500-Updater aus den Beispielen - senseBox Beispiele auf die senseBox.
![](/img/hardware-bilder/bees/wifi-bee/ArduinoUpdaterSelect.png)


Wenn der Upload erfolgreich abgeschlossen wurde, kannst du nun den WiFi101 Firmware Updater aus den Werkzeugen starten:
![](/img/hardware-bilder/bees/wifi-bee/ArduinoToolsUpdater.png)

Im nun erscheinenden Menü, wählst du den Port, an dem deine senseBox angeschlossen ist, aus.
![](/img/hardware-bilder/bees/wifi-bee/WifiFirmwareTool.png)

Den 2. Punkt `Update Firmware` können wir überspringen und gehen direkt zum 3. Punkt `Update SSL root certificates`.

Klicke nun `Add domain` und gebe dort jeweils `ingress.opensensemap.org`
und `api.opensensemap.org` ein.
![](/img/hardware-bilder/bees/wifi-bee/ingressInput.png)
![](/img/hardware-bilder/bees/wifi-bee/apiInput.png)

Die Übersicht der Zertifikate sollte nun wie folgt aussehen:
![](/img/hardware-bilder/bees/wifi-bee/CertificatesResults.png)

Klicke nun auf Upload `Certificates to WiFi module` und die Zertifikate werden auf die senseBox hochgeladen. Jetzt kannst du wieder deinen ursprünglichen senseBox Code übertragen. Das WiFi-Modul der senseBox ist aktualisiert.

<b>Sollte es zu Problemen bei diesem Schritt kommen, entferne das arduino.cc über den Remove domain Knopf und versuche es erneut.</b>


> - [Shop](https://sensebox.kaufen/product/wifi-bee)
> - [Atmel ATWINC1500 Data Sheet](http://ww1.microchip.com/downloads/en/DeviceDoc/ATWINC15x0-MR210xB-IEEE-802.11-b-g-n-SmartConnect-IoT-Module-Data-Sheet-DS70005304C.pdf)
