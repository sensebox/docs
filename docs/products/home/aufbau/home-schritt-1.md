---
sidebar_position: 5
title: "Schritt 1: Aufbau der Hardware"
description: Schritt 1 zum Aufbau der senseBox:home.
---

# Schritt 1: Aufbau der Hardware

## Willkommen zum Tutorial für den Zusammenbau der senseBox:home

:::info
Achtung: Seit Dezember 2020 kommt ein neues Acrylgehäuse zum Einsatz. Nur der erste Schritt unterscheidet sich vom bisherigen Aufbau. Alle weiteren Schritte können analog zum alten Gehäuse durchgeführt werden.
:::
Da die senseBox ein modularer Bausatz ist, können einzelne Schritte zu Sensoren abweichen oder sogar in deinem Fall übersprungen werden.

## Einsetzen der MCU ins Gehäuse

Im ersten Schritt wird die MCU in das Gehäuse eingesetzt. Das System wurde im Laufe der Zeit leicht überarbeitet, sodass seit Dezember 2020 ein neues Befestigungssystem verwendet wird.

### senseBox:home ab Dezember 2020

senseBoxen die seit Dezember 2020 gekauft wurden, sind mit einem neuen Gehäuse ausgestattet. Hierbei unterscheidet sich der Zusammenbau nur in den ersten Schritten leicht von der alten Variante. Zuerst verschaffen wir uns einen Überblick über die verfügbaren Bauteile.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-32.jpeg)

Von der Acrylplatte kann nun die Folie entfernt werden.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-33.jpeg)

Nun schraubst du die Acryllplatte in das Gehäuse fest. Achte darauf, dass die Öffnung für den USB-Anschluss zur Öffnung des Gehäuses zeigt.
Danach kannst du mit den schwarzen Schrauben die senseBox MCU auf die Acryllplatte befestigen. Hier muss wieder darauf geachtet werden, dass der USB-Anschluss zur Öffnung des Gehäuses ausgerichtet ist.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-34.jpeg)

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-35.jpeg)

Die folgenden Schritte können analog zum alten Gehäuse/Befestigungssystem durchgeführt werden.

### senseBox:home bis November 2020

Zuerst zeigen wir, wie der Microcontroller in das Gehäuse eingesetzt wird.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-1.jpg)

Dazu nimmst du das Gehäuse und richtest es mit der Aufbohrung nach unten aus. Der grüne senseBox Microcontroller wird nun auf der gegenüberliegenden Seite aufgelegt, sodass der rote Reset-Knopf und der USB-Port nach vorne zeigen.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-2.jpg)

Nun nimmst du die zwei beiliegenden kleineren Schrauben und befestigst die Platine über die mittleren Bohrlöcher am Gehäuse. Wenn die Platine etwas Spielraum hat, ist das kein Problem.

## Aufsetzen des WiFi-Bee

Als nächstes zeigen wir, wie das Wifi-Bee aufgesetzt wird.

Dazu haben wir auf alle Bees eine Kennzeichnung aufgedruckt, welche die Richtung anzeigt. Wenn du ein anderes Datenübertragungsmodul hast, z.B. LAN, oder LoRaWAN, erfolgt das Aufsetzen aber genau gleich.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-3.jpg)

Das Wifi-Bee wird auf den XBee-Port 1 aufgesetzt und vorsichtig in die Sockelleiste eingedrückt, sodass alle Pins des Bees eingesteckt sind.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-4.jpg)

## Aufbau des Strahlenschutz-Gehäuse

Nun zeigen wir den Aufbau des Stahlenschutz-Gehäuses, in welchem der Temperatur- und Luftfeuchtigkeitssensor angebracht wird.
Im Strahlenschutz befinden sich einige Befestigungsteile, um diesen später außen anzubringen. Diese brauchen wir erstmal nicht.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-5.jpg)

Zuerst wird ein langes senseBox Kabel durch die Öffnung im Boden des Strahlenschutzes gezogen und der Temperatur- und Luftfeuchtigkeitssensor innen angesteckt.

Der Sensor kann nun zusätzlich noch mit etwas Klebeband oder einem Kabelbinder am Ständer befestigt werden. Das Strahlenschutzgehäuse sorgt später für eine gute Luftzirkulation und schützt den Sensor gleichzeitig vor der Witterung.
Nun kann das Strahlenschutzgehäuse noch zusammengesteckt werden und später wird der Sensor dann mit dem senseBox Microcontroller verbunden.

## Aufbau des Feinstaubsensors

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-10.jpg)

Als Nächstes zeigen wir den Aufbau des Feinstaubsensors.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-11.jpg)

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-13.jpg)

