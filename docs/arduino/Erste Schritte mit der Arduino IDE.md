---
date: 2020-03-11
title: Erste Schritte mit der Arduino IDE
title_order: 4
categories: arduino
description: Programmierung der senseBox in der Arduino IDE
type: Document
set: erste-schritte-arduino
set_order: 5

resources:
image1: /images/2020-03-11-allgemein-einfuehrung-arduino/arduino-buttons-1.png
image2: /images/2020-03-11-allgemein-einfuehrung-arduino/arduino-buttons-2.png
---
# Erste Schritte mit der Arduino IDE

Bevor du loslegen kannst, musst du die Arduino IDE installieren. Wie dies funktioniert findest du [hier](/allgemein/allgemein-arduino-ide-installieren//)

## Grundlagen

Wenn du die IDE öffnest, siehst du direkt einen großen weißen Bereich, in welchem du dein Programm schreiben wirst.
Im schwarzen Bereich darunter werden dir Status- und Fehlermeldungen angezeigt. Es lohnt sich immer bei Fehlern einen Blick auf diese Meldungen zu werfen.

Zuletzt solltest du dir noch die kleinen Schaltflächen über dem weißen Bereich anschauen.

![](../../static/img/arduino-bilder/erste%20schritte/arduino-buttons-1.png)

Das Häkchen und der Pfeil sind die beiden wichtigsten Symbole für dich:
Mit dem Häkchen kannst du dein Programm auf Schreibfehler überprüfen lassen, und mit den Pfeil überträgst du dein Programm an die senseBox MCU.

![](../../static/img/arduino-bilder/erste%20schritte/arduino-buttons-2.png)

Die anderen drei Symbole - angefangen mit dem kleinen Blatt ganz links - stehen dafür ein neues Programm zu erstellen, ein gespeichertes zu öffnen und dein geschriebenes Programm zu speichern.

## Der Arduino-Sketch
Ein Arduino Programm (auch "Sketch" genannt) hat einen sehr einfachen Aufbau, der aus zwei Hauptbestandteilen besteht. Diese zwei benötigten Funktionen enthalten Blöcke von Anweisungen, welche den Programmablauf beschreiben:

```arduino
void setup(){
    // Anweisung
}
void loop(){
    // Anweisung
}
```
Die `setup`-Funktion wird nur einmal beim Start des Programmes ausgeführt. In der `loop`-Funktion werden hingegen alle Anweisungen in einer endlosen Schleife wiederholt. Beide Funktionen sind zwingend notwendig, um das Programm erfolgreich kompilieren und ausführen zu können. "Kompilieren" bezeichnet die Übersetzung des Programms in einen Maschinencode, welcher vom Arduino-Prozessor verstanden werden kann; dies übernimmt die Arduino-IDE für uns.

Mit einem doppelten Schrägstrich (`//`) lassen sich Kommentare zum Programmcode hinzufügen. Es ist immer wichtig seinen Programmcode zu kommentieren, damit auch andere nachvollziehen können, was an einer bestimmten Stelle passiert.
