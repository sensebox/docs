#include <Adafruit_DPS310.h> // http://librarymanager/All#Adafruit_DPS310

Adafruit_DPS310 dps;

void setup() {
  Serial.begin(9600);

  dps.begin_I2C(0x76);
  dps.configurePressure(DPS310_64HZ, DPS310_64SAMPLES);
  dps.configureTemperature(DPS310_64HZ, DPS310_64SAMPLES);

}

void loop() {
    sensors_event_t temp_event, pressure_event;
    dps.getEvents(&temp_event, &pressure_event);

    Serial.print("Pressure: ");
    Serial.println(pressure_event.pressure);
    Serial.print("Temperature: ");
    Serial.println(temp_event.temperature);
}