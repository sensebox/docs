#include <SD.h>
#include <SPI.h>
#include "FS.h"
#include <Adafruit_HDC1000.h> // https://github.com/adafruit/Adafruit_HDC1000_Library

const long intervalInterval = 60000;
long time_startInterval = 0;
long time_actualInterval = 0;

File Daten;
Adafruit_HDC1000 hdc = Adafruit_HDC1000();
SPIClass sdspi = SPIClass();

void setup() {

    pinMode(SD_ENABLE,OUTPUT);
    digitalWrite(SD_ENABLE,LOW);
    sdspi.begin(VSPI_SCLK,VSPI_MISO,VSPI_MOSI,VSPI_SS);
    SD.begin(VSPI_SS,sdspi);
    Daten = SD.open("/Daten.csv", FILE_WRITE);
    Daten.close();
    hdc.begin();
}

void loop() {
    time_startInterval = millis();
    if (time_startInterval > time_actualInterval + intervalInterval)
    {
        time_actualInterval = millis();
        Daten = SD.open("/Daten.csv", FILE_WRITE);
        Daten.println(hdc.readTemperature());
        Daten.close();
    }

}
