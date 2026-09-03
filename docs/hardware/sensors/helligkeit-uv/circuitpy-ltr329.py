import time
import board
from adafruit_ltr329_ltr303 import LTR329


# I2C-Schnittstelle des Boards initialisieren
i2c = board.I2C()

# Kurze Pause, damit die I2C-Schnittstelle bereit ist
time.sleep(0.1)

# LTR329-Lichtsensor über I2C initialisieren
ltr329 = LTR329(i2c)


# Messwerte dauerhaft auslesen
while True:
    # Sichtbares Licht zusammen mit Infrarotlicht ausgeben
    print("Visible + IR:", ltr329.visible_plus_ir_light)

    # Infrarotlicht separat ausgeben
    print("Infrared    :", ltr329.ir_light)

    # Leerzeile für eine bessere Übersicht
    print()

    # Eine halbe Sekunde bis zur nächsten Messung warten
    time.sleep(0.5)