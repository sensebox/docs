---
sidebar_position: 7
title: Luftdruck- und Temperatursensor
hide_title: false
description: Luftdruck- und Temperatursensor (BMP280)
---
# Luftdruck- und Temperatursensor

Dieser Sensor misst den Luftdruck und die Temperatur und basiert auf dem BMP280 Sensor von Bosch.


![](/img/hardware-bilder/luftdruck/bmp_top.png)

## Technische Informationen

* "Plug-in-and-Go" senseBox kompatibel
* Betriebsdruck 300 bis 1100 hPa
* Relative Präzision ±0.12 hPa
* Absolute Präzision ±1 hPa
* Betriebsversorgungsstrom 2.7μA bei 1 Hz Sampling Frequenz
* Maße: 25mm x 25mm x 9mm
* Gewicht: 2,4 g

## Programmierung

```arduino
#include "SenseBoxMCU.h"
#include <SPI.h>

BMP280 bmp_sensor;

void setup() {
  Serial.begin(9600);
  bmp_sensor.begin();
}

void loop() {
    Serial.print("Pressure: ");
    Serial.println(bmp_sensor.getPressure());
    Serial.print("Temperature: ");
    Serial.println(bmp_sensor.getTemperature());
    Serial.print("Altitude: ");
    Serial.println(bmp_sensor.getAltitude(1000));
}
```

## Programmierung (Blockly)

In Blockly kann der Sensor über folgenden Block ausgelesen werden:

![](/img/hardware-bilder/luftdruck/block_luftdruck_temperatur.svg)


Im Block kannst du zwischen den verschiedenen Parametern des Luftdruck-/Temperatursensor auswählen:

- Luftdruck in Pascal (Pa)
- Temperatur in Celsius (°C)
- Höhe über NN in m (dazu wird ein Referenzluftdruck benötigt)


>- [Shop](https://sensebox.kaufen/product/luftdruck-temperatur)
>- [Bosch BMP280 Data sheet](https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmp280-ds001.pdf)