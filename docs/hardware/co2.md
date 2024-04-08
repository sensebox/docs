---
sidebar_position: 11
title: CO2-Sensor
hide_title: false
---

Präziser CO<sub>2</sub>-Sensor vom Schweizer Hersteller Sensirion (Modell SCD30). Die Sensorplatine hat einen JST PHR4 Anschluss, passend zum Betrieb mit der senseBox MCU. Weiterhin ist er mit dem Qwiic Connect System ausgestattet.

Neben der CO<sub>2</sub>-Erkennung kommt ein erstklassiger Sensirion Feuchte- und Temperatursensor auf dem gleichen Sensormodul zum Einsatz. Dank des angewandten Zweikanalprinzips zur Messung der Kohlendioxidkonzentration ist der Sensor dazu ausgelegt, Langzeitdrifts automatisch zu kompensieren.

Der CO<sub>2</sub>-Sensor sollte nicht dauerhaft im Außenbereich verwendet werden.

![](/img/hardware-bilder/co2/DSCF9389.jpg)

## Technische Spezifikationen

- CO<sub>2</sub>-Messbereich: 0 - 40'000 ppm
- Genauigkeit: ± (30 ppm + 3% MV) (25 °C, 400 - 10'000 ppm)
- Wiederholpräzision: 10 ppm
- Temperaturstabilität: 2.5 ppm / °C (0-50 °C)
- Reaktionszeit: 20s

- Luftfeuchtigkeits-Messbereich: 0 - 100 % RH
- Genauigkeit: ±3% RH (0-100% RH)
- Wiederholpräzision: 0.1% RH
- Reaktionszeit: 8s

- Temperatur-Messbereich: -40 °C - 70 °C
- Genauigkeit (°C): ± (0.4 °C + 0.023 x (T [°C] - 25°C))
- Wiederholpräzision (°C): 0.1 °C
- Reaktionszeit: >10s


## Kalibrieren des CO<sub>2</sub>-Sensors (Auto Kalibrierung)

Im Regelfall kommt der CO<sub>2</sub>-Sensor bereits kalibriert bei dir an. Grobe Handhabung, Versand oder Löten kann die Genauigkeit des Sensors reduzieren, was eine Kalibrierung notwendig macht. Für diesen Sketch benötigst du das Display. Hast du kein Display vorhanden, kannst du die Display relevanten Teile löschen, dies beeinflusst die Kalibrierung des Sensors nicht!

Um den CO<sub>2</sub>-Sensor zu kalibrieren, muss dieser über einen Zeitraum von **mindestens 7 Tage** jeweils **täglich** mindestens eine Stunde Frischluft mit einer CO<sub>2</sub>-Konzentration von `400ppm` ausgesetzt sein. Solange der Sensor nicht in unmittelbarer Nähe einer C<sub>2</sub>O-Quelle (z.B. eigene Atmung, Verbrennungsprozess o.Ä.) aufgebaut wird, können wir davon ausgehen, dass die Atmosphäre eine Konzentration von ca. `400ppm` aufweist, [Tendenz steigend](https://www.esrl.noaa.gov/gmd/ccgg/trends//).

Installiere das [Board-Support-Package](https://docs.sensebox.de/arduino/board-support-package-installieren/) der senseBox und zusätzlich über den Bibliotheksverwalter in der Arduino IDE die `SparkFun_SCD30_Arduino_Library`. Daraufhin kannst du folgenden Sketch auf die MCU hochladen.

Alternativ kann die kompilierte `.bin` Datei [hier](/docs/sensebox_co2_calibrate.bin) heruntergeladen werden.

```c++
#include <SPI.h>
#include <Wire.h>

#include "SparkFun_SCD30_Arduino_Library.h"

// DISPLAY_PART_START
#include "SenseBoxMCU.h"
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#define OLED_RESET 4
Adafruit_SSD1306 display(OLED_RESET);
// DISPLAY_PART_ENDE
SCD30 airSensor;


void setup() {
  // DISPLAY_PART_START
  senseBoxIO.powerI2C(true);
  delay(2000);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3D);
  display.display();
  delay(100);
  display.clearDisplay();
  // DISPLAY_PART_ENDE
  if (airSensor.begin(Wire, true) == false)
  {
    while (1)
      ;
  }
  airSensor.getAutoSelfCalibration();
}


void loop() {

  // DISPLAY_PART_START
  long time_elapsed = millis();
  time_elapsed = time_elapsed / 1000;
  time_elapsed = time_elapsed / 60;

  display.clearDisplay();
  display.setCursor(0, 0);
  display.setTextColor(WHITE, BLACK);
  display.setTextSize(1);
  display.println("Sensor eine Stunde an der frischen Luft lassen!");
  display.println();
  display.println();
  display.println();
  display.print("Zeit vergangen: ");
  display.print(time_elapsed);
  display.println(" min");
  display.display();
  // DISPLAY_PART_ENDE

  if (airSensor.dataAvailable())
  {
    airSensor.getCO2();
    airSensor.getTemperature();
    airSensor.getHumidity();
  }
   delay(500);
}
```

Nachdem der Sketch hochgeladen ist, bringe den CO<sub>2</sub>-Sensor über einen Zeitraum von 7 Tage täglich für mindestens 1 Stunde nach draußen an die frische Luft. Auf dem Display wird dir angezeigt, wie viel Zeit seit dem Upload vergangen ist. Für eine möglichst gute Kalibrierung des Sensors wiederhole dies für 7 Tage. Beachte dabei, dass die senseBox in dieser Zeitspanne nicht ausgeschaltet werden darf, sonst muss die Kalibrierung neu gestartet werden!

## Kalibrieren des CO<sub>2</sub>-Sensors (Manuelle Kalibrierung)

Im Gegensatz zur Auto-Kalibrierung des CO2-Sensors, welche mindestens 7 Tage dauert, kannst du alternativ auch die manuelle Kalibrierung durchführen. [Dazu wurde im senseBox Forum eine hervorragende Anleitung geschrieben](https://forum.sensebox.de/t/co2-ampel-kalibrieren/1108).

Die kompilierte `.bin` Datei kann [hier](/docs/sensebox_co2_calibrate_manual.bin) heruntergeladen werden.

- [Shop](https://sensebox.kaufen/product/co2-sensor)
