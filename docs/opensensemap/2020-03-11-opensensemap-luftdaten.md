---
sidebar_position: 5
title: luftdaten.info
hide_title: false
description: Registrieren einer neuen senseBox auf der openSenseMap
---

Die Feinstaubsensoren des OK Lab Stuttgart [Luftdaten.info](https://luftdaten.info/) erlauben es, die gemessenen Daten auch an die openSenseMap zu senden. Um die Daten an die openSenseMap zu senden, muss zuallererst herausgefunden werden, welche Sensoren am Feinstaubsensor verwendet werden. Dies kann man am besten in dem Webinterface des Feinstaubsensors nachsehen. ([Abb.1](#abbildung-1-webinterface-feinstaubsensor))

Danach muss eine senseBox auf der openSenseMap mit der gerade erhaltenen Konfiguration registriert werden.
Sollten bei der Registrierung die falschen Sensoren ausgewählt worden sein, ist es am einfachsten die Box einfach wieder zu löschen und mit der korrekten Sensorkonfiguration neu zu registrieren.

## 1. Neue senseBox registrieren
Erstellen einer neuen senseBox unter: [registrieren](https://opensensemap.org/register)
- User, Standort, Aufstellungsort und Namen ausfüllen. Gruppenkennzeichnung könnte z.B. Luftdaten sein.
- Unter dem Punkt **"Hardware"** im Schritt **"meine senseBox"** das Feld **"luftdaten.info"** ausklappen und die passende Sensorkonfiguration auswählen. ([Abb.2](#abbildung-2-registrierung-opensensemap))
- Registrierung abschließen.
- **Wichtig:** senseBox ID kopieren. Dies ist eine 24 Zeichen lange Zeichenkette, die ungefähr so aussieht: *58a88c6b650831d8a3625e01*.
- Wenn eine korrekte E-Mailadresse angegeben wurde, kommt die senseBox ID auch nochmal per Mail (zum Beispiel: *Deine senseBox-ID lautet: 58a88c6b650831d8a3625e01*).

## 2. Feinstaubsensor konfigurieren
Der Feinstaubsensor von Luftdaten.info lässt sich bequem über eine Webseite konfigurieren. Hierfür muss zuerst die IP des Gerätes im WLAN ausfindig gemacht werden. Dies gelingt am besten durch Ablesen im WLAN-Router.

- Mit dem Browser die Konfigurationsseite des Feinstaubsensors aufrufen.
- Unter dem Punkt **Weitere APIs** einen Haken bei **An openSenseMap senden** machen. In das Feld *senseBox-ID* die eigene senseBox-ID eintragen.
- Ganz unten auf der Seite auf **Speichern** klicken.

## Fertig
Der Feinstaubsensor sollte nun seine Daten an die openSenseMap senden.

## Abbildung 1: Webinterface Feinstaubsensor
<img src="https://github.com/sensebox/resources/raw/master/images/luftdaten/02_Sensor_Konfiguration.png"/>

## Abbildung 2: Registrierung openSenseMap
<img src="https://github.com/sensebox/resources/raw/master/images/luftdaten/01_openSenseMap_Konfiguration.png"/>
