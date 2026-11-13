#include <senseBoxIO.h>
#include <SparkFun_u-blox_GNSS_Arduino_Library.h> // http://librarymanager/All#SparkFun_u-blox_GNSS_Arduino_Library
#include <Wire.h>

SFE_UBLOX_GNSS myGNSS;
float latitude;
float longitude;
void setup() {
  Wire.begin();

  if (myGNSS.begin() == false) //Connect to the Ublox module using Wire port
  {
    Serial.println(F("Ublox GPS not detected at default I2C address. Please check wiring. Freezing."));
    while (1);
  }

  myGNSS.setI2COutput(COM_TYPE_UBX); //Set the I2C port to output UBX only (turn off NMEA noise)
  myGNSS.saveConfiguration(); //Save the current settings to flash and BBR
}

void loop() {
  latitude = myGNSS.getLatitude();
  longitude = myGNSS.getLongitude();

}
