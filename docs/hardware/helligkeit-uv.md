---
sidebar_position: 5
title: Helligkeits- und UV-Sensor
hide_title: false
description: Helligkeits- und UV-Sensor
---
Auf diesem senseBox-Bauteil sind zwei Sensoren zusammengelegt.

Die Lichtintensität wird mit dem TSL45315-Sensor von AMS-TAOS gemessen oder dem LiteOn LTR329ALS-01 gemessen (seit 02/21). Dieser Sensor erkennt die Lichtverhältnisse ähnlich dem menschlichen Auge und gibt die Helligkeitswerte direkt in Lux, mit großem Dynamikbereich (3 Lux bis 220k Lux), aus.

Der zweite Sensor ist ein Vishay VEML6070 Ultravioletter (UV)-Lichtsensor. Dieser wandelt die Intensität des UV-Lichts der Sonne in digitale Daten um. Der Sensor hat eine hervorragende UV-Empfindlichkeit und Linearität über Filtron™-Technologie. Er hat eine gute UV-Strahlungsmessung auch bei langer Sonnen-UV-Belastung und kann exzellent Temperaturschwankungen ausgleichen.

{% include image.html image=page.image %}

## Technische Details

### Belichtungssensor

* 3,3V - 5V tolerantes I2C/TWI Interface
* Eingangsspannungsbereich: 3,3V - 5V
* on-board 2,5V Spannungsregler
* on-board Pegelwandler

### UV-Sensor

* Betriebsspannung: 2,7V - 5,5V I2C Interface
* Unterstützt Quittierungsfunktion (Active Acknowledge-Funktion)
* Temperaturkompensation: -40°C bis +85°C
* Software-Abschaltregelung für Immunität bei flackernden Leuchtstofflampen

### Maße

* 25mm x 25mm x 9mm
* Gewicht: 2,5 g

## Programmierung

```arduino
#include "SenseBoxMCU.h"
#include <SPI.h>

Lightsensor lightsensor;
VEML6070 veml;

void setup() {
    Serial.begin(9600);
    tsl.begin();
    veml.begin();
}

void loop() {
    Serial.print("Illuminance: ");
    Serial.println(lightsensor.getIlluminance());
    Serial.print("UV-Intensity: ");
    Serial.println(veml.getUvIntesity());
}
```

## Programmierung (Blockly)

In Blockly kann der Sensor über folgenden Block ausgelesen werden:

{% include image.html image=page.block %}

Im Block kannst du zwischen den verschiedenen Parametern des Helligkeits-/UV-Sensors auswählen:

* Helligkeit in LUX
* UV-Belastung in µW/cm^2