import board
import digitalio
import neopixel
from adafruit_pixel_framebuf import PixelFramebuffer
import time


# Stromversorgung der IO-Ports der senseBox MCU-S2 aktivieren
io_enable_pin = digitalio.DigitalInOut(board.IO_POWER)
io_enable_pin.direction = digitalio.Direction.OUTPUT
io_enable_pin.value = False


# Datenpin der LED-Matrix
# Die Matrix ist an Port A / D2 angeschlossen
pixel_pin = board.D2


# Abmessungen der LED-Matrix
WIDTH = 12
HEIGHT = 8


# NeoPixel-Objekt für alle 96 LEDs der Matrix erstellen
pixels = neopixel.NeoPixel(
    pixel_pin,                 # Datenpin
    WIDTH * HEIGHT,            # Anzahl der LEDs: 12 * 8 = 96
    brightness=0.05,           # Helligkeit von 0.0 bis 1.0
    pixel_order=neopixel.GRB,  # Die senseBox-Matrix verwendet GRB statt RGB
    auto_write=False           # Änderungen erst mit display() anzeigen
)


# Die NeoPixel-Kette als 12 x 8 Pixel große Matrix verwenden
matrix = PixelFramebuffer(
    pixels,
    WIDTH,
    HEIGHT,
    alternating=True           # LEDs sind zeilenweise abwechselnd verdrahtet
)


# Text, der über die Matrix laufen soll
text = "Hello world!"


# Endlosschleife: Der Text wird immer wieder neu gescrollt
while True:

    # Die verwendete Schrift ist 5 Pixel breit.
    # Zusätzlich wird 1 Pixel Abstand zwischen den Zeichen eingeplant.
    # Daher benötigt jedes Zeichen ungefähr 6 Pixel Breite.
    text_width = len(text) * 6

    # x startet bei 12, also rechts außerhalb der Matrix.
    # Danach wird x bei jedem Durchlauf um 1 kleiner.
    # Der Text bewegt sich dadurch von rechts nach links.
    for x in range(WIDTH, -text_width, -1):

        # Alle LEDs ausschalten, damit die vorherige Textposition verschwindet
        matrix.fill(0x000000)

        # Text an der aktuellen Position zeichnen
        matrix.text(
            text,       # anzuzeigender Text
            x,          # horizontale Position
            0,          # vertikale Position
            0xFF0000    # Textfarbe: Rot
        )

        # Gezeichneten Inhalt auf die LED-Matrix übertragen
        matrix.display()

        # Kurze Pause zwischen den einzelnen Positionen
        # Kleinere Werte = schnelleres Scrollen
        time.sleep(0.1)