---
sidebar_position: 6
title: Volume Sensor
hide_title: false
description: DFRobot SEN0232 Gravity
---
# Volume Sensor

The DFRobot SEN0232 measures the volume and outputs the measured values in decibels.

![](/img/hardware-bilder/lautstaerke/sound.png)

## Techincal Information

* Dimensions: 60mm x 43mm x 9mm  
* "Plug-in-and-Go" senseBox compatible  
* Input voltage: 3.3-5V  
* Output voltage: 0.6-2.6V  
* Measurement range: accurate between 30 dBA and 130 dBA  
* Measurement interval: 125 ms  

![](/img/hardware-bilder/lautstaerke/sound-anschluss.png)


## Programmierung (Arduino)


```c++
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
