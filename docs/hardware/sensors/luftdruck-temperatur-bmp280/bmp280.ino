#include <Adafruit_BMP280.h> // http://librarymanager/All#Adafruit_BMP280_Library
#include <SPI.h>

Adafruit_BMP280 bmp;

void setup() {
  Serial.begin(9600);
  bmp_sensor.begin();
}

void loop() {
    Serial.print("Pressure: ");
    Serial.println(bmp_sensor.readPressure());
    Serial.print("Temperature: ");
    Serial.println(bmp_sensor.readTemperature());
    Serial.print("Altitude: ");
    Serial.println(bmp_sensor.readAltitude(1013));
}
