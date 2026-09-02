#include <Adafruit_HDC1000.h> // http://librarymanager/All#Adafruit_HDC1000_Library

Adafruit_HDC1000 hdc = Adafruit_HDC1000();

void setup(){
    Serial.begin(9600);
    hdc.begin();
}

void loop(){
    Serial.print("Temperature: ");
    Serial.println(hdc.readTemperature());
    Serial.print("Humidity: ");
    Serial.println(hdc.readHumidity());
}