Dazu muss das Gehäuse für den Sensor mit Öffnungen für Kabel und die Luftzufuhr versehen werden.
Die Öffnungen sollen gegenüberliegend auf den Seiten mit jeweils zwei Sollbruchstellen liegen.
Aus Sicherheitsgründen empfehlen wir die Öffnungen aufzubohren. Theoretisch, kann man die Öffnungen aber auch an den Sollbruchstellen mit einem stumpfen Gegenstand aufschlagen.

Als Nächstes nehmen wir den Feinstaubsensor und legen ihn in das Gehäuse, sodass der Kabel-Anschluss und der Luftansaugstutzen an den gerade gebohrten Öffnungen liegen.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-14.jpg)

Das Kabel für den Feinstaubsensor hat eine andere Farbe und wird mit dem größeren Anschluss am Sensor angebracht.

Dann werden die Verschraubungen für den Kabelanschluss angebracht.
Einfach die Kabelverschraubung auseinanderschrauben und dann die einzelnen Teile in der richtige Reihenfolge einsortieren. Dann noch schnell zusammenschrauben und das war´s.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-15.jpg)

Auf der anderen Seite des Sensors wird nun der Schlauch auf den Luftansaugstutzen aufgesteckt.

> Der Luftansaugstutzen wird seit einiger Zeit mit einem Filter ausgeliefert. Dieser Filter sorgt dafür, dass grober Dreck und Insekten nicht in den Sensor gelangen.
> Hier benutzen wir auch eine Kabelverschraubung, um den Schlauch abzudichten. Dann heißt es wieder alles richtig einsortieren. Am Ende ist etwas Druck auf den Schlauch nötig, um ihn auf den Stutzen aufzusetzen. Als letztes noch den Deckel aufsetzen und der Feinstaubsensor ist fertig.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-16.jpg)

## Anschluss der externen Sensoren an die MCU

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-17.jpg)

Die außenliegenden Sensoren, also der Sensor für Temperatur und Luftfeuchtigkeit, sowie der Feinstaubsensor werden jetzt an die MCU angeschlossen.
Dafür nehmen wir zuerst das Kabel aus dem Strahlenschutz und fädeln es durch die letzte Kabelverschraubung in das Gehäuse.

Dort wird das Kabel in einen der Steckplätze mit der Aufschrift I2C/Wire eingesteckt.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-19.jpg)

Danach wird das Kabel aus dem Feinstaubsensor genommen und durch die Verschraubung eingefädelt.
Dieses Kabel kommt in einen der Steckplätze welche mit UART/Serial beschriftet sind.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-20.jpg)

## Verbinden des USB-Kabels

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-23.jpg)

Als letztes schließen wir noch das Mini-USB Kabel an, über welches der Microcontroller programmiert wird sowie die senseBox später im Betrieb mit Strom versorgt wird.
Bitte beachte, dass der Mini-USB Port empfindlich ist und außerdem der Hebelwirkung des Kabels ausgesetzt ist. Deshalb sollte später möglichst nicht am USB-Kabel gerissen werden.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-24.jpg)

## Anschluss der internen Sensoren an die MCU

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-25.jpg)

Nachdem die äußeren Sensoren angeschlossen sind, werden die übrigen Sensoren im Gehäuse angebracht.
Dafür wird eine Montageebene aufgebaut. Zuerst werden vier Abstandhalter in die außenliegenden Löcher des Mikrocontrollers eingesteckt.
Die Abstandshalter haben einen Rastermechanismus. Deshalb sollten diese, falls sie mal gelöst werden müssen, nicht mit Gewalt rausgerissen werden, sondern leicht am Kopf eingedrückt werden.
Danach schließen wir zwei senseBox Kabel in die I2C/Wire Steckplätze, um dort den Luftdruck Sensor und den Lichtsensor anzubringen.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-26.jpg)

Die Kabel werden durch die mittleren Aussparungen der Montageplatte gefädelt.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-27.jpg)

Dann wird die Montageplatte auf die Abstandshalter gedrückt und die Kabel mit den Sensoren verbunden.
Die Sensoren werden mit jeweils zwei Abstandhalter ausgestattet und auf der Montageplatte befestigt.
Hast du einen Lichtsensor gewählt, sollte dieser möglichst mittig im Gehäuse angebracht werden, um gute Messwerte zu erhalten.
Der Luftdruck-Sensor kann in den äußeren Steckplatz.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-28.jpg)

Als letztes wird der Deckel mit den Schrauben versehen und ein Silikagelbeutel zum weiteren Schutz vor entstehende Feuchtigkeit in das Gehäuse gelegt.

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-29.jpg)

![](/img/sensebox-home-bilder/home-schritt-1/sensebox-home-30.jpg)

Nun werden noch die Schnellverschlussschrauben eingedreht und damit die senseBox verschlossen.
