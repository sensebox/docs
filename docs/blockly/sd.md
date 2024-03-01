---
sidebar_position: 10
title: SD-Karte
hide_title: false
---

Mit der senseBox kannst du mithilfe des SD-Bees Daten auf einer microSD-Karte speichern, um sie später am Computer auszuwerten.

## Werte auf SD-Karte speichern
Mit dem `Erstelle Datei auf SD-Karte`-Block kann im Setup() eine neue Datei auf der SD-Karte erstellt werden. Im Dropdown-Menü des Blocks kann der Name der Datei geändert werden.

![](/img/blockly-bilder/sd-karte/blockly-SD-1.svg)

Mit dem `Öffne Datei auf SD-Karte`-Block kann anschließend in der Endlosschleife die zuvor erstellte Datei geöffnet werden.

![](/img/blockly-bilder/sd-karte/blockly-SD-2.svg)

Im freien Blockabschnitt des `Öffne Datei auf SD-Karte`-Blocks kann dann der `Schreibe Daten auf SD-Karte`-Block platziert werden. In diesem kann im freien Blockabschnitt wiederum der zu schreibende Text oder die zu schreibende Zahl platziert werden. Zusätzlich kann durch setzen des Häkchens bei `Zeilenumbruch` festgelegt werden, ob nach jedem Messwert ein Zeilenumbruch eingefügt werden soll oder nicht.

![](/img/blockly-bilder/sd-karte/blockly-SD-3.svg)

## Beispiel
Im folgenden Beispiel wird die Temperatur in einer Variable gespeichert und anschließend auf die SD-Karte geschrieben. Mehr zum Thema Variablen findest du im gleichnamigen Kapitel.

![](/img/blockly-bilder/sd-karte/blockly-SD-4.svg)

> - [Blockly.senseBox.de](https://blockly.sensebox.de/)