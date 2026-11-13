// Einladen der Bibliotheken
#include <SPI.h>
#include <SD.h>

File myFile;
// Name der Datei auf der SD-Karte
// Achte darauf, dass dieser Name (ohne Dateiendung) nicht länger als 8 Buchstaben lang sein darf! 
String fileName = "senseBox.txt";

void setup()
{ 
    // Starten der SD-Bee
    SD.begin(28);
    // Öffnen der Datei auf der SD-Karte
    myFile = SD.open(fileName, FILE_WRITE);
    myFile.close();

    hdc.begin();
};

void loop()
{
    // Datei öffnen mit Schreibzugriff
    myFile = SD.open(fileName, FILE_WRITE);
    myFile.println("Hallo Welt!");
    // Nach Benutzung wird die Datei wieder geschlossen
    myFile.close();
};
