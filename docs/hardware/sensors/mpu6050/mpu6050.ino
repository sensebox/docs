#include <Wire.h>
#include <Adafruit_MPU6050.h>

Adafruit_MPU6050 mpu;
sensors_event_t a, g, temp;

void setup() {
  // Serielle Kommunikation starten
  Serial.begin(115200);

  Wire1.begin();
  mpu.begin(0x68, &Wire1);
  mpu.setAccelerometerRange(MPU6050_RANGE_8_G);


  Serial.println("MPU6050 bereit!");
}

void loop() {
  mpu.getEvent(&a, &g, &temp);


  // Beschleunigungsdaten ausgeben
  Serial.print("X:");
  Serial.print(a.acceleration.x);
  Serial.print(",Y:");
  Serial.print(a.acceleration.y);
  Serial.print(",Z:");
  Serial.println(a.acceleration.z);

  // Kurze Pause, um die Ausgabe lesbar zu halten
  delay(100);
}