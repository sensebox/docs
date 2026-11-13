#include <senseBoxIO.h>
#include <SparkFun_SCD30_Arduino_Library.h> // http://librarymanager/All#SparkFun_SCD30_Arduino_Library

SCD30 airSensor;

void setup() {
  Serial.begin(9600);
  Wire.begin();
  if (airSensor.begin() == false)
  {
    while (1)
      ;
  }
  airSensor.useStaleData(true);
}
void loop()
{
 Serial.println(airSensor.getCO2());
 delay(500);
}
