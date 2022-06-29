---
sidebar_position: 5
title: 'Schritt 1: Aufbau der Hardware'
description: Schritt 1 zum Aufbau der senseBox:home.
---


## Willkommen zum Tutorial für den Zusammenbau der senseBox:home

> Achtung: Seit Dezember 2020 kommt ein neues Acrylgehäuse zum Einsatz. Nur der erste Schritt unterscheidet sich vom bisherigen Aufbau. Alle weiteren Schritte können analog zum alten Gehäuse durchgeführt werden.

Da die senseBox ein modularer Bausatz ist, können einzelne Schritte zu Sensoren abweichen oder sogar in deinem Fall übersprungen werden.

## Einsetzen der MCU ins Gehäuse

Im ersten Schritt wird die MCU in das Gehäuse eingesetzt. Das System wurde im Laufe der Zeit leicht überarbeitet, sodass seit Dezember 2020 ein neues Befestigungssystem verwendet wird.

### senseBox:home ab Dezember 2020
senseBoxen die seit Dezember 2020 gekauft wurden, sind mit einem neuen Gehäuse ausgestattet. Hierbei unterscheidet sich der Zusammenbau nur in den ersten Schritten leicht von der alten Variante. Zuerst verschaffen wir uns einen Überblick über die verfügbaren Bauteile.
{% include image.html image=page.image24 %}
Von der Acrylplatte kann nun die Folie entfernt werden.
{% include image.html image=page.image25 %}
Nun schraubst du die Acryllplatte in das Gehäuse fest. Achte darauf, dass die Öffnung für den USB-Anschluss zur Öffnung des Gehäuses zeigt.
Danach kannst du mit den schwarzen Schrauben die senseBox MCU auf die Acryllplatte befestigen. Hier muss wieder darauf geachtet werden, dass der USB-Anschluss zur Öffnung des Gehäuses ausgerichtet ist.
{% include image.html image=page.image26 %}
{% include image.html image=page.image27 %}

Die folgenden Schritte können analog zum alten Gehäuse/Befestigungssystem durchgeführt werden.

### senseBox:home bis November 2020

Zuerst zeigen wir, wie der Microcontroller in das Gehäuse eingesetzt wird.
{% include image.html image=page.image1 %}
Dazu nimmst du das Gehäuse und richtest es mit der Aufbohrung nach unten aus. Der grüne senseBox Microcontroller wird nun auf der gegenüberliegenden Seite aufgelegt, sodass der rote Reset-Knopf und der USB-Port nach vorne zeigen.

{% include image.html image=page.image2 %}

Nun nimmst du die zwei beiliegenden kleineren Schrauben und befestigst die Platine über die mittleren Bohrlöcher am Gehäuse. Wenn die Platine etwas Spielraum hat, ist das kein Problem.

## Aufsetzen des WiFi-Bee <a name="2"></a>
Als nächstes zeigen wir, wie das Wifi-Bee aufgesetzt wird.

Dazu haben wir auf alle Bees eine Kennzeichnung aufgedruckt, welche die Richtung anzeigt. Wenn du ein anderes Datenübertragungsmodul hast, z.B. LAN, oder LoRaWAN, erfolgt das Aufsetzen aber genau gleich.
{% include image.html image=page.image3 %}

Das Wifi-Bee wird auf den XBee-Port 1 aufgesetzt und vorsichtig in die Sockelleiste eingedrückt, sodass alle Pins des Bees eingesteckt sind.

{% include image.html image=page.image4 %}


## Aufbau des Strahlenschutz-Gehäuse

Nun zeigen wir den Aufbau des Stahlenschutz-Gehäuses, in welchem der Temperatur- und Luftfeuchtigkeitssensor angebracht wird.
Im Strahlenschutz befinden sich einige Befestigungsteile, um diesen später außen anzubringen. Diese brauchen wir erstmal nicht.

{% include image.html image=page.image5 %}

Zuerst wird ein langes senseBox Kabel durch die Öffnung im Boden des Strahlenschutzes gezogen und der Temperatur- und Luftfeuchtigkeitssensor innen angesteckt.



Der Sensor kann nun zusätzlich noch mit etwas Klebeband oder einem Kabelbinder am Ständer befestigt werden. Das Strahlenschutzgehäuse sorgt später für eine gute Luftzirkulation und schützt den Sensor gleichzeitig vor der Witterung.
Nun kann das Strahlenschutzgehäuse noch zusammengesteckt werden und später wird der Sensor dann mit dem senseBox Microcontroller verbunden.

## Aufbau des Feinstaubsensors

{% include image.html image=page.image6 %}

Als Nächstes zeigen wir den Aufbau des Feinstaubsensors.
{% include image.html image=page.image7 %}


