#include <RG15.h> // https://github.com/sensebox/rg15-arduino-lib
#include <SenseBoxIO.h>

// Initialise the RG15 through the serial port
RG15 rg15_Serial1(Serial1); 

void setup(){
    Serial.begin(9600);
    delay(2000);
    rg15_Serial1.begin();
    rg15_Serial1.resetAccumulation();
}

void loop(){
    rg15_Serial1.poll();
    float intensity = rg15_Serial1.getRainfallIntensity();
    Serial.print("Niederschlagsintensität: ");
    Serial.print(intensity);
    Serial.println(" mm/h");
    delay(1000);
}
