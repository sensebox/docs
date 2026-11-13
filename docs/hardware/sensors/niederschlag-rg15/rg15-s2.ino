#include <RG15.h> // https://github.com/sensebox/rg15-arduino-lib

// Initialise the RG15 through the serial port
RG15 rg15_Serial0(Serial0); 

void setup(){
    Serial.begin(9600);
    delay(2000);
    rg15_Serial0.begin();
    rg15_Serial0.resetAccumulation();
}

void loop(){
    rg15_Serial0.poll();
    float intensity = rg15_Serial0.getRainfallIntensity();
    Serial.print("Niederschlagsintensität: ");
    Serial.print(intensity);
    Serial.println(" mm/h");
    delay(1000);
}
