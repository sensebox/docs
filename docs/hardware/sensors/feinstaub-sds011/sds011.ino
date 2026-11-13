#include <SPI.h>
#include <Wire.h>

SDS011 my_sds(Serial1) // Serial1 gibt hier den Seriellen Port an, an dem du den Sensor angeschlossen hast
float p10,p25

void setup(){
    // Normalen seriellen Port initialisieren
    Serial.begin(9600);
    while(!Serial);
    // Seriellen Port, an dem unsere Sensor angeschlossen ist initialisieren
    Serial1.begin(9600);
    delay(5000);
}

void loop(){
    // Variablen den gemessenen Feinstaubwerte zuweisen
    p10 = my_sds.getPm10();
    p25 = my_sds.getPm25();
    //Werte in der Konsole drucken
    Serial.println("P2.5: "+String(p25));
    Serial.println("P10:  "+String(p10));
    delay(1000);
}
