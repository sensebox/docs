---
sidebar_position: 9
title: Mathematik
hide_title: false
---
# Mathematik

## Allgemeines
In Blockly hast du die Möglichkeit, verschiedene mathematische Operationen durchzuführen. Du kannst Zahlen verrechnen, Zufallszahlen erstellen und Werte auf einen anderen Wertebereich verteilen.

## Zahlen verrechnen
In Blockly kannst du verschiedene mathematische Berechnungn durchführen lassen. Dazu stehen dir folgende Blöcke zur Verfügung:
________________________________________
| Block | Funktion |
| :-----: | :--------: |
| ![](/img/blockly-bilder/mathematik/blockly-mathematik-1.svg) | Eine Zahl. |
| ![](/img/blockly-bilder/mathematik/blockly-mathematik-2.svg) | Einfache mathematische Operationen. |
| ![](/img/blockly-bilder/mathematik/blockly-mathematik-3.svg) | Eine Zahl. |
| ![](/img/blockly-bilder/mathematik/blockly-mathematik-4.svg) | Trigonometrische Funktionen. |
| ![](/img/blockly-bilder/mathematik/blockly-mathematik-5.svg) | Mathematische Konstanten. |
| ![](/img/blockly-bilder/mathematik/blockly-mathematik-6.svg) | Zahlen überprüfen. |
| ![](/img/blockly-bilder/mathematik/blockly-mathematik-7.svg) | Einen bestimmten Wert zu einer Zahl addieren. |
| ![](/img/blockly-bilder/mathematik/blockly-mathematik-8.svg) | Eine Zahl runden. |
| ![](/img/blockly-bilder/mathematik/blockly-mathematik-9.svg) | Den Rest einer Division angeben. |
| ![](/img/blockly-bilder/mathematik/blockly-mathematik-10.svg) | Den Wertebereich einer Zahl begrenzen. |
________________________________________

## Zufallszahlen
In Blockly kannst du dir zufällige Zahlen ausgeben lassen. Dazu stehen dir zwei verschiedene Blöcke zur Verfügung.

![](/img/blockly-bilder/mathematik/blockly-mathematik-11.svg)  

Mit dem Block `ganzzahliger Zufallswert` kannst du dir einen ganzzahligen Zufallswert aus einem definierten Wertebereich ausgeben lassen.

![](/img/blockly-bilder/mathematik/blockly-mathematik-12.svg) 

Mit dem Block `Zufallszahl (0.0-1.0)` kannst du eine zufällige Kommazahl zwischen 0.0 und 1.0 ausgeben lassen.

## Werte verteilen
Mit dem `Verteile Wert`-Block kannst du Zahlen, bspw. Messwerte, auf einen neuen Wertebereich verteilen (engl. mappen). Dies ist dann nützlich, wenn du deine Messwerte beispielsweise direkt in einen Prozentwert zwischen 0 und 100 umrechnen möchtest.

![](/img/blockly-bilder/mathematik/blockly-mathematik-13.svg) 

An den freien Blockabschnitten werden musst die die Grenzen des ursprünglichen und die Grenzen des neuen Wertebreichs mit Hilfe der `Zahl`-Blöcke festlege.

Im folgenden Beispiel wird der gesamte Wertebereich des Hellgikeitssensors (von 3 bis 200.000 Lux) auf einen neuen Wertebereich von 0 bis 100 verteilt.

![](/img/blockly-bilder/mathematik/blockly-mathematik-14.svg) 


> - [Blockly.senseBox.de](https://blockly.sensebox.de/)