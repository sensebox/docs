---
date: 2021-01-28
title: Programming with Circuit Python
categories: misc
description: Program your senseBox MCU with Python
type: Document
resources:
  - name: "Circuit Python"
    link: https://circuitpython.org/board/sensebox_mcu/
  - name: "Libraries"
    link: "https://circuitpython.org/libraries"
  - name: senseBox MCU CircuitPython on Github
    link: "https://github.com/adafruit/circuitpython/tree/main/ports/atmel-samd/boards/sensebox_mcu"
image1: /images/2021-01-28-rtc-modul/rtc.png
---

# Programming with Circuit Python
CircuitPython is a programming language that simplifies experimenting and programming on basic microcontroller boards. Once the board is set up, programming can be done using any text editor. The senseBox MCU is CircuitPython compatible.

## Installation of Circuit Python

The latest version can always be downloaded from the official [CircuitPython Website](https://circuitpython.org/board/sensebox_mcu/).
Connect the senseBox MCU to your computer using a USB cable and put it into programming mode by double-clicking the red reset button. Copy the .uf2 file to your senseBox MCU. The senseBox will then be recognized as a new device named "CircuitPy".

## Programming

Open/create the file Code.py on the "CircuitPy" drive and copy the following code as the first example:

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

After saving the file, the code will be executed immediately, and the small LED next to the reset button will start blinking. You can now easily modify and save the code, and it will be executed directly.

Alternatively, you can use the following web editor (only with Google Chrome):
[https://circuitpython.sensebox.de/](https://circuitpython.sensebox.de/)

Many more details about programming with CircuitPython are available on the official [CircuitPython Website](https://circuitpython.org/awesome).

## Libraries

Most components of the senseBox have libraries available that can be used. However, it is important to note that the libraries must be copied to the CIRCUITPY drive. A total of 48Kb of storage is available for this purpose.

> Note: Due to the limited storage space available for libraries, more complex projects such as the CO2 traffic light or the environmental monitoring station cannot be implemented with CircuitPython. However, the storage space should be sufficient to read individual sensors.

The complete package with the libraries can be downloaded [here](https://circuitpython.org/libraries). Make sure to download the _.mpy version_.

### Supported Components

Since some components do not have libraries available or the libraries are too large, here is a brief list of the tested components:

:::info
The table may be incomplete and is continuously updated. If you have tested components that are not yet listed, we would appreciate a short feedback.
:::

| Component           | Library Available | Test Successful                          |
| ------------------- | ----------------- | ---------------------------------------- |
| BME680 Environmental Sensor | Yes       | Yes                                      |
| CO2 Sensor          | Yes               | Yes                                      |
| BMP280              | Yes               | Yes (adjustment of the I2C address necessary) |
| HDC1080             | No                | No                                       |
| BMX055              | No                | No                                       |
| HC-SR04 Ultrasonic  | Yes               |                                          |
| WS2818 RGB LED      | Yes               | Yes                                      |
| Display             | Yes               | Yes                                      |
| SD-Bee              | Yes               | Yes                                      |
| LoRa-Bee            |                   |                                          |
| WiFi-Bee            | No                | WiFi is not supported by CP              |

## Serial Monitor

To access the Serial Monitor via the terminal

```
ls /dev/tty.*
```

alle verfügbaren Ports auflisten lassen. Die senseBox MCU sollte als usbmodemXXX auftauchen.

```
screen /dev/tty.board_name 115200
```

## SD Card

To load libraries from the SD card, copy the following code as `sdmount_lib.py` onto the SD card.

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

The libraries can then be copied to the SD card in /lib.
By using `import sdmount_lib`, the SD module is activated and the libraries can be used. More information on using an SD module with Circuit Python can be found directly at [Adafruit](https://learn.adafruit.com/adafruit-micro-sd-breakout-board-card-tutorial/circuitpython).

## Uninstallation

To uninstall Circuit Python, put the senseBox into programming mode by double-clicking the red reset button. Simply copy a .bin file (e.g., created in Blockly) onto the senseBox MCU, and the senseBox MCU will be programmable again as usual via Blockly and Arduino.

## Power Supply of the Ports

By default, the individual ports/pins are not powered. The following code (as used in the SD example) can be used to power the individual interfaces.

Example for the XBee 2 port:

```python
xb2_pwr = DigitalInOut(board.XB2_PWR) # hier den jeweilen Pin angeben siehe Tabelle
xb2_pwr.direction = Direction.OUTPUT
xb2_pwr.value = True
```
The other ports can be turned on as follows. Note that the status of the XBee ports is inverted:

| Ports/Pin   | Name in Code | Status (activated) | Status (deactivated) |
| ----------- | ------------ | ------------------ | -------------------- |
| XBEE 1      | XB1_PWR      | False              | True                 |
| XBEE 2      | XB2_PWR      | False              | True                 |
| I2C         | I2C_PWR      | True               | False                |
| UART        | UART_PWR     | True               | False                |
| Green LED   | GREEN_LED    | True               | False                |
| Red LED     | RED_LED      | True               | False                |
| Pins D1-D13 | D1-D13       | True               | False                |

- [Circuit Python](https://circuitpython.org/board/sensebox_mcu/)
- [Libraries](https://circuitpython.org/libraries)
- [senseBox MCU CircuitPython on Github](https://github.com/adafruit/circuitpython/tree/main/ports/atmel-samd/boards/sensebox_mcu)
