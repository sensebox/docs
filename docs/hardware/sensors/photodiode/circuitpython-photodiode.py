import time
import board
import analogio
import digitalio

# Stromversorgung der eingebauten Photodiode einschalten
pd_power = digitalio.DigitalInOut(board.PD_POWER)
pd_power.direction = digitalio.Direction.OUTPUT
pd_power.value = True

# Kurz warten, bis die Schaltung stabil ist
time.sleep(0.1)

# Analoge Messleitung der Photodiode
photodiode = analogio.AnalogIn(board.PD_PIN)

def get_voltage(raw_value, reference_voltage):
    return (raw_value * reference_voltage) / 65535


while True:
    # Photodiode genau einmal auslesen
    raw_value = photodiode.value

    # Spannung aus demselben Messwert berechnen
    voltage = get_voltage(
        raw_value,
        photodiode.reference_voltage
    )

    print(
        f"Rohwert: {raw_value} | "
        f"Spannung: {voltage:.2f} V"
    )

    time.sleep(0.5)