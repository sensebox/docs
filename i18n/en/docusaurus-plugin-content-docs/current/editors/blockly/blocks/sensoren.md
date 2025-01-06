---
sidebar_position: 11
title: Sensors
hide_title: false
---

# Sensors

## General
The senseBox contains various environmental sensors. In this chapter, we will initially focus on the sensors that are already built into the senseBox MCU or can be connected via I2C cables.

> To read and display measurements, it's best to use the display. In this chapter, we will use a minimal example to display measurements on the screen.

## Accelerometer (BMX055)
The accelerometer is already built into the senseBox MCU. It can provide you with the acceleration along the X, Y, and Z axes, as well as the total acceleration. You can select the measurement range between 2g, 4g, 8g, and 16g.

![](/img/blockly-bilder/sensoren/blockly-sensoren-0.svg)

> The average acceleration due to gravity is denoted by *g* and is approximately 9.81 m/s<sup>2</sup>.

## Button
A button is already built into the senseBox MCU. Additional buttons can be connected via the three digital Ports. In the dropdown menu, you can select different modes for the button:

- __is pressed__: With this mode, you can check if the button is currently pressed. You will receive either the value TRUE or FALSE.
- __was pressed__: With this mode, you can check if the button was pressed. You will receive TRUE only after the button has been pressed and released.
- __as switch__: When using this mode, you can use the button like a light switch. The status will be saved until the button is pressed again.

![](/img/blockly-bilder/sensoren/blockly-sensoren-10.svg)

## Temperature and Humidity Sensor (HDC1080)
The temperature and humidity sensor is connected to one of the five I2C/Wire ports. It can provide you with the temperature in °C and the relative humidity in %.

![](/img/blockly-bilder/sensoren/blockly-sensoren-1.svg)

## Temperature and Pressure Sensor (BMP280)
The temperature and pressure sensor is connected to one of the five I2C/Wire ports. It can provide you with the temperature in °C, the air pressure in Pa, and the altitude above sea level in meters.

![](/img/blockly-bilder/sensoren/blockly-sensoren-2.svg)

## Light and UV Sensor (TSL45315 & VEML6070)
The light and UV sensor is connected to one of the five I2C/Wire ports. It can provide you with the brightness in Lux and the UV intensity in µW/cm².

![](/img/blockly-bilder/sensoren/blockly-sensoren-3.svg)

## Environmental Sensor (BME680)
The environmental sensor is connected to one of the five I2C/Wire ports. It can provide you with the temperature in °C, the relative humidity in %, the air pressure in Pa, and the indoor air quality (IAQ) on a scale from 0-500.

__________________________________________________________________________
| __Value__ |0-50|51-100|101-150|151-200|201-250|251-350|> 359|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| __Air quality__ |Excellent|Good|Slightly polluted|Moderately polluted|Heavily polluted|Significantly polluted|Extremely polluted|
___________________________________________________________________________

![](/img/blockly-bilder/sensoren/blockly-sensoren-7.svg)

In addition to the above parameters, the sensor can also provide you with the calibration value (a status message) and partial values CO<sub>2</sub>-equivalent and breath VOC of indoor air quality.

## Fine Dust Sensor (SDS011)
The fine dust sensor is connected to one of the two UART/Serial ports and the respective port is selected in the block. It can provide you with the fine dust concentration PM2.5 and PM10 in µg/cm<sup>3</sup>.

![](/img/blockly-bilder/sensoren/blockly-sensoren-4.svg)

## Soil Temperature and Moisture Sensor (SMT50)
The soil temperature and moisture sensor is connected to one of the three digital ports and the respective port is selected in the block. It can provide you with the soil temperature in °C and the volumetric water content of the soil in %.

![](/img/blockly-bilder/sensoren/blockly-sensoren-5.svg)

## GPS Module (CAM-M8Q)
The GPS module is connected to one of the five I2C/Wire ports. It can provide you with the latitude, longitude, altitude above sea level in meters, current speed, a timestamp, the time, and the date.

![](/img/blockly-bilder/sensoren/blockly-sensoren-6.svg)

## Ultrasonic Distance Sensor
The ultrasonic distance sensor is connected to one of the three digital ports and the respective port is selected in the block. It can provide you with the distance in cm.

![](/img/blockly-bilder/sensoren/blockly-sensoren-8.svg)

## Microphone
The microphone is connected to one of the three digital ports and the respective port is selected in the block. It can provide you with the volume level between 0 and 5V.

![](/img/blockly-bilder/sensoren/blockly-sensoren-9.svg)

> - [Blockly.senseBox.de](https://blockly.sensebox.de/)
