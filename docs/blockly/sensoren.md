---
sidebar_position: 11
title: Sensoren
hide_title: false
---

## Allgemeines
In der senseBox befinden sich verschiedene Umweltsensoren. In diesem Kapitel beschränken wir uns zunächst auf die bereits auf der senseBox MCU verbauten oder per JST-Kabel anschließbaren Sensoren.

> Um Messwerte auszulesen und anzeigen zu lassen, verwendest du am besten das Display. In diesem Kapitel nutzen wir eine Art Minimalbeispiel, um Messwerte auf dem Display anzeigen zu lassen.

## Beschleunigungssensor (BMX055)
Der Beschleunigungssensor ist bereits auf der senseBox MCU verbaut. Er kann dir die Beschleunigung in X-, Y-, und Z-Achse und die Gesamtbeschleunigung angeben. Dabei kannst du den Messbereich zwischen 2g, 4g, 8g und 16g wählen.

{% include image.html image=page.image0 %}

>  Die mittlere Erdbeschleunigung wird in *g* angegeben und beträgt abgerundet 9,81 m/s<sup>2</sup>.

## Button
Ein Button ist bereits auf der senseBox MCU verbaut. Zusätzliche Buttons können über die drei Digital Ports angeschlossen werden. Im Dropdown Menü können verschiedene Modi für den Button ausgewählt werden:

- __ist gedrückt__: Mit diesem Modus kannst du abfragen, ob der Block gerade gedrückt wird. Du erhältst entweder den Wert TRUE oder FALSE.
- __wurde gedrückt__: Mit diesem Modus kannst du abfragen, ob der Block gedrückt wurde. Erst wenn der Knopf gedrückt und wieder losgelassen wurde, erhältst du TRUE zurück.
- __als Schalter__: Wenn du diesen Modus verwendest, kannst du den Knopf wie ein Lichtschalter verwenden. Der Status wird gespeichert bis der Button erneut gedrückt wird.


{% include image.html image=page.image10 %}

## Temperatur- und Luftfeuchtigkeitssensor (HDC1080)
Der Temperatur- und Luftfeuchtigkeitssensor wird an einen der fünf I2C/Wire Ports gesteckt. Er kann dir die Temperatur in °C und die relative Luftfeuchtigkeit in % angeben.

{% include image.html image=page.image1 %}

## Temperatur- und Luftdrucksensor (BMP280)
Der Temperatur- und Luftdrucksensor wird an einen der fünf I2C/Wire Ports gesteckt. Er kann dir die Temperatur in °C, den Luftdruck in Pa und die Höhe über NN in m angeben.

{% include image.html image=page.image2 %}

## Helligkeits- und UV-Sensor (TSL45315 & VEML6070)
Der Helligkeits- und UV-Sensor wird an einen der fünf I2C/Wire Ports angeschlossen. Er kann dir die Helligkeit in Lux und die UV-Intensität in &mu;W/cm<sup>2</sup> angeben.

{% include image.html image=page.image3 %}

## Umweltsensor (BME680)
Der Umweltsensor wird an einen der fünf I2C-Wire Ports angeschlossen. Er kann dir die Temperatur in °C, die relative Luftfeuchtigkeit in %, den Luftdruck in Pa und die Innenraumluftqualität (IAQ) auf einer Skala von 0-500 angegeben.

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:9px 20px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:9px 20px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}
.tg .tg-ptrm{font-family:"Trebuchet MS", Helvetica, sans-serif !important;;background-color:#ffffff;color:#333333;border-color:#50af47;text-align:center;vertical-align:top}
.tg .tg-w810{font-weight:bold;font-family:"Trebuchet MS", Helvetica, sans-serif !important;;background-color:#ffffff;color:#333333;border-color:#50af47;text-align:right;vertical-align:top}
.tg .tg-61z8{font-weight:bold;font-family:"Trebuchet MS", Helvetica, sans-serif !important;;background-color:#ffffff;color:#333333;border-color:#50af47;text-align:right;vertical-align:middle}
.tg .tg-xdoy{font-family:"Trebuchet MS", Helvetica, sans-serif !important;;background-color:#ffffff;color:#333333;border-color:#50af47;text-align:center;vertical-align:middle}
</style>
<table class="tg">
  <tr>
    <th class="tg-61z8">Wert<br></th>
    <th class="tg-xdoy">0-50</th>
    <th class="tg-xdoy">51-100</th>
    <th class="tg-xdoy">101-150</th>
    <th class="tg-xdoy">151-200</th>
    <th class="tg-xdoy">201-250</th>
    <th class="tg-xdoy">251-350</th>
    <th class="tg-xdoy">&gt; 350</th>
  </tr>
  <tr>
    <td class="tg-w810">Luftqualität</td>
    <td class="tg-ptrm">Ausgezeichnet</td>
    <td class="tg-ptrm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gut&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td class="tg-ptrm">Leicht<br>verschmutzt</td>
    <td class="tg-ptrm">Moderat<br>verschmutzt</td>
    <td class="tg-ptrm">Stark<br>verschmutzt</td>
    <td class="tg-ptrm">Erheblich<br>verschmutzt</td>
    <td class="tg-ptrm">Extrem<br>verschmutzt</td>
  </tr>
</table>
<br>
<br style="clear: both"> -->

{% include image.html image=page.image7 %}

Neben den oben genannten Parametern kann der Sensor dir zusätzlich den Kalibrierungswert (eine Statusmeldung) und Teilgrößen CO<sub>2</sub>-Äquivalent und Atemluft VOC der Innenraumluftqualität angeben.

## Feinstaubsensor (SDS011)
Der Feinstaubsensor wird an einem der zwei UART/Serial Ports angeschlossen und im Block der jeweilige Port ausgewählt. Er kann dir die Feinstaubkonzentration PM2.5 und PM10 in &mu;g/cm<sup>3</sup> angeben.

{% include image.html image=page.image4 %}

## Bodentemperatur- und Bodenfeuchtesensor (SMT50)
Der Bodentemperatur- und Bodenfeuchtesensor wird in einen der drei Digital Ports angeschlossen und im Block der jeweilge Port ausgewählt. Er kann dir die Bodentemperatur in °C und den volumetrischen Wassergehalt des Bodens in % ausgeben.

{% include image.html image=page.image5 %}

## GPS-Modul (CAM-M8Q)
Das GPS-Modul wird an einen der fünf I2C/Wire Ports angeschlossen. Es kann dir den Breitengrad, den Längengrad, die Höhe über NN in m, die aktuelle Geschwindigkeit, einen Zeitstempel, die Uhrzeit und das Datum angeben.

{% include image.html image=page.image6 %}

## Ultraschall-Abstandssensor
Der Ultraschall-Distanzsensor wird an einen der drei Digital Ports angeschlossen und im Block der jeweilige Port ausgewählt. Er kann dir die Entfernung in cm angeben.

{% include image.html image=page.image8 %}

## Mikrofon
Das Mikrofon wird an einen der drei Digital Ports angeschlossen und im Block der jeweilige Port ausgewählt. Er kann dir die Lautstärke als Pegel zwischen 0 und 5V ausgeben.

{% include image.html image=page.image9 %}
