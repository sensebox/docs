---
sidebar_position: 7
title: "Schritt 3: Programmcode übertragen"
description: Schritt 3 zum Aufbau der senseBox:home
---
Schritt 3: Programmcode übertragen

Nach der Registrierung muss der Programmcode auf die senseBox kopiert werden. Wenn du eine senseBox mit WiFi-Bee oder Lan-Bee hast, kannst du den Programmcode einfach und schnell online kompilieren und per Drag-and-Drop übertragen. Dazu brauchst du keine Software auf dem Computer installieren.

## Online kompilieren
Der einfachste Weg deinen Code auf die senseBox zu bekommen ist unseren Online Compiler zu benutzen. Dafür musst du in der Maske einige Angaben machen. Wenn etwas nicht auf deinen individuellen Aufbau der senseBox passt, kannst du das Feld einfach frei lassen. Zum Abschluss drückst du auf "Kompilieren" und eine Datei im Format .BIN wird von deinem Browser heruntergeladen.

![](/img/sensebox-home-bilder/home-schritt-3/compile.png)

### Übertragen auf die senseBox MCU

Schließt du deine senseBox MCU an deinen Computer an und führst einen Doppelklick auf den roten Button aus, wird diese als Wechseldatendräger erkannt. Mit einem Klick auf "Code Kompilieren" in der Weboberfläche wird dein Programmcode auf dem Server kompiliert und eine .BIN Datei wird dir zum Download angeboten. Je nachdem welches Betriebssystem du verwendest, unterscheidet sich nun der Kopiervorgang.

#### Kopieren unter Windows

Unter Windows kannst du die erstellte .BIN Datei einfach per Drag & Drop auf den Wechseldatenträger <b>SENSEBOX</b> kopieren. Die rote LED am Button wird kurz flackern und anschließend startet das Board selbstständig neu und führt deinen Programmcode aus.

#### Kopieren unter MacOS

Unter MacOS funktioniert das Kopieren der .BIN per Drag & Drop leider zurzeit noch nicht. Folgende Möglichkeiten bieten sich die Datei auf die senseBox zu kopieren:

- Verwende das [senseBox Kopiertool](https://sensebox.de/docs/senseBox_Sketch_Uploader_DE.zip). Entpacke die ZIP-Datei und starte das darin enthaltene Programm.
- Verwende einen alternativen Dateimanager wie zum Beispiel [muCommander](http://www.mucommander.com/)
- Kopiere die Datei über das Terminal per dd-Befehl (nur erfahrenen Nutzern zu empfehlen!)

#### Kopieren unter Linux

Unter Linux kannst du die erstellte .BIN Datei einfach per Drag & Drop auf den Wechseldatenträger <b>SENSEBOX</b> kopieren. Die rote LED am Button wird kurz flackern und anschließend startet das Board selbstständig neu und führt deinen Programmcode aus.
