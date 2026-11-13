#include <senseBoxIO.h>
#include <OneWire.h> // http://librarymanager/All#OneWire
#include <DallasTemperature.h> // http://librarymanager/All#DallasTemperature


#define ONE_WIRE_BUS 1
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

float getWaterTemp(){
  sensors.requestTemperatures();
  sensors.getTempCByIndex(0);
}

void setup() {
  Serial.begin(9600);
  sensors.begin();
}

void loop() {
  Serial.print("Wassertemperatur: ");
  Serial.print(getWaterTemp());
}
