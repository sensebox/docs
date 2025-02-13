---
sidebar_position: 5
title: RTC-Modul
hide_title: false
description: Mit dem RTC-Modul kann die Uhrzeit auch ohne Stromversorgung gespeichert werden.
---
# RTC-Modul

The RTC module allows you to save the time even without a power supply. This can be particularly useful if no internet connection is available and measured values are to be saved offline, e.g. on the SD card. A button cell battery is also required so that the time can also be saved without a power supply.

![](/img/hardware-bilder/rtc/rtc.png)


## Connection
After inserting the button cell battery has been inserted into the holder, the RTC module is connected to an I2C port on the senseBox

## Setting the time

Before you use the RTC module, you must first set the initial time. This only needs to be done once, provided the battery is not disconnected from the module. In the following sketch, the time and date are set in the `setup` and output on the serial monitor in the `loop`. Remember to set the current time in the `setup` with the command `rtc.set(...)`.

```c++
#include <RV8523.h>
//#inlcude <SenseBoxMCU.h> only use with blockly code and commend out senseBoxIO.h
#include <senseBoxIO.h>
#include <Wire.h>
#define BUFF_MAX 32

RV8523 rtc;
unsigned int recv_size = 0;
char recv[BUFF_MAX];

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  delay(200);

  Serial.println("Init RTC...");
  rtc.begin();
  rtc.start();
  rtc.set24HourMode();
  rtc.set(SECOND, MINUTE, HOUR, DAY, MONTH, YEAR); // Aktuelle Uhrzeit / Datum HIER setzen!
  rtc.batterySwitchOver(1);
}


void loop()
{
  uint8_t sec, min, hour, day, month;
  uint16_t year;

  //Uhrzeit befindet sich in den einzelnen Variablen !
  rtc.get(&sec, &min, &hour, &day, &month, &year);

  //serial output
  Serial.print("\nTime: ");
  Serial.print(hour, DEC);
  Serial.print(":");
  Serial.print(min, DEC);
  Serial.print(":");
  Serial.print(sec, DEC);

  Serial.print("\nDate: ");
  Serial.print(day, DEC);
  Serial.print(".");
  Serial.print(month, DEC);
  Serial.print(".");
  Serial.print(year, DEC);

  //wait a second
  delay(1000);
}
```

## Reading the time

If the time is set and the RTC clock is counting the seconds, it can now be read in any sketch. You start the RTC clock like all other I2C sensors. Just make sure that you do not accidentally call the `rtc.set()` command again and thus reset the time.

```c++
#include <RV8523.h>
//#inlcude <SenseBoxMCU.h> only use with blockly code and commend out senseBoxIO.h
#include <senseBoxIO.h>
#include <Wire.h>
#define BUFF_MAX 32

RV8523 rtc;
unsigned int recv_size = 0;
char recv[BUFF_MAX];

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

  Serial.println("Init RTC...");
  delay(200);
  rtc.begin();
  rtc.start();
  rtc.batterySwitchOver(1);

}
void loop()
{
  uint8_t sec, min, hour, day, month;
  uint16_t year;

  //The time is stored in the individual variables!
  rtc.get(&sec, &min, &hour, &day, &month, &year);

    //serial output
  Serial.print("\nTime: ");
  Serial.print(hour, DEC);
  Serial.print(":");
  Serial.print(min, DEC);
  Serial.print(":");
  Serial.print(sec, DEC);

  Serial.print("\nDate: ");
  Serial.print(day, DEC);
  Serial.print(".");
  Serial.print(month, DEC);
  Serial.print(".");
  Serial.print(year, DEC);
  //wait a second
  delay(1000);
}
```
