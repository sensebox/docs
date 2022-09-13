---
date: 2021-01-28
title: Aufbau der senseBox:home v1
categories: misc
description: Aufbau der senseBox:home mit Arduino Uno
type: Document
image1: /images/2021-01-28-rtc-modul/rtc.png
---

# **Aufbau der senseBox:home**

> Diese Anleitung ist nur für Nutzer:innen der senseBox:home v1, die mit einem Arduino/Genuino Uno ausgeliefert wurde. Diese Version der senseBox wird seit Anfang 2018 nicht mehr verkauft! Die Dokumentation zur aktuellen Version der senseBox:home mit senseBox MCU ist [hier](/sensebox-home/home-schritt-1/) zu finden.

## Inhalt der senseBox

#### Basisstation bestehend aus drei Platinen

Die senseBox:home ist in zwei Ausgaben verfügbar: Einmal mit LAN-, und einmal mit WLAN-Netzwerkverbindung.
Je nach Ausgabe ist ein W5500 Ethernet Shield, oder ein Watterott WLAN-Shield enthalten.

![](/img/aufbau-home-v1-bilder/sensebox_home_platinen.jpg)

|Platine|Beschreibung|
| ----- | ------ |
|Genuino Uno (unten)|Liest die angeschlossenen Sensoren aus und überträgt die Messungen ins Internet|
|W5500 Ethernet Shield oder Watterott WLAN-Shield (mitte)|Ist für die Internetverbindung zuständig|
|senseBox Shield (oben)|Hier werden die Sensoren angeschlossen|

#### Grundausstattung mit vier Sensoren

![](/img/aufbau-home-v1-bilder/sensebox_home_sensoren.jpg)


|Sensor|Beschreibung|
|---|---|
|HDC1008|Temperatur in Grad Celsius (°C) und relative Luftfeuchte in Prozent (%)|
|BMP280|Luftdruck in Pascal (pa)|
|TSL45315|Beleuchtungsstärke des sichtbaren Lichts in Lux (lx)|
|VEML6070|Intensität der ultravioletten Strahlung in Mikrowatt pro Quadratcentimeter (μW/cm2)

#### Anschlusskabel für Sensoren und USB-Verbindung

- 1x USB-Kabel für den Anschluss des Mikrocontrollers an den Computer
- 1x langes Verbindungskabel für kombiniertes Thermo- bzw. Hygrometer
- 3x kurzes Verbindungskabel für Barometer, Luxmeter und UV-Lichtsensor

#### Netzteil

- 9V Netzteil (670mA)

#### Gesamtüberblick:

![](/img/aufbau-home-v1-bilder/sensebox_home_alles.jpg)


## Zusätzliche Materialien (NICHT im Lieferumfang enthalten)

- LAN-Kabel für den Anschluss der senseBox an euren Router, falls die senseBox:home LAN vorliegt
- Gehäuse für eine wetterfeste Installation der Elektronik
- Werkzeuge für den Aufbau wie z.B. Heißklebepistole

---

# Aufbau der senseBox
Du kannst deine Messstation kann in wenigen Schritten zusammenbauen.

> Die senseBox wird entweder über das USB-Kabel oder über das Netzteil mit Strom versorgt. Für den temporären Betrieb wird das Netzteil also nicht benötigt.

Im Bausatz der senseBox:home befinden sich vier kleinen Platinen mit den Sensoren. Die eigentlichen Sensoren sind nur wenige Millimeter groß und befinden sich auf der Oberseite der Platinen. Um einer Beschädigung vorzubeugen, solltest du die kleinen Sensoren nicht berühren, sondern die Platinen nur am Rand anfassen. Der Anschluss der Sensoren ist denkbar einfach: Benutze die Verbindungskabel, um die Sensoren mit den mittleren Steckplätzen auf der Basisstation zu verbinden. Welcher Anschluss dabei gewählt wird spielt keine Rolle.

![](/img/aufbau-home-v1-bilder/02_connection.png)


> Das lange Verbindungskabel ist für den HDC1008 gedacht, um ihn außerhalb eines Gehäuses anbringen zu können!


# Treiber und Softwareinstallation
Bevor die senseBox aktiviert werden kann, musst du Treiber sowie eine Software auf deinem Computer installieren. Außerdem ist es vor Inbetriebnahme der senseBox ratsam einen Testlauf durchzuführen, um zu überprüfen ob die Sensoren korrekt funktionieren und die Kommunikation mit dem Internet reibungslos läuft.

