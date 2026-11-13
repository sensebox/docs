#include <senseBoxIO.h>

float getSMT50Temperature(int analogPin){
    int sensorValue = analogRead(analogPin);
    float voltage = sensorValue * (3.3 / 1024.0);
    return (voltage - 0.5) * 100;
}


void setup() {
    Serial.begin(9600);
}


void loop() {
    Serial.println(getSMT50Temperature(1));
}
