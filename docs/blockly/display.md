---
sidebar_position: 3
title: Display
hide_title: false
---
# Display

## Allgemeines
In der senseBox ist ein OLED-Display enthalten. Dieses kann benutzt werden, um z.B. Text, Messwerte oder Graphen anzeigen zu lassen.
Das Display hat eine Auflösung von 128x64 Pixeln. Das heißt 128 Pixel in horizontaler Richtung (x-Achse) und 64 Pixel in vertikaler Richtung (y-Achse).

![](/img/blockly-bilder/display/Display.png)

Um Informationen auf dem Display anzeigen zu lassen, muss dieses zuerst im `Setup()` initalisiert werden. Anschließend können in der `Endlosschleife()` die `Zeige auf dem Display`-Schleife und der `Display löschen`-Block platziert werden. Im freien Abschnitt des `Zeige auf Display`-Blocks kann dann anschließend festgelegt werden, was genau angezeigt werden soll. Der `Display löschen`-Block muss hinzugefügt werden, damit verschiedene Informationen nicht übereinander geschrieben werden.

![](/img/blockly-bilder/display/blockly-display-1.svg)

## Text/Zahl anzeigen
Um Text oder eine Zahl anzeigen zu lassen, ziehe den `Schreibe Text/Zahl`-Block in den freien Abschnitt des `Zeige auf Display`-Blocks.

![](/img/blockly-bilder/display/blockly-display-2.svg)

Der `Schreibe Text/Zahl`-Block verfügt über fünf Einstellungsmöglichkeiten:
* **Schriftfarbe:** Hier kannst du wählen ob du mit weißer Schrift auf schwarzem Grund, oder mit schwarzer Schrift auf weißem Grund schreiben möchtest.
* **Schriftgröße:** Hier kannst du einstellen, in welcher Größe dein Text, bzw. deine Zahl angezeigt werden soll. In Schriftgröße 1 ist ein Zeichen 8 Pixel hoch, in Schriftgröße 2 bereits 16 Pixel.
* **x-Koordinate:** Hier legst du fest, an welcher x-Koordinate (siehe Abb. oben) du beginnen möchtest zu schreiben.
* **y-Koordinate:** Hier legst du fest, an welcher y-Koordinate (siehe Abb. oben) du beginnen möchtest zu schreiben.
* **Wert:** An diesen freien Blockabschnitt kann der jeweilige Text, die Zahl oder der Messwert angefügt werden.

![](/img/blockly-bilder/display/blockly-display-3.svg)

## Punkt zeichnen
Um einen Punkt auf dem Display anzeigen zu lassen, ziehe den `Zeichne Punkt`-Block in den freien Abschnitt des `Zeige auf Display`-Blocks.

![](/img/blockly-bilder/display/blockly-display-4.svg)

Der `Zeichne Punkt`-Block verfügt über vier Einstellungsmöglichkeiten:
* **x-Koordinate:** Hier legst du fest, an welcher x-Koordinate (siehe Abb. oben) der Punkt gezeichnet werden soll.
* **y-Koordinate:** Hier legst du fest, an welcher y-Koordinate (siehe Abb. oben) der Punkt gezeichnet werden soll.
* **Radius:**  Hier kannst du den Radius des Kreises in Pixeln festlegen.
* **Ausgefüllt:** Durch setzen oder entfernen des Häkchens legst du fest, ob dein Punkt ausgefüllt, also komplett weiß oder nur seine Kontur gezeichnet werden soll.

## Rechteck zeichnen
Um ein Rechteck auf dem Display anzeigen zu lassen, ziehe den `Zeichne Rechteck`-Block in den freien Abschnitt des `Zeige auf Display`-Blocks.

![](/img/blockly-bilder/display/blockly-display-5.svg)

Der `Zeichne Rechteck`-Block verfügt über vier Einstellungsmöglichkeiten:
* **x-Koordinate:** Hier legst du fest, an welcher x-Koordinate (siehe Abb. oben) das Rechteck gezeichnet werden soll.
* **y-Koordinate:** Hier legst du fest, an welcher y-Koordinate (siehe Abb. oben) das Rechteck gezeichnet werden soll.
* **Breite:**  Hier kannst du die Breite des Rechtecks in Pixeln festlegen.
* **Höhe:**  Hier kannst du die Höhe des Rechtseckts in Pixeln festlegen festelegen.
* **Ausgefüllt:** Durch setzen oder entfernen des Häkchens legst du fest, ob dein Rechteck ausgefüllt, also komplett weiß oder nur seine Kontur gezeichnet werden soll.

## Diagramm zeichnen
Um ein Diagramm in Echtzeit aus Messwerten zeichenen zu lassen, ziehe den `Zeichne Diagramm`-Block in den freien Abschnitt des `Zeige auf Display`-Blocks. Auf der x-Achse wird standardmäßig die Zeit abgebildet und auf der y-Achse dein ausgewählter Messwert.

![](/img/blockly-bilder/display/blockly-display-6.svg)

Der `Zeichne Diagramm`-Block ist der umfangreichste Block in der Kategorie `Display`. Er verfügt über elf Einstellungsmöglichkeiten:
* **Title:** In das hier angeknüpfte Textfeld kannst du den Titel deines Diagramms eintragen.
* **Y-Achsenbeschriftung:** In das hier angeknüpfte Textfeld kannst du die Beschriftung der y-Achse eintragen.
* **X-Achsenbeschriftung:** In das hier angeknüpfte Textfeld kannst du die Beschriftung der y-Achse eintragen.

> Achtung: Je länger deine Beschriftungen an x- und y-Achse sind, desto weniger Platz bleibt für das eigentliche Diagramm. Versuche dich bei Beschriftungen am besten auf die Formelzeichen (z.B. T für Temperatur) zu beschränken.

* **X-Wertebereich Anfang:**  Hier legst du den Beginn des Wertebereichs der x-Achse fest.
* **X-Wertebereich Ende:** Hier legst du das Ende des Wertebereichs der x-Achse fest.
* **Y-Wertebereich Anfang:** Hier legst du den Beginn des Wertebereichs der y-Achse fest.
* **Y-Wertebereich Ende:** Hier legst du das Ende des Wertebereichs der y-Achse fest.

> Tipp: Am Wertebereich der x-Achse musst du für ein Standarddiagramm, welches einen Messwert gegen die Zeit aufträgt, nichts verändern. Den Wertebereich der y-Achse solltest du je nach Messwert anpassen.

* **X-Linienabstand:** Hier legst du den Abstand der Hilfslinien auf der x-Achse fest.
* **Y-Linienabstand:** Hier legst du den Abstand der Hilfslinien auf der y-Achse fest.

> Tipp: Bei einem Wert von 0 werden keine Hilfslinien gezeichnet.

* **Zeitabschnitt:** Hier legst du den Zeitabschnitt fest, nachdem dein Diagramm gelöscht und neu begonnen wird. Im Normalfall sollte dieser Wert immer gleich dem Endes des x-Wertebereichs sein.
* **Wert:** An diesem freien Blockabschnitt kann der jeweilige Sensor angeknüpft werden, dessen Messwert auf der y-Achse aufgetragen werden soll.

![](/img/blockly-bilder/display/blockly-display-7.svg)
> In diesem Beispiel wird die Temperatur gegen die Zeit aufgetragen. Alle 5 Sekunden erscheint eine Hilfsline und nach 15 Sekunden wird das Diagramm gelöscht und neu begonnen, da das Display voll ist.


> - [Blockly.senseBox.de](https://blockly.sensebox.de/)