{% include image.html image=page.image8 %}
Dazu muss das Gehäuse für den Sensor mit Öffnungen für Kabel und die Luftzufuhr versehen werden.
Die Öffnungen sollen gegenüberliegend auf den Seiten mit jeweils zwei Sollbruchstellen liegen.
Aus Sicherheitsgründen empfehlen wir die Öffnungen aufzubohren. Theoretisch, kann man die Öffnungen aber auch an den Sollbruchstellen mit einem stumpfen Gegenstand aufschlagen.


Als Nächstes nehmen wir den Feinstaubsensor und legen ihn in das Gehäuse, sodass der Kabel-Anschluss und der Luftansaugstutzen an den gerade gebohrten Öffnungen liegen.

{% include image.html image=page.image9 %}

Das Kabel für den Feinstaubsensor hat eine andere Farbe und wird mit dem größeren Anschluss am Sensor angebracht.


Dann werden die Verschraubungen für den Kabelanschluss angebracht.
Einfach die Kabelverschraubung auseinanderschrauben und dann die einzelnen Teile in der richtige Reihenfolge einsortieren. Dann noch schnell zusammenschrauben und das war´s.

{% include image.html image=page.image10 %}
 Auf der anderen Seite des Sensors wird nun der Schlauch auf den Luftansaugstutzen aufgesteckt.

> Der Luftansaugstutzen wird seit einiger Zeit mit einem Filter ausgeliefert. Dieser Filter sorgt dafür, dass grober Dreck und Insekten nicht in den Sensor gelangen.
Hier benutzen wir auch eine Kabelverschraubung, um den Schlauch abzudichten. Dann heißt es wieder alles richtig einsortieren. Am Ende ist etwas Druck auf den Schlauch nötig, um ihn auf den Stutzen aufzusetzen. Als letztes noch den Deckel aufsetzen und der Feinstaubsensor ist fertig.

{% include image.html image=page.image11 %}

## Anschluss der externen Sensoren an die MCU

{% include image.html image=page.image12 %}
Die außenliegenden Sensoren, also der Sensor für Temperatur und Luftfeuchtigkeit, sowie der Feinstaubsensor werden jetzt an die MCU angeschlossen.
Dafür nehmen wir zuerst das Kabel aus dem Strahlenschutz und fädeln es durch die letzte Kabelverschraubung in das Gehäuse.
{% include image.html image=page.image13 %}
Dort wird das Kabel in einen der Steckplätze mit der Aufschrift I2C/Wire eingesteckt.
{% include image.html image=page.image14 %}


Danach wird das Kabel aus dem Feinstaubsensor genommen und durch die Verschraubung eingefädelt.
Dieses Kabel kommt in einen der Steckplätze welche mit UART/Serial beschriftet sind.

{% include image.html image=page.image15 %}

## Verbinden des USB-Kabels

{% include image.html image=page.image16 %}

Als letztes schließen wir noch das Mini-USB Kabel an, über welches der Microcontroller programmiert wird sowie die senseBox später im Betrieb mit Strom versorgt wird.
Bitte beachte, dass der Mini-USB Port empfindlich ist und außerdem der Hebelwirkung des Kabels ausgesetzt ist. Deshalb sollte später möglichst nicht am USB-Kabel gerissen werden.
{% include image.html image=page.image17 %}

## Anschluss der internen Sensoren an die MCU

{% include image.html image=page.image18 %}
Nachdem die äußeren Sensoren angeschlossen sind, werden die übrigen Sensoren im Gehäuse angebracht.
Dafür wird eine Montageebene aufgebaut. Zuerst werden vier Abstandhalter in die außenliegenden Löcher des Mikrocontrollers eingesteckt.
Die Abstandshalter haben einen Rastermechanismus. Deshalb sollten diese, falls sie mal gelöst werden müssen, nicht mit Gewalt rausgerissen werden, sondern leicht am Kopf eingedrückt werden.
Danach schließen wir zwei senseBox Kabel in die I2C/Wire Steckplätze, um dort den Luftdruck Sensor und den Lichtsensor anzubringen.
{% include image.html image=page.image19 %}

Die Kabel werden durch die mittleren Aussparungen der Montageplatte gefädelt.
{% include image.html image=page.image20 %}
Dann wird die Montageplatte auf die Abstandshalter gedrückt und die Kabel mit den Sensoren verbunden.
Die Sensoren werden mit jeweils zwei Abstandhalter ausgestattet und auf der Montageplatte befestigt.
Hast du einen Lichtsensor gewählt, sollte dieser möglichst mittig im Gehäuse angebracht werden, um gute Messwerte zu erhalten.
Der Luftdruck-Sensor kann in den äußeren Steckplatz.
{% include image.html image=page.image21 %}

Als letztes wird der Deckel mit den Schrauben versehen und ein Silikagelbeutel zum weiteren Schutz vor entstehende Feuchtigkeit in das Gehäuse gelegt.
{% include image.html image=page.image22 %}
{% include image.html image=page.image23 %}
Nun werden noch die Schnellverschlussschrauben eingedreht und damit die senseBox verschlossen.
