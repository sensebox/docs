---
sidebar_position: 6
title: Lautstärkesensor
hide_title: false
description: DFRobot SEN0232 Gravity
---
# Lautstärke

Der DFRobot SEN0232 misst die Lautstärke und gibt die Messwerte in Dezibel aus.

![](../../static/img/hardware-bilder/lautstaerke/sound.png)

## Technische Informationen

* Maße: 60mm x 43mm x 9mm
* "Plug-in-and-Go" senseBox kompatibel
* Eingangsspannung: 3,3-5V
* Ausgangsspannung: 0,6-2,6V
* Messspanne: zwischen 30dBA und 130 dBA akkurat
* Messintervall: 125ms

![](../../static/img/hardware-bilder/lautstaerke/sound-anschluss.png)


## Programmierung (Arduino)


```arduino
#define SoundSensorPin A1  //this pin read the analog voltage from the sound level meter
#define VREF  5.0  //voltage on AREF pin,default:operating voltage

void setup()
{
    Serial.begin(115200);
}

void loop()
{
    float voltageValue,dbValue;
    voltageValue = analogRead(SoundSensorPin) / 1024.0 * VREF;
    dbValue = voltageValue * 50.0;  //convert voltage to decibel value
    Serial.print(dbValue,1);
    Serial.println(" dBA");
    delay(125);
}
```

>- [Shop](https://sensebox.kaufen/product/lautstarkesensor)
>- [DFRobot SEN0232 Gravity](https://www.mouser.de/pdfdocs/SEN0232_Web.pdf)
