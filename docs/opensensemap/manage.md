---
sidebar_position: 6
title: Verwalten von Boxen
hide_title: false
description: Verwalten von senseBoxen
---

# Verwalten von Boxen

Jeder registrierte Nutzer kann beliebig viele Boxen auf der openSenseMap verwalten.
Wenn die Einstellungen einer Box nachträglich geändert oder der Sketch heruntergeladen werden sollen, ist dies über das **Dashboard** möglich.
Dieses ist in der Menuleiste unter dem User-Icon verfügbar, sobald ein Nutzer eingeloggt ist:

![](../../static/img/open-sensemap-bilder/manage/osem_dashboard.png)

Im Dashboard können...

- [neue Boxen registriert werden](/opensensemap/opensensemap-register/),
- bestehende Boxen angepasst oder entfernt werden,
- Sketches zur Programmierung einer Box heruntergeladen werden.

## senseBox anpassen
Durch Klick auf den *ÄNDERN*-Button einer Box im Dashboard können beliebige Eigenschaften dieser Box nachträglich verändert werden.
Nachdem in einem der Abschnitte Änderungen vorgenommen wurden, werden diese durch Klick auf das Diskettensymbol oben rechts übernommen.

> ***Hinweis:*** *Wenn die Sensorkonfiguration geändert wurde, muss der Programmcode der senseBox in den allermeisten Fällen ebenfalls aktualisiert werden. Dieser ist unter dem Reiter Skript zu finden, um ihn in die Arduino IDE zu kopieren. Falls die WiFi-Version der senseBox verwendet wird, muss erneut die SSID und das WiFi Passwort im Sketch ersetzt werden!*

## senseBox löschen
Falls eine senseBox nicht mehr verwendet wird oder die Messungen dieser Box von der openSenseMap entfernt werden sollen, kann diese gelöscht werden.
Dazu muss im Bearbeitungsmodus (s.o.) im Reiter *Allgemein* unter dem Feld "senseBox löschen" der Wert `DELETE` eingetragen werden.
Anschließend erscheint unter dem Feld ein Button, durch welchen die senseBox und ihre Messungen gelöscht werden.

> ***Achtung:*** *Hierdurch werden neben der senseBox alle hinterlegten Sensordaten unwiderruflich entfernt! Da die Messungen auch für eine nachträgliche Datenauswertung wertvoll sein können, muss abgewägt werden, ob die senseBox gelöscht werden sollte.*
