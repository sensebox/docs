---
sidebar_position: 1
title: "CircuitPython installieren"
description: ⬇️ CircuitPython auf der senseBox MCU-S2 installieren
---

<div className="alert alert--warning">
    ## Warnung
  
    Dieses Tutorial ist nur für die senseBoxMCU-S2 verfügbar.
</div>

# CircuitPython installieren
CircuitPython ist eine Variante von MicroPython, die von Adafruit entwickelt wurde. Es ist eine vereinfachte Version von Python, speziell für Mikrocontroller. CircuitPython ist eine großartige Möglichkeit, um schnell und einfach mit der Programmierung von Mikrocontrollern zu beginnen. In diesem Tutorial zeigen wir dir, wie du CircuitPython auf deiner senseBox MCU-S2 installieren kannst.


## Bootloader installieren
Der Bootloader ist ein Programm, das auf dem Mikrocontroller installiert ist und es ermöglicht, neue Programme auf den Mikrocontroller zu übertragen. Um einen CircuitPython kompatiblen Bootloader auf deiner senseBox MCU-S2 zu installieren, musst du die folgenden Schritte durchführen:
1. Lade dir das [Bootloader-Image](https://github.com/adafruit/tinyuf2/releases/download/0.18.2/tinyuf2-sensebox_mcu_esp32s2-0.18.2.zip) herunter.
2. Entpacke das Archiv.
3. Schließe deine senseBox MCU-S2 über ein USB-Kabel an deinen Computer an.
4. Halte den Boot-Button auf der senseBox MCU-S2 gedrückt und drücke dann den Reset-Button. Lasse dann den Boot-Button los.
5. Öffne das [Adafruit_WebSerial_ESPTool](https://adafruit.github.io/Adafruit_WebSerial_ESPTool/) im Browser (Chrome oder Edge).
6. Wähle 460800 als Baudrate aus und klicke auf `Connect`.
7. Wähle die `ESP32-S2` als Device aus und klicke auf `Connect`.
8. Klicke auf den ersten `Choose a file` Button und wähle die `combined.bin` Datei aus dem entpackten Archiv aus.
9. Klicke nun auf `Program` und warte bis der Vorgang abgeschlossen ist.

## CircuitPython installieren
Nachdem du den Bootloader installiert hast, kannst du CircuitPython auf deiner senseBox MCU-S2 installieren. Dazu musst du die folgenden Schritte durchführen:
1. Besuche die [CircuitPython Download-Seite](https://circuitpython.org/board/sensebox_mcu_esp32s2/).
2. Schließe deine senseBox MCU-S2 über ein USB-Kabel an deinen Computer an.
3. Halte den Boot-Button auf der senseBox MCU-S2 gedrückt und drücke dann den Reset-Button. Lasse dann den Boot-Button los.
4. Klicke auf den `OPEN INSTALLER` Button und wähle `Upgrade CircuitPython 9.0.0 Bin Only` aus.
5. Klicke auf `Next` und verbinde dich im nächsten Menü mit deiner senseBox MCU-S2.
6. Klicke dafür auf den `Connect` Button und wähle die `ESP32-S2` als Device aus.
7. Klicke auf `Continue` und warte bis der Vorgang abgeschlossen ist. Der Prozess kann einige Minuten dauern.
9. Nachdem der Vorgang abgeschlossen ist, trenne die senseBox MCU-S2 von deinem Computer und schließe sie erneut an. Du solltest nun ein neues Laufwerk mit dem Namen `CIRCUITPY` sehen.
8. Nun kannst du CircuitPython auf deiner senseBox MCU-S2 verwenden.


## Hello World Programm
Um zu überprüfen, ob CircuitPython erfolgreich installiert wurde, zeigen wir dir ein einfaches Hello World Programm. 
1. Besuche den [CircuitPython Editor](https://code.circuitpython.org/).
2. Schließe deine senseBox MCU-S2 über ein USB-Kabel an deinen Computer an.
3. Verbinde dich mit deiner senseBox MCU-S2 über `USB`.
4. Klicke auf `Connect to Device` und wähle die `senseBox MCU-S2 ESP32S2` als Device aus.
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
Wenn du CircuitPython von deiner senseBox MCU-S2 deinstallieren möchtest, kannst du einen beliebigen Sketch auf die senseBox MCU-S2 hochladen. Dadurch wird CircuitPython überschrieben und du kannst wieder Arduino verwenden. Folge dafür einfach den Anweisungen in unserem [Arduino Tutorial](/docs/category/arduino).