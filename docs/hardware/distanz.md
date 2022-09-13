---
sidebar_position: 2
title: Ultraschall Distanzsensor
hide_title: false
description: HC-SR04
---
# Ultraschall Distanzsensor

Der HC-SR04 misst Distanzen mit Hilfe von Ultraschall und gibt diese in Zentimetern (cm) aus.


![](/img/hardware-bilder/distanz/US-Sensor.png)

## Technische Informationen

* Maße: 45mm x 20mm x 17mm
* Versorgungsspannung von 5V bei einer Stromaufnahme weniger als 2mA
*  bis zu 50 Messungen pro Sekunde möglich

![](/img/hardware-bilder/distanz/Aufbau-Ultraschall.png)


## Programmierung (Arduino)


```arduino
int trig = 1;  // Trig-Pin des Sensors ist an Pin 1 angeschlossen.
int echo = 2;  // Echo-Pin des Sensors ist an Pin 2 angeschlossen.

// Definieren der Variablen
unsigned int time = 0;
unsigned int distance = 0;

void setup() {
Serial.begin(9600); // Startet den Seriellen Monitor
pinMode(trig, OUTPUT);
pinMode(echo, INPUT);
}

void loop() {
digitalWrite(trig, HIGH);
delayMicroseconds(10);
digitalWrite(trig, LOW);
distance = time / 58;
Serial.println(distance);
}
```
## Programmierung (Blockly)

In Blockly kann der Sensor über folgenden Block ausgelesen werden:

![](/img/hardware-bilder/distanz/ultraschall-block.svg)


Wähle den Port, an dem du den Sensor angeschlossen hast über das Dropdown-Menü aus. Trigger und Echo Pin werden dann automatisch angepasst.

