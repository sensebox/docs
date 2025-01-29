---
sidebar_position: 4
title: hackAIR
hide_title: false
description: Anleitung eines hackAIR
---
# hackAIR

Es besteht die Möglichkeit, die gemessenen Daten der hackAIR home Sensoren (Version 2) auch an die openSenseMap zu senden.

Dazu musst du zuerst deinen hackAIR Sensor wie folgt [zusammenbauen](http://www.hackair.eu/hackair-home-v2/) und den [hackAIR-v2-advanced](https://github.com/mkraats/hackair-v2-advanced) aufspielen.

Danach steht dir die openSenseMap-Konfiguration im Webinterface zur Verfügung. 

![](/img/open-sensemap-bilder/hackair/02_Sensor_Konfiguration.png)

Danach muss eine senseBox auf der openSenseMap mit der korrekten Hardware registriert werden.

## 1. Neue senseBox [registrieren](https://opensensemap.org/register)
- User, Standort, Aufstellungsort und Namen ausfüllen. Gruppenkennzeichnung könnte z.B. hackAIR sein.
- Unter dem Punkt **"Hardware"** im Schritt **"meine senseBox"** das Feld **"hackAIR"** ausklappen und die passende Sensorkonfiguration auswählen. 

![](/img/open-sensemap-bilder/hackair/01_openSenseMap_Konfiguration.png)


- Registrierung abschließen.
- **Wichtig:** `senseBox ID` kopieren. Dies ist eine 24 Zeichen lange Zeichenkette, die ungefähr so aussieht: *58a88c6b650831d8a3625e01*
- **Wichtig:** `access token` kopieren. Dies ist eine 64 Zeichen lange Zeichenkette.
- Wenn eine korrekte E-Mailadresse angegeben wurde, kommt die senseBox-ID auch nochmal per Mail. (zum Beispiel: *Deine senseBox-ID lautet: 58a88c6b650831d8a3625e01*)

## 2. hackAIR Gerät konfigurieren
Der `hackAIR home v2` Sensor lässt sich bequem über eine Webseite konfigurieren. Dazu schließt ihr das Gerät am Strom an.
Danach sollte ein offenes Netzwerk mit dem Namen `ESP-wemos` verfügbar sein. Danach müsst ihr noch folgende Schritte durchführen:

- Mit dem Browser die Konfigurationsseite des hackAIR home v2 aufrufen (http://192.168.4.1).
- Unter dem Punkt **Configure WiFi** tragt ihr im Feld **openSenseMap senseBox ID** die *senseBox-ID* ein.
- Unter dem Punkt **Configure WiFi** tragt ihr im Feld **senseBox access token** den *access token* ein.
- Ganz unten auf der Seite auf **Save** klicken.

## Fertig
Der `hackAIR home v2` Sensor sollte nun die Daten an die openSenseMap senden.
