---
sidebar_position: 13
title: Zeit
hide_title: false
---

## Programmcode unterbrechen
Mit den `Warte`-Blöcken kannst du deinen Programmcode für eine gewisse Zeit unterbrechen. In dieser Zeit pausiert der Mikrokontroller und es werden keine Aktionen ausgeführt. Die Zeit wird in Millisekunden (1 Sekunde = 1000 Millisekunden) oder Microsekunden (1 Sekunde = 1000000 Microsekunden) angegeben.

{% include image.html image=page.image1 %}
{% include image.html image=page.image2 %}

## Bereits vergangene Zeit
Mit den `Bereits vergangene Zeit`-Blöcken kannst du dir die Zeit, die dein Programmcode bereits läuft, ausgeben lassen. Die Laufzeit wird in Millisekunden oder Microsekunden angegeben.

{% include image.html image=page.image3 %}
{% include image.html image=page.image4 %}

## Warte für immer
Mit dem `Warte für immer`-Block kannst du dein Programm beenden.

{% include image.html image=page.image5 %}

## Messintervall
Mit dem Block `Messintervall` kannst du festlegen, wie häufig deine Messwerte übertragen werden. Standardmäßig (also ohne Messintervall-Block) werden die Messwerte sekündlich übertragen.

{% include image.html image=page.image6 %}
