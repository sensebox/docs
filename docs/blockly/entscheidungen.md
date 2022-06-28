---
sidebar_position: 7
title: Entscheidungen
hide_title: false
---

## Entscheidungen
Entscheidungen oder Verzweigungn in Programmen gehören zu den wichtigsten Kontrollstrukturen beim Programmieren. Sie ermöglichen dir, dein Programm auf verschiedene Bedingungen reagieren zu lassen.

### Wenn, mache Beziehung
Der `wenn, mache`-Block verfügt über zwei freie Blockabschnitte `wenn` und `mache`.

<!-- {% include image.html image=page.image1 %} -->

Die Aktionen, die am freien Blockabschnitt `mache` angeknüpft sind, werden nur dann ausgeführt, wenn die am Blockabschnitt `wenn` angeknüpfte Bedingung erfüllt ist.

Zum Beispiel soll die eingebaute LED auf der senseBox MCU eingeschaltet werden, **wenn* der eingebaute Button gedrückt wird.

<!-- {% include image.html image=page.image2 %} -->

Befehle, die nach dem `wenn, mache`-Block hinzugefügt wurden, werden auf jeden Fall ausgeführt, auch wenn die Bedingung zuvor nicht erfüllt wurde.

### Sonst
Mit einem Klick auf das kleine Zahnrad oben links im `wenn, mache`-Block kannst du den Block um einen `sonst`-Blockabschnitt erweitern. Befehle die in diesem Blockabschnitt abgelegt werden, werden nur dann ausgeführt wenn die Bedingung zuvor **nicht** erfüllt wurde. Wurde die Bedingung erfüllt, werden sie übersprungen.

Zum Beispiel soll hier die eingebaute LED 1 nur dann leuchten, **wenn** der eingebaute Button gedrückt wird und **sonst** die eingebaute LED 2.

{% include image.html image=page.image3 %}

### Verzweigungen
Mit einem Klick auf das kleine Zahnrad oben links im `wenn, mache`-Block kannst du den Block um einen `sonst wenn`-Blockabschnitt erweitern. Nun wird zuerst die oberste `wenn` Bedingung überprüft, sollte diese nicht erfüllt sein wird die darauf folgende `sonst wenn` Bedingung überprüft. So werden nur die Befehle ausgeführt, deren zugehörige Bedingung erfüllt ist.
Im Vergleich zur `sonst` Bedingung kannst du so mehr als zwei Bedingungen festlegen.

Zum Beispiel soll je nach Temperatur eine LED angeschaltet werden. Bei Temperaturen unter 0°C soll LED 1, bei genau 0°C LED 2 und bei Temperaturen über 0°C LED 3 angeschaltet werden.

{% include image.html image=page.image4 %}

## Operatoren
In Blockly hast du die Möglichkeit verschiedene logische Operatoren zu benutzen um z.B. Messwerte zu vergleichen. Mit Hilfe dieser Operatoren lassen sich außerdem durch logische Verknüpfungen komplexere logische Ausdrücke formulieren.

### Logische Vergleiche
Mit dem Block für `logische Vergleiche` lassen sich Werte vergleichen.

{% include image.html image=page.image5 %}

Der Block bietet eine Auswahl aus sechs Operatoren:

<!-- <table style="border-collapse:collapse;border-spacing:0" class="tg"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#50af47;text-align:left;vertical-align:middle">Operator</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#50af47;text-align:left;vertical-align:top">Mathematik</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#50af47;text-align:left;vertical-align:middle">gleich</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#50af47;text-align:left;vertical-align:top">=</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#50af47;text-align:left;vertical-align:middle">ungleich</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#50af47;text-align:left;vertical-align:top">≠</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#50af47;text-align:left;vertical-align:middle">kleiner</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#50af47;text-align:left;vertical-align:top">&lt;</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#50af47;text-align:left;vertical-align:middle">kleiner oder gleich</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#50af47;text-align:left;vertical-align:top">≤</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#50af47;text-align:left;vertical-align:middle">größer</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#50af47;text-align:left;vertical-align:top">&gt;</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#50af47;text-align:left;vertical-align:top">größer oder gleich</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#50af47;text-align:left;vertical-align:top">≥</td></tr></table>
<br> -->

### Logische Verknüpfungen
Mit dem Block für `logische Verknüpfungen` lassen sich komplexere logische Asudrücke formulieren. Zum Beispiel eine Lampe, die nur dann leuchtet, wenn zwei Bedingungen zutreffen.

<!-- {% include image.html image=page.image6 %} -->

Der Block bietet eine Auswahl zwischen den Operatoren `und` und `oder`.

`Und` verknüpft zwei Bedingungen miteinander, sodass beide erfüllt werden müssen, damit der gesamte Ausdruck als wahr gewertet wird.

`Oder` verknüpft zwei Bedingungen miteinander, sodass nur eine der beiden wahr sein muss, damit der gesamte Ausdruck als wahr gewertet wird.

### nicht-Block
Mit dem `nicht`-Block lassen sich Ausdrücke verneinen. Eine Bedingung ist wahr wenn der Eingabewert falsch ist und falsch wenn sie wahr ist.

<!-- {% include image.html image=page.image7 %} -->

### teste-Block
Mit dem `teste`-Block lässt sich eine Bedingung überprüfen und Aktionen festlegen, die je nach Ergebnis ausgeführt werden.

<!-- {% include image.html image=page.image8 %} -->
