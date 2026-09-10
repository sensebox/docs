import time
import board
import neopixel

# Konfiguration
PIXEL_PIN = board.D1  # der Pin, an dem der NeoPixel angeschlossen ist
# Der NeoPixel auf dem senseBox MCU-S2 verwendet offenbar die Reihenfolge GRB statt RGB
ORDER = neopixel.GRB  # Reihenfolge der Farben (RGB oder GRB) 
COLOR = (0, 255, 0)  # Farbe, die geblinkt werden soll (RGB-Werte von 0 bis 255)
CLEAR = (0, 0, 0)  # LED im ausgeschalteten Zustand (oder eine andere Farbe, wenn gewünscht)
DELAY = 0.25  # Blinkgeschwindigkeit in Sekunden (0,25 Sekunden = 250 Millisekunden)

# Erstelle ein NeoPixel-Objekt für die LED
pixel = neopixel.NeoPixel(PIXEL_PIN, 1, pixel_order=ORDER)

# Endlosschleife, um die LED blinken zu lassen
while True:
    pixel[0] = COLOR
    time.sleep(DELAY)
    pixel[0] = CLEAR
    time.sleep(DELAY)