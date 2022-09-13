---
sidebar_position: 6
title: Variablen
hide_title: false
---

# Variablen

## Allgemeines
Variablen sind Platzhalter für Zahlen, Buchstaben und Zeichenketten. Das bedeutet, dass eine Variable **nicht** über den gesamten Programmverlauf gleich bleiben muss. Dies ist besonders dann praktisch, wenn du eine bestimmte Information an verschiedenen Stellen im Programm nutzen möchtest.

Variablen lassen sich durch den `Schreibe Element`-Block definieren.

![](/img/blockly-bilder/variablen/blockly-variablen-1.svg)

Im Drodown-Menü des Blocks lässt sich die Variable umbenennen und eine neue Variable erstellen.

## Beispiel
Nach einem Fußballspiel soll in einer Variable gespeichert werden, wie viele Tore gefallen sind. Diese Variable wird dann auf dem Display angezeigt.

![](/img/blockly-bilder/variablen/blockly-variablen-2.svg)

Um das einfache Beispiel etwas zu erweitern, sollen nun live Punkte dazugezählt werden können. Für jedes gefallene Tor muss der eingebaute Knopf auf der MCU einmal gedrückt werden.

![](/img/blockly-bilder/variablen/blockly-variablen-3.svg)

## Datentypen
Je nachdem was in einer Variable gespeichert wird, sollte man den richtigen Datentyp festlegen. Den Datentyp legst du mit Hilfe des `als Zeichen`-Blocks fest. Dieser Block wird an einen `Schreibe Element`-Block angeknüpft. Anschließend wird im freien Blockabschnitt der zu speichernde Wert eingefügt und im Dropdown-Menü der Datentyp gewählt.

![](/img/blockly-bilder/variablen/blockly-variablen-4.svg)


In Blockly gibt es folgende Datentypen:

**Zeichen:**     Für einzelne Textzeichen

**Text:**        Für ganze Wörter oder Sätze

**Boolean:**     Für Werte die entweder wahr oder falsch sind (bzw. 1 oder 0)

**kurze Zahl:**  Für einstellige Zahlen

**Zahl:**        Für ganze Zahlen von -32.768 bis 32.767

**große Zahl:**  Für große Zahlen von -2.147.483.648 bis 2.147.483.647

**Dezimalzahl:** Für Kommazahlen


> - [Blockly.senseBox.de](https://blockly.sensebox.de/)