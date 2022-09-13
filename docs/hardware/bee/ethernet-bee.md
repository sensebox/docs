---
date: 2020-03-11
title: Ethernet-Bee
categories: hardware
description: Mit dem Ethernet-Bee kannst du die senseBox mit dem Internet verbinden und Messwerte übertragen.
type: Document
resources:
  - name: "Shop"
    link: https://sensebox.kaufen/product/lan-bee
  - name: WIZnet W5500 Data Sheet
    link: http://wizwiki.net/wiki/lib/exe/fetch.php/products:w5500:w5500_ds_v109e.pdf

image1: /images/2020-03-11-bee-lan/lan_bee.png
---

# Ethernet-Bee

Das Ethernet-Bee ist ein Verbindungsstück, um die senseBox via Kabel mit dem Internet zu verbinden. Das LAN-Bee basiert auf dem W5500 Mikrochip von Wiznet, welcher eine hohe Datenübertragungsrate ermöglicht.

![](/img/hardware-bilder/bees/ethernet-bee/lan_bee.png)

## Technische Informationen

* "Plug-in-and-Go" senseBox kompatibel
* 3.3V Betriebsspannung mit 5V I/O Signal Toleranz
* Maße: 46mm x 25mm x 12mm
* Gewicht: 9,2 g


## Programmierung

```arduino
#include <SPI.h>
#include <Ethernet.h>
#include <senseBoxIO.h>

void setup()
{
    // Initialisiert den seriellen Monitor
    Serial.begin(9600);
    // Startet W5500 (LAN-Bee) in XBEE1 Socket neu
    senseBoxIO.powerXB1(false);
    delay(250);
    senseBoxIO.powerXB1(true);
    Ethernet.init(PIN_XB1_CS);
}

void loop()
{
    // Gibt IP-Adresse der senseBox aus
    ip = Ethernet.localIP();
    Serial.print("IP: ");
    Serial.println(ip);
    delay(5000);
}
```

## Hinweise und Tipps

Das LAN-Bee wird ohne LAN-Kabel geliefert. Für eine dauerhafte Outdoor-Anbringung eignen sich insbesondere flache LAN-Kabel, welche man einfach durch Fenster und Türen nach außen legen kann. Insbesondere in Kombination mit Power over Ethernet (PoE) kann die senseBox dann einfach betrieben werden.


> - [Shop](https://sensebox.kaufen/product/lan-bee)
> - [WIZnet W5500 Data Sheet](http://wizwiki.net/wiki/lib/exe/fetch.php/products:w5500:w5500_ds_v109e.pdf)