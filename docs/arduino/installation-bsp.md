---
date: 2020-03-11
title: Installation des Board-Support-Packages
title_order: 4
categories: arduino
description: Installation des Board-Support-Packages für die senseBox MCU
type: Document
set: erste-schritte-arduino
set_order: 4
---
# Installation des Board-Support-Packages

<div class="description">Damit die Arduino IDE deine senseBox MCU unterstützt und du Programme auf diese übertragen kannst, musst du vor Beginn noch zwei Board-Support-Packages installieren. Diese beinhalten die nötigen Treiber und die notwendige Software, um mit dem Prozessor der senseBox zu kommunizieren. Das Board-Support-Package der senseBox enthält außerdem bereits unsere senseBox-Libraries. Damit stehen euch alle grundlegenden Methoden zur Programmierung der beiliegenden Sensoren zur Verfügung.</div>



## Anleitung für Windows
Füge die folgende URL in deiner Arduino IDE unter *Datei -> Voreinstellungen* in das Feld für *Zusätzliche Bordverwalter-URLs* ein:
```
https://github.com/sensebox/senseBoxMCU-core/raw/master/package_sensebox_index.json
```


<!-- ![](/img/arduino-bilder/Installation%20des%20Board-Support-Packages/Ardu1.png) -->
![](/img/arduino-bilder/installation/Ardu1.png)


Öffne dann den *Boardverwalter* unter *Werkzeuge -> Board:"..." -> Boardverwalter* und installiere dort die zwei Board-Support-Packages mit den Namen **Arduino SAMD Boards by Arduino** und **senseBox SAMD Boards by senseBox**.

<!-- ![](/img/arduino-bilder/Installation%20des%20Board-Support-Packages/Ardu2.png) -->
![](/img/arduino-bilder/installation/Ardu2.png)


  Gib "SAMD" oben in die Suchleiste ein, um die Packages schneller zu finden.


Da wir das **senseBox SAMD Boards**-Package für euch regelmäßig aktualisieren, solltet ihr immer mal wieder in den Boardverwalter gehen und nachschauen, ob das **senseBox SAMD Boards**-Package noch aktuell ist. Öffnet dafür, wie oben beschrieben, den Boardverwalter und sucht nach **senseBox SAMD Boards**. Wenn ihr auf den Eintrag in der Liste klickt, erscheint dort im Falle einer neuen Version ein Update-Button. Klickt diesen, um die neueste Version zu installieren.


<!-- ![](/img/arduino-bilder/Installation%20des%20Board-Support-Packages/update-b-s-p.png) -->
![](/img/arduino-bilder/installation/update-b-s-p.png)

  Wichtig ist, zuerst auf den Eintrag zu klicken. Ansonsten wird der Update-Button nicht angezeigt, auch wenn es bereits eine neue Version gibt.



## Anleitung für Mac
Füge die folgende URL in deiner Arduino IDE unter *`Arduino -> Einstellungen...`* in das Feld für *Zusätzliche Bordverwalter-URLs* ein:
```
![](/img/arduino-bilder/installation/Ardu1.png)
```

<!-- ![](/img/arduino-bilder/Installation%20des%20Board-Support-Packages/ardu_mac.png) -->
![](/img/arduino-bilder/installation/ardu_mac.png)


Öffne dann den *Boardverwalter* unter *Werkzeuge -> Board:"..." -> Boardverwalter* und installiere dort die zwei Board-Support-Packages mit den Namen **Arduino SAMD Boards by Arduino** und **senseBox SAMD Boards by senseBox**.


<!-- ![](/img/arduino-bilder/Installation%20des%20Board-Support-Packages/ardu3_mac.png) -->
![](/img/arduino-bilder/installation/ardu3_mac.png)


<!-- ![](/img/arduino-bilder/Installation%20des%20Board-Support-Packages/ardu3_mac.png) -->



  Gib "SAMD" oben in die Suchleiste ein, um die Packages schneller zu finden.


Da wir das **senseBox SAMD Boards**-Package für euch regelmäßig aktualisieren, solltet ihr immer mal wieder in den Boardverwalter gehen und nachschauen, ob das **senseBox SAMD Boards**-Package noch aktuell ist. Öffnet dafür, wie oben beschrieben, den Boardverwalter und sucht nach **senseBox SAMD Boards**. Wenn ihr auf den Eintrag in der Liste klickt, erscheint dort im Falle einer neuen Version ein Update-Button. Klickt diesen, um die neueste Version zu installieren.


<!-- ![](/img/arduino-bilder/Installation%20des%20Board-Support-Packages/ardu_update_mac.png) -->
![](/img/arduino-bilder/installation/ardu_update_mac.png)


  Wichtig ist, zuerst auf den Eintrag zu klicken. Ansonsten wird der Update-Button nicht angezeigt, auch wenn es bereits eine neue Version gibt.



## Anleitung für Linux
Füge die folgende URL in deiner Arduino IDE unter *Datei -> Voreinstellungen* in das Feld für *Zusätzliche Bordverwalter-URLs* ein:
```
https://github.com/sensebox/senseBoxMCU-core/raw/master/package_sensebox_index.json
```
<!-- ![](/img/arduino-bilder/Installation%20des%20Board-Support-Packages/Ardu1.png) -->



Öffne dann den *Boardverwalter* unter *Werkzeuge -> Board:"..." -> Boardverwalter* und installiere dort die zwei Board-Support-Packages mit den Namen **Arduino SAMD Boards by Arduino** und **senseBox SAMD Boards by senseBox**.

<!-- ![](/img/arduino-bilder/Installation%20des%20Board-Support-Packages/Ardu2.png) -->
![](/img/arduino-bilder/installation/Ardu2.png)

Gib "SAMD" oben in die Suchleiste ein, um die Packages schneller zu finden.

Da wir das **senseBox SAMD Boards**-Package für euch regelmäßig aktualisieren, solltet ihr immer mal wieder in den Boardverwalter gehen und nachschauen, ob das **senseBox SAMD Boards**-Package noch aktuell ist. Öffnet dafür, wie oben beschrieben, den Boardverwalter und sucht nach **senseBox SAMD Boards**. Wenn ihr auf den Eintrag in der Liste klickt, erscheint dort im Falle einer neuen Version ein Update-Button. Klickt diesen, um die neueste Version zu installieren.


<!-- ![](/img/arduino-bilder/Installation%20des%20Board-Support-Packages/update-b-s-p.png) -->
![](/img/arduino-bilder/installation/update-b-s-p.png)

Wichtig ist, zuerst auf den Eintrag zu klicken. Ansonsten wird der Update-Button nicht angezeigt, auch wenn es bereits eine neue Version gibt.
