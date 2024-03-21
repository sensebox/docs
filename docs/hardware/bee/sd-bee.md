---
date: 2020-03-11
title: SD-Bee
categories: hardware
description: Mit dem SD-Bee werden die Messdaten deiner senseBox auf SD-Karte gespeichert.
type: Document
resources:
  - name: "Shop"
    link: https://sensebox.kaufen/product/sd-bee
  - name: WIZnet W5500 Data Sheet
    link: http://wizwiki.net/wiki/lib/exe/fetch.php/products:w5500:w5500_ds_v109e.pdf
image1: /images/2020-03-11-bee-sd/msd.png
---

# SD-Bee

Mit dem microSD-Bee können die Daten der senseBox auf einer SD-Karte gespeichert werden. 

![](/img/hardware-bilder/bees/sd-bee/msd.png)

# Technische Informationen
* "Plug-in-and-Go" senseBox kompatibel
* Port für miniSD-Karte
* Bezeichnung: mSD-Bee
* Maße: 24mm x 21mm x 9mm
* Gewicht: 2,4 g

Achte darauf, dass die mSD-Bee an den XBEE2-Stecker der senseBox-MCU angeschlossen werden muss, ansonsten kann es zu Problemen beim Speichern deiner Messwerte kommen.

# Programmierung (Blockly)
Informationen zur Programmierung des SD-Bees mit Blockly findest du [hier](/blockly/blockly-SD/)

# Programmierung (Arduino)
Im folgenden Beispiel zeigen wir dir, wie du deine Daten auf einer SD-Karte speichern kannst. 

````c++
// Einladen der Bibliotheken
#include <SPI.h>
#include <SD.h>
#include "SenseBoxMCU.h"

HDC1080 hdc;
File myFile;
// Name der Datei auf der SD-Karte
// Achte darauf, dass dieser Name (ohne Dateiendung) nicht länger als 8 Buchstaben lang sein darf! 
String fileName = "SenseBox.txt";

void setup()
{ 
    // Starten der SD-Bee
    SD.begin(28);
    // Öffnen der Datei auf der SD-Karte
    myFile = SD.open(fileName, FILE_WRITE);
    myFile.close();

    hdc.begin();
};

void loop()
{
    // Datei öffnen mit Schreibzugriff
    myFile = SD.open(fileName, FILE_WRITE);
    myFile.println(hdc.getTemperature());
    // Nach Benutzung wird die Datei wieder geschlossen
    myFile.close();
};
```


> - [Shop](https://sensebox.kaufen/product/sd-bee)
> - [WIZnet W5500 Data Sheet](http://wizwiki.net/wiki/lib/exe/fetch.php/products:w5500:w5500_ds_v109e.pdf)