Falls etwas bei dem Testlauf schief geht, melde dich am besten [per Mail](mailto:support@sensebox.de) bei unserem Support.

## Arduino Software herunterladen
> Für einen reibungslosen Ablauf bitte Arduino 1.8.3 oder höher nutzen.

Das Mainboard der senseBox ist eine modifizierte Version des Arduino Uno Mikrocontrollers. Um ein Programm auf das Board zu laden, brauchst du die integrierte Entwicklungsumgebung von Arduino, kurz *Arduino IDE*. Lade die neueste Version als zip-Datei von der [Arduino Homepage](https://www.arduino.cc/en/main/software) herunter:

![](/img/aufbau-home-v1-bilder/03_arduino-dl.png)


Arduino ist ein Open-Source Projekt und wird durch Spenden finanziert. Daher wirst du vor dem Download nach einer Spende gefragt; das kannst du überspringen indem du auf „just download“ klickst.

![](/img/aufbau-home-v1-bilder/04_donate.png)


Lege auf deiner Festplatte einen neuen Ordner an und entpacke darin die Zip-Datei.
Durch starten der Datei `arduino.exe` kann die IDE gestartet werden.

## Installation der IDE unter Linux
Linux-Nutzer können die Linuxvariante herunterladen und entpacken. Das enthaltene `install.sh`-Skript legt automatisch eine Desktopverknüpfung an.
Am schnellsten geht dies über die folgenden Terminal-Befehle:

```bash
tar -xvf arduino-1.8.3-linux64.tar.xz
cd arduino-1.8.3
./install.sh
```

Um den Arduino programmieren zu können, sind unter Ubuntu 14 & 16 zusätzliche Rechte notwendig.
Diese können für den aktuellen Nutzer mit den folgenden Befehlen eingerichtet werden (benötigt Admin-Rechte):
Führe `udevadm monitor --udev` aus und schließe den Arduino per USB an, um die Device-ID zu bestimmen.
Der angegebene Bezeichnung am Ende der Ausgabe (zB. `ttyUSB0`) ist die Device-ID.
Beende `udevadm` per `ctrl+C`, und führe noch die folgenden Befehle aus, wobei die herausgefundene Device-ID eingesetzt werden muss:

```bash
sudo usermod -a -G dialout $(whoami)
sudo chmod a+rw /dev/<device-id>
```

Nach einem Logout und erneutem Login sollte der Arduino aus der Arduino IDE programmierbar sein!

## Arduino Bibliotheken installieren
Um die Sensoren und die Netzwerkkarte nutzen zu können, müssen noch ein paar Bibliotheken installiert werden. Ein zip-Archiv mit allen benötigten Bibliotheken findest du [hier](https://github.com/sensebox/resources/raw/master/libraries/senseBox_Libraries.zip).

Lade dieses zip-Archiv herunter und integriere nun die beiden Ordner `examples` und `libraries` aus dem Archiv in deinen Arduino Ordner.
Wenn ihr gefragt werdet ob bestehende Dateien ersetzt werden sollen, folge den Anweisungen unten auf der Seite.

![](/img/aufbau-home-v1-bilder/06_copy.png)


Setze nun wie unten dargestellt im ersten Dialogfeld den Haken unten und bestätigt mit „Ja“. Daraufhin öffnet sich ein neues Fenster, in dem du wieder den Haken setzt, und „Kopieren und ersetzen“ auswählst.

![](/img/aufbau-home-v1-bilder/07_replace.png)


Das folgende Video zeigt den Kopiervorgang noch einmal im Detail:

<iframe width="560" height="315" src="https://www.youtube.com/embed/j-hdRJp2o4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Sensoren testen
Die Sensoren der senseBox:home können nun auf funktionstüchtigkeit und getestet werden.
Hierzu gibt es einen Sketch, welcher mit den zuvor Arduino-Bibliotheken installiert wurde.
Vorraussetzung für den test ist natürlich, dass die Sensoren mit dem Arduino verbunden wurden ;)

1. Arduino Anwendung starten
    - Es kann sein, dass nach dem Start eine Meldung über neue Updates erscheint. Fall du die Version 1.6.5 oder höher installiert hast, kannst du dies überspringen.
2. unter `Werkzeuge` → `Board` das `Arduino Uno` auswählen
3. unter `Werkzeuge` → `COM-Port` den entsprechenden Anschluss wählen
    - Falls mehrere Auswahlmöglichkeiten angezeigt werden, musst du zuerst den richtigen COM-Port im Geräte Manager finden, oder alle Ports ausprobieren.

Ladet nun das Programm, um die Sensoren zu testen und übertragt es auf die Messstation:

1. in der Menüleiste `Datei` → `Beispiele` → `senseBox` → `_01_sensor_test` auswählen
2. das Programm über das **Pfeil** Icon auf den Mikrocontroller laden
3. warten bis das Programm übertragen wurde
4. den seriellen Monitor über das **Lupe** Icon öffnen

![](/img/aufbau-home-v1-bilder/11_serial1.png)


Du kannst durch experimente prüfen, ob sich die gemessene Temperatur, Luftfeuchtigkeit oder Beleuchtungsstärke verändern.
Der Luftdruck lässt sich nicht ohne weiteres beeinflussen. Er sollte grob, je nach Höhenlage und Wetterverhältnissen, zwischen 600 hPa und 1000 hPa liegen.
Die Intensität des UV-Lichts kann nur mit speziellen Lampen oder durch direkte Sonneneinstrahlung getestet werden.
In einem geschlossen Raum sollte keine bzw. nur minimale UV-Strahlung gemessen werden können.

## Verbindung zur openSenseMap testen
Nach dem selben Schema kann noch die Internetverbindung der senseBox:home getestet werden:

1. den seriellen Monitor (Fenster mit den Messwerten) schließen
2. wenn ein Ethernet Modell vorliegt:
    - ein Netzwerkkabel von eurem Heimnetzwerk mit der senseBox verbinden 
    - in Menüleiste `Datei` → `Beispiele` → `senseBox` → `_02_internet_test` auswählen
2. mit WLAN-Modell:
    - in Menüleiste `Datei` → `Beispiele` → `senseBox` → `_03_wifi_internet_test`
    - ganz oben in der Datei `03_wifi_internet_test`die WLAN Zugangsdaten eintragen (Netzwerk-Name und Passwort)
3. das Programm über das **Pfeil** Icon auf den Mikrocontroller laden
4. den seriellen Monitor über das **Lupe** Icon starten

Wenn die Verbindung klappt, bekommst du eine entsprechende Meldung im seriellen Monitor angezeigt.

![](/img/aufbau-home-v1-bilder/12_serial2.png)


# Web-Integration
Hier wird die Einbindung der senseBox in unser Sensornetzwerk durch die Registrierung auf der openSenseMap beschrieben.

## Registrierung auf der openSenseMap
Unter <https://opensensemap.org/register> kann eine neue Sensorstation für das openSenseMap Sensornetzwerk registriert werden.
<!--Eine detaillierte Anleitung dazu findet sich in der [openSenseMap Dokumentation](https://books.sensebox.de/books/osem/de/osem_registrierung.html).-->
Während der Registrierung wirst du nach einem Hardware Setup gefragt. Wähle dort die „senseBox:home“ aus und setze danach je nach Variante den Haken bei „senseBox:home (Ethernet)“ oder „senseBox:home (WLAN)“.

Ein Software-Programm für einen Arduino Mikrocontroller ist an der Dateiendung `.ino` zu erkennen. Eine solche Datei wird benötigt, um eure senseBox mit der openSenseMap im Internet zu verbinden. Den passenden Sketch bekommst du zusammen mit einer E-Mail zugeschickt, wenn die Station auf der openSenseMap registriert wurde.

## Programm auf die Station laden
Nachdem du den `.ino` Anhang der Email heruntergeladen hast, muss dieses Programm auf deine senseBox geladen werden. Wie man genau ein Programm auf den Mikrocontroller lädt, ist [hier](software_installation.md) ausführlich erklärt worden. Hier die Schritte in der Übersicht:

- Arduino Anwendung öffnen
- In der Menüleiste `Datei` → `Öffnen` auswählen und die `sensebox.ino` Datei auswählen
- Dialog mit "Ja" bestätigen
- Das Programm über das **Pfeil** Icon auf den Mikrocontroller laden
- Warten bis das Programm übertragen wurde

Wenn alles richtig gelaufen ist, kannst du nun auf der openSenseMap deine Station auswählen und verfolgen, wie Messungen kontinuierlich übertragen werden!


