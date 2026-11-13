#include <senseBoxIO.h>
#include <BMX055.h>

BMX055 bmx;

void setup() {
  // Initialisiere die serielle Kommunikation mit 9600 Baud
  Serial.begin(9600);

  // Starte den Beschleunigungssensor mit Konfigurationsmodus 0x3
  bmx.beginAcc(0x3);
}

void loop() {
  // Lese die Beschleunigung auf der X-Achse aus
  int xAcc = bmx.getAccelerationX();
  int yAcc = bmx.getAccelerationY(); 
  int zAcc = bmx.getAccelerationZ();
  // Ausgabe der Beschleunigungswerte auf dem seriellen Monitor
  Serial.print("X:"); 
  Serial.print(xAcc);
  Serial.print(",Y:"); 
  Serial.print(yAcc); 
  Serial.print(",Z:"); 
  Serial.println(zAcc);
  // Verzögerung um die Leserate zu begrenzen
  delay(100);
}
