---
sidebar_position: 1
title: "CircuitPython installieren"
description: ⬇️ CircuitPython auf der senseBox MCU-S2 installieren
---

# CircuitPython installieren
CircuitPython ist eine Variante von MicroPython, die von Adafruit entwickelt wurde. Es ist eine vereinfachte Version von Python, speziell für Mikrocontroller. CircuitPython ist eine großartige Möglichkeit, um schnell und einfach mit der Programmierung von Mikrocontrollern zu beginnen. In diesem Tutorial zeigen wir dir, wie du CircuitPython auf deiner senseBox MCU-S2 installieren kannst.

![CircuitPython Logo](https://s3.amazonaws.com/adafruit-circuit-python/CircuitPython_Repo_header_logo.png)

<div className="alert alert--info">
    ## Web-Browser
    Du kannst den Web-Installer nur mit Google Chrome oder Microsoft Edge verwenden.
</div>

## CircuitPython installieren
Um CircuitPython auf deiner senseBox MCU-S2 zu installieren musst du die folgenden Schritte durchführen:
1. Besuche die [CircuitPython Download-Seite](https://circuitpython.org/board/sensebox_mcu_esp32s2/).
2. Schließe deine senseBox MCU-S2 über ein USB-Kabel an deinen Computer an.
3. Halte den Boot-Button auf der senseBox MCU-S2 gedrückt und drücke dann den Reset-Button. Lasse dann den Boot-Button los.
4. Klicke auf den `OPEN INSTALLER` Button und wähle `Full CircuitPython X.X.X Install` aus (X.X.X steht für die aktuellste CircuitPython Version).
5. Klicke auf `Next` und verbinde dich im nächsten Menü mit deiner senseBox MCU-S2. Klicke dafür auf den `Connect` Button und wähle die `ESP32-S2` als Device aus.
7. Klicke auf `Continue` und warte bis der Flash gelöscht und die combined.bin Datei geflasht wurde. Der Prozess kann einige Minuten dauern.
8. Drücke danach den Reset-Button auf der senseBox MCU-S2, um den Bootloader zu starten. Es erscheint ein neues Laufwerk mit dem Namen `senseBox`.
9. Klicke nun auf `Select Bootloader Drive` und wähle das Laufwerk `senseBox` aus.
9. Nun wird CircuitPython auf die MCU geladen. Nach ein paar Sekunden solltest du nun ein neues Laufwerk mit dem Namen `CIRCUITPY` sehen. 
10. CircuitPython wurde erfolgreich installiert. Im Web-Installer wird leider nicht angezeigt, dass der Prozess abgeschlossen ist. Du kannst den Web-Installer also einfach schließen.
11. Nun kannst du CircuitPython auf deiner senseBox MCU-S2 verwenden.


## Hello World Programm
Um zu überprüfen, ob CircuitPython erfolgreich installiert wurde, zeigen wir dir ein einfaches Hello World Programm. 
1. Besuche den [CircuitPython Editor](https://code.circuitpython.org/).
2. Schließe deine senseBox MCU-S2 über ein USB-Kabel an deinen Computer an.
3. Verbinde dich mit deiner senseBox MCU-S2 über `USB`.
4. Klicke auf `Connect to Device` und wähle die `senseBox MCU-S2 ESP32S2` als Device aus. Ggf. musst du erlauben, dass der Editor auf deine senseBox MCU-S2 zugreifen darf.
5. Klicke nun auf `Select New Folder` und wähle den Ordner `CIRCUITPY` aus.
6. Ggf. musst du das Bearbeiten von Dateien erlauben.
7. Klicke nun auf `Use CIRCUITPY`.
8. Klicke auf `Open` und öffne die `code.py` Datei.
9. In der Datei sollte bereits ein Beispielcode vorhanden sein. Falls nicht, füge den folgenden Code ein:
```python
print("Hello World!")
```
10. Klicke auf `Save + Run`. Du solltest nun `Hello World!` in der Konsole sehen.

## CircuitPython deinstallieren
Wenn du CircuitPython von deiner senseBox MCU-S2 deinstallieren möchtest um wieder Arduino verwenden zu können, musst du die folgenden Schritte durchführen:
1. Gehe in den Bootloader Modus, indem du kurz den Reset-Button drückst und direkt danach kurz den Boot-Button drückst. Die RGB-LED sollte nun grün leuchten.
2. Lade dir die [flash-arduino.uf2](./assets/flash-arduino.uf2) Datei herunter.
3. Kopiere die heruntergeladene Datei in das Laufwerk `senseBox`.
4. Die senseBox MCU-S2 startet nun neu und du kannst wie gewohnt Blockly oder Arduino verwenden.


