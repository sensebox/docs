 /*
 * This code has been adapted from the
 * Example Sound Level Sketch for the Adafruit Microphone Amplifier
 */

unsigned int micValue; // Variable, um den aktuellen Messwert zu speichern
int micPort = 1;
const int aufnahmeZeitfenster = 100; // Dauer des Messintervalls in ms (100 ms = 10Hz)

void setup() {
    Serial.begin(9600); // Startet den Seriellen Monitor
}

void loop()
{
    unsigned long start = millis();  // Start des Messintervalls
    unsigned int peakToPeak = 0;   // Abstand von maximalem zu minimalem Amplitudenausschlag
    unsigned int signalMax = 0;
    unsigned int signalMin = 1024;

    // Sammle Daten für 100 Millisekunden
    while (millis() - start < aufnahmeZeitfenster)
    {
        micValue = analogRead(micPort); // Messe den aktuellen Wert
        if (micValue < 1024)  // sortiere Fehlmessungen aus, deren Werte über dem max Wert 1024 liegen
        {
            if (micValue > signalMax)
            {
                signalMax = micValue;  // speichere den maximal gemessenen Wert
            }
        else if (micValue < signalMin)
            {
                signalMin = micValue;  // speichere den minimal gemessenen Wert
            }
        }
    }
    peakToPeak = signalMax - signalMin;  // max - min = Abstand von maximalem zu minimalem Amplitudenausschlag
    double volts = (peakToPeak * 5.0) / 1024;  // wandle in Volt um


    Serial.print(volts);
    Serial.println(" Volt");
}
