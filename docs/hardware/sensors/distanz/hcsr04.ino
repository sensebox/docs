int trig = 1;  // Trig-Pin des Sensors ist an Pin 1 angeschlossen.
int echo = 2;  // Echo-Pin des Sensors ist an Pin 2 angeschlossen.

// Definieren der Variablen
unsigned int time = 0;
unsigned int distance = 0;

void setup() {
    Serial.begin(9600); // Startet den Seriellen Monitor
    pinMode(trig, OUTPUT);
    pinMode(echo, INPUT);
}

void loop() {
    digitalWrite(trig, HIGH);
    delayMicroseconds(10);
    digitalWrite(trig, LOW);
    distance = time / 58;
    Serial.println(distance);
}
