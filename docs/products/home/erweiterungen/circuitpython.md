---
date: 2021-01-28
title: Programmieren mit Circuit Python
categories: misc
description: Programmiere deine senseBox MCU mit Python
type: Document
resources:
  - name: "Circuit Python"
    link: https://circuitpython.org/board/sensebox_mcu/
  - name: "Bibliotheken"
    link: "https://circuitpython.org/libraries"
  - name: senseBox MCU CircuitPython auf Github
    link: "https://github.com/adafruit/circuitpython/tree/main/ports/atmel-samd/boards/sensebox_mcu"
image1: /images/2021-01-28-rtc-modul/rtc.png
---

# Programmieren mit Circuit Python
CircuitPython ist eine Programmiersprache, die das Experimentieren und Programmieren auf einfachen Mikrocontroller-Boards vereinfacht. Sobald das Board eingerichtet ist, kann mit einem beliebigen Texteditor programmiert werden. Die senseBox MCU ist CircuitPython kompatibel.

## Installation von Circuit Python

Die aktuellste Version kann immer über die offizielle [CircuitPython Website](https://circuitpython.org/board/sensebox_mcu/) heruntergeladen werden.
Schließe die senseBox MCU mit einem USB Kabel an deinen Computer an und versetzte diese über einen Doppelklick auf den roten Reset-Button in den Programmiermodus. Kopiere die .uf2 Datei auf deine senseBox MCU. Anschließend wird die senseBox als neues Gerät mit den Namen "CircuitPy" erkannt.

## Programmieren

Öffne/erstelle die Datei Code.py auf dem Laufwerk "CircuitPy" und kopiere folgenden Code als erstes Beispiel:

```python
import board
import digitalio
import time

led = digitalio.DigitalInOut(board.GREEN_LED)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True
    time.sleep(0.5)
    led.value = False
    time.sleep(0.5)
```

Nach dem Speichern der Datei wird der Code direkt ausgeführt und die kleine LED neben dem Resetbutton fängt an zu blinken. Du kannst nun den Code einfach verändern und speichern und dieser wird direkt ausgeführt.

Als Alternative kann auch folgender Web Editor (nur mit Google Chrome) verwendet werden:
[https://circuitpython.sensebox.de/](https://circuitpython.sensebox.de/)

Viele weitere Informationen zur Programmierung mit CircuitPython sind über die offizielle [CircuitPython Website](https://circuitpython.org/awesome)erhältlich.

## Bibliotheken

Für die meisten Komponenten der senseBox stehen Bibliotheken bereit, die verwendet werden können. Hierbei ist allerdings zu beachten, dass die Bibliotheken auf das CIRCUITPY Laufwerk kopiert werden müssen. Insgesamt stehen hierfür 48Kb Speicher zur Verfügung.

> Beachtet: Durch den geringen Speicherplatz, der für Bibliotheken zur Verfügung steht, können komplexere Projekte wie z.B. die CO2-Ampel oder auch die Umweltmessstation nicht mit CircuitPython umgesetzt werden. Der Speicherplatz sollte aber ausreichend sein z.B. um einzelne Sensoren auszulesen.

Das gesamte Paket mit den Bibliotheken kann [hier](https://circuitpython.org/libraries) heruntergeladen werden. Achtet darauf die _.mpy Version_ herunterzuladen.

### Unterstütze Komponenten

Da für einige Bauteile keine Bibliotheken verfügbar oder die Bibliotheken zu groß sind findet ihr hier eine kurze Auflistung der getesteten Komponenten:

:::info
Die Tabelle ist evtl. unvollständig und wird laufend erweitert. Solltet ihr Komponenten getestet haben, die bisher in der Liste noch nicht vorhanden sind, freuen wir uns auf eine kurze Rückmeldung.
:::

| Komponente          | Bibliothek vorhanden | Test erfolgreich                         |
| ------------------- | -------------------- | ---------------------------------------- |
| BME680 Umweltsensor | Ja                   | Ja                                       |
| CO2 Sensor          | Ja                   | Ja                                       |
| BMP280              | Ja                   | Ja (anpassung der I2C Adresse notwendig) |
| HDC1080             | Nein                 | Nein                                     |
| BMX055              | Nein                 | Nein                                     |
| HC-SR04 Ultraschall | Ja                   |                                          |
| WS2818 RGB LED      | Ja                   | Ja                                       |
| Display             | Ja                   | Ja                                       |
| SD-Bee              | Ja                   | Ja                                       |
| LoRa-Bee            |                      |                                          |
| WiFi-Bee            | nein                 | WiFi wird von CP nicht unterstütz        |

## Serieller Monitor

Um auf den Seriellen Monitor zugreifen zu können über das Terminal

```
ls /dev/tty.*
```

alle verfügbaren Ports auflisten lassen. Die senseBox MCU sollte als usbmodemXXX auftauchen.

```
screen /dev/tty.board_name 115200
```

## SD-Karte

Um Bibliotheken von SD Karte zu laden, folgenden Code als `sdmount_lib.py` auf die SD Karte kopieren.

```python
import sys

import adafruit_sdcard
import board
import busio
import digitalio
import storage
from digitalio import DigitalInOut, Direction

xb2_pwr = DigitalInOut(board.XB2_PWR)
xb2_pwr.direction = Direction.OUTPUT
xb2_pwr.value = False


# Connect to the card and mount the filesystem.
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
cs = digitalio.DigitalInOut(board.XB2_CS)
sdcard = adafruit_sdcard.SDCard(spi, cs)
vfs = storage.VfsFat(sdcard)
storage.mount(vfs, "/sd")
sys.path.append("/sd")
sys.path.append("/sd/lib")
```

Die Bibliotheken können anschließend auf die SD Karte in /lib kopiert werden.
Über `import sdmount_lib` wird das SD Modul aktiviert und die Libraries können verwendet werden. Weitere Informationen zum Verwenden eines SD Moduls mit Circuit Python gibt es direkt bei [Adafruit](https://learn.adafruit.com/adafruit-micro-sd-breakout-board-card-tutorial/circuitpython)

## Deinstallation

Um Circuit Python zu deinstallieren, bringe die senseBox durch einen Doppelklick auf den roten Reset-Button in Programmiermodus. Kopiere einfach eine .bin Datei (z.B. in Blockly erstellt) auf die sensebox MCU und die senseBox MCU ist wieder wie gewohnt über Blockly und Arduino programmierbar.

## Stromversorgung der Anschlüsse

Per Default sind die einzelen Ports/Pins nicht mit Strom versorgt. Über folgenden Code (wie auch im SD-Beispiel verwendet) können die einzelnen Schnittstellen mit Strom versorgt werden.

Beispiel für den Port XBee 2:

```python
xb2_pwr = DigitalInOut(board.XB2_PWR) # hier den jeweilen Pin angeben siehe Tabelle
xb2_pwr.direction = Direction.OUTPUT
xb2_pwr.value = True
```

Die weiteren Ports können wie folgt Eingeschaltet werden. Beachtet, dass der Status der XBee-Ports invertiert ist:

| Ports/Pin   | Name im Code | Status (aktiviert) | Status (deaktiviert) |
| ----------- | ------------ | ------------------ | -------------------- |
| XBEE 1      | XB1_PWR      | False              | True                 |
| XBEE 2      | XB2_PWR      | False              | True                 |
| I2C         | I2C_PWR      | True               | False                |
| UART        | UART_PWR     | True               | False                |
| Grüne LED   | GREEN_LED    | True               | False                |
| Rote LED    | RED_LED      | True               | False                |
| Pins D1-D13 | D1-D13       | True               | False                |

- [Circuit Python](https://circuitpython.org/board/sensebox_mcu/)
- [Bibliotheken](https://circuitpython.org/libraries)
- [senseBox MCU CircuitPython auf Github](https://github.com/adafruit/circuitpython/tree/main/ports/atmel-samd/boards/sensebox_mcu)
