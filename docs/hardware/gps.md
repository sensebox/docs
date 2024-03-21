---
sidebar_position: 4
title: GPS
hide_title: false
description: GPS u-blox CAM-M8Q Multi GNSS Modul
---
# GPS

Das GPS-Modul empfängt die Position (Längengrad/Breitengrad/Höhe) der senseBox. Diese kann für mobile Anwendungen, z.B. die mobile Datenübertragung auf die openSenseMap, genutzt werden. Dieser Sensor ist kompatibel mit den gängingen GNS Systemen (GPS, QZSS, GLONASS, BeiDou, Galileo) und basiert auf dem u-blox CAM-M8Q Multi GNSS Modul.

![](/img/hardware-bilder/gps/gps.png)

Der GPS Sensor wird an einen I2C-Port angeschlossen.

## Technische Details
- "Plug-in-and-Go" senseBox kompatibel durch Breakout-Board mit JST-Anschluss
- Simultanempfang von GPS, QZSS, GLONASS, BeiDou
- Navigationsempfindlichkeit von –167 dBm
- Empfänger: 72-Kanal u-blox M8
- Update-Rate: Single GNSS - bis zu 18Hz, Dual GNSS bis zu 10Hz
- Stromaufnahme: 30mA im Dauerbetrieb bzw. 10mA Power Save Mode 1Hz bei 3V


## Programmierung

````c++
#include <SenseBoxMCU.h>

GPS gps;
float lat; //Geografische Breite
float lng; //Geografische Länge
float alt; //Höhe über Meeresspiegel in Metern
float speed;
float date;
float time;

void setup()
{
  gps.begin();
}

void loop()
{
  gps.getGPS();
  lat = gps.getLatitude();
  lng = gps.getLongitude();
  alt = gps.getAltitude();
  speed = gps.getSpeed();
  date = gps.getDate();
  time = gps.getTime();

  Serial.print(lat, 6);
  Serial.print(F(","));
  Serial.print(lng, 6);
  Serial.print(F(","));
  Serial.println(alt, 1);
  Serial.print(F(","));
  Serial.println(speed, 4);
  Serial.print(F(","));
  Serial.println(date);
  Serial.print(F(","));
  Serial.println(time);
  delay(100);
}
```


## Programmierung (Blockly)

In Blockly kann der Sensor über folgenden Block ausgelesen werden:

![](/img/hardware-bilder/gps/block_gps.svg)

Im Block kannst du zwischen den verschiedenen Parametern des GPS Modules auswählen:
- Längengrad
- Breitengrad
- Höhe
- Zeitstempel (RFC3339)
- Geschwindigkeit
- Datum
- Zeit

>- [Shop](https://sensebox.kaufen/product/gps)
>- [CAM M8Q](https://sensebox.kaufen/assets/datenblatt/senseBox-CAM-M8Q_v20.pdf)