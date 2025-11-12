---
sidebar_position: 5
title: "Schritt 1: Aufbau der Hardware"
description: Schritt 1 zum Aufbau der senseBox:lautstärkemesser.
---

# Schritt 1: Aufbau der Hardware

:::warning
Work in progress
:::

## Überblick über die Bauteile
Der senseBox:Lautstärkemesser besteht aus folgenden Komponenten:
- senseBox MCU S2
- Adapterboard und DNMS Teensy 4.0
- Mikrofon IM72D128V01 im 12,7mm Rundrohr
- 1× QWIIC-Kabel, 1× Stromkabel
- USB-C-Kabel und Netzteil
- Gehäuse, 2× M20-Kabelverschraubungen, 4× Schrauben und 4× Abstandshaltern
- Silikagel-Trockenbeutel

Zusätzlich benötigst du nur einen Schraubendreher.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-1.png)

## Mikrofon anbringen   
Das Mikrofon wird über eine der Kabelverschraubungen am Gehäuse befestigt.
Entferne dazu zuerst die Kappe der Kabelverschraubung.

Da die Öffnung eng ist, empfiehlt es sich, das nicht-verkabelte Ende des Mikrofons durch die größere Seite der Kabelverschraubung zu schieben.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-2.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-3.png)

Schiebe die Kabelverschraubung anschließend bis zum Ende des Mikrofons...

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-4.png)

... und befestige sie wieder mit der Kappe.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-5.png)

Das Gehäuse sollte zwei gegenüberliegende Öffnungen besitzen:
- In die mittlere Öffnung kommt das USB-Kabel,
- in die seitlich versetzte Öffnung das Mikrofon.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-6.png)

Um das Mikrofon zu montieren, entferne zuerst die Mutter der Kabelverschraubung.
Führe dann das Mikrofonkabel und die Verschraubung von außen durch die Öffnung im Gehäuse und befestige sie mit der Mutter auf der Innenseite.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-7.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-8.png)

Befestige anschließend die zweite Kabelverschraubung auf der anderen Gehäuseseite.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-9.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-10.png)

Führe das USB-C-Kabel durch diese zweite Verschraubung.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-11.png)

## Adapterboard vorbereiten

Für den nächsten Schritt brauchst du das Teensy-Adapterboard, die vier Schrauben und die Abstandshalter.

Befestige zunächst die Abstandshalter an den inneren Bohrungen des Adapterboards.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-12.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-13.png)

Anschließend solltest du die Kabel am Adapterboard anschließen.
Dieser Schritt ist jetzt deutlich einfacher, da nach der Montage im Gehäuse nur wenig Platz bleibt.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-14.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-15.png)

Setze das Adapterboard in das Gehäuse ein.
Führe es zuerst unter dem Mikrofonkabel hindurch, drücke dann die andere Seite vorsichtig nach unten, bis es flach liegt.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-16.png)

### Adapterboard im Gehäuse montieren

Richte die Bohrungen des Adapterboards an den Befestigungspunkten im Gehäuse aus und fixiere es mit den vier Schrauben.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-17.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-18.png)

### Kabeln verbinden

Verbinde jetzt das QWIIC-Kabel und das Stromkabel mit dem Adapterboard.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-19.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-20.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-21.png)

Bevor du die senseBox einsetzt, überprüfe, wie weit das Mikrofon aus dem Gehäuse herausragen soll.
Jetzt ist auch der richtige Zeitpunkt, die Kabelverschraubung auf der USB-Seite fest anzuziehen, damit das Gehäuse möglichst dicht bleibt und keine Feuchtigkeit eindringen kann.


## senseBox MCU-S2 verbinden

Verbinde nun die senseBox MCU-S2 mit den Kabeln.
Nutze dazu die QWIIC- und Stromanschlüsse oberhalb des USB-C-Ports.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-22.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-23.png)

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-24.png)

Bevor du die senseBox auf die Abstandshalter drückst, lege den Silikagel-Beutel auf der Platine.
Er hilft, Feuchtigkeit im Gehäuseinneren zu reduzieren.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-25.png)

Setze dann die senseBox auf die Abstandshalter und drücke sie vorsichtig fest.

![](/img/lautstaerkemesser-bilder/ls-messer-schritt-1/lautstaerkemesser-26.png)

Zum Schluss den Gehäusedeckel aufsetzen und festschrauben – fertig!

