---
sidebar_position: 10
title: Umweltsensor
hide_title: false
description: Luftdruck- und Temperatursensor (BME680)
---
# Umweltsensor

Mit dem Sensor BME680 kannst du eine verschiedene Auswahl an Phänomenen messen. Lufttemperatur, relative Luftfeuchtigkeit, Luftdruck und Luftqualität können mit dem BME680 bestimmt werden. Er ist also ein echter Alleskönner.

![](../../static/img/hardware-bilder/umweltsensor/bme.png)

## Technische Details
* Schnelle Reaktionszeit von weniger als 10 Sekunden
* "Plug-in-and-Go" senseBox kompatibel
* Abweichung bei Gasmessungen von +-15%

## Anschluss und Programmierung

Mit dem mitgelieferten Verbindungskabel kannst du deinen Gassensor mit dem "I2C"-Port der senseBoxMCU verbinden.
Ist dies erledigt, können wir nun im Programmcode den Sensor initialisieren und uns die ersten Messwerte ausgeben lassen.

**Achtung** Der BME Gassensor ist nicht mit dem BMP280 Luftdrucksensor kompatibel. Das heißt du kannst nur einen der beiden gleichzeitig anschließen und auslesen!


## Programmierung (Blockly)

In Blockly kann der Sensor über folgenden Block ausgelesen werden:

![](../../static/img/hardware-bilder/umweltsensor/block_umweltsensor.svg)

Im Block kannst du zwischen den verschiedenen Parametern des Umweltsensors auswählen:

- Temperatur in Grad Celsius (°C)
- Luftfeuchtigkeit in %
- Luftdruck in Pa
- Innenraumluftqualität (IAQ)
- Kalibrierungswert
- CO<sub>2</sub> Äquivalent
- Atemluft VOC Äquivalent

## Kalibrierungswert

Den Status der Kalibrierung kann über den Wert IAQ Accuracy abgelesen werden. Er ist entweder 0, 1, 2 oder 3 und sagt folgendes aus:

- IAQ Accuracy = 0 heißt Sensor wird stabilisiert (dauert ca. 25 Minuten) oder dass es eine Zeitüberschreitung gab (which should be indicated by a warning/error flag by BSEC ← Muss in Blockly abgefangen werden),
- IAQ Accuracy = 1 heißt Wert ist ungenau,
- IAQ Accuracy = 2 heißt Sensor wird kalibriert,
- IAQ Accuracy = 3 heißt Sensor erfolgreich kalibriert.

Der IAQ Index ist also nur aussagekräftig bei IAQ Accuracy = 3. Neben dem Wert für IAQ stellt uns BSEC noch K und VOC äquivalente Werte bereit.


>- [Shop](https://sensebox.kaufen/product/sensebox-mini)
>- [Bosch BME680](https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bme680-ds001.pdf)
