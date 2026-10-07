import wifi

# WLAN Zugangsdaten
CIRCUITPY_WIFI_SSID = "SSID"
CIRCUITPY_WIFI_PASSWORD = "Password"

# Verbindung zum WiFi herstellen
print(f"Connecting to {CIRCUITPY_WIFI_SSID}")
wifi.radio.connect(
    CIRCUITPY_WIFI_SSID, 
    CIRCUITPY_WIFI_PASSWORD
)
print(f"Connected!")