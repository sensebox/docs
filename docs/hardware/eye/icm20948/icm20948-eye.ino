#include <Adafruit_ICM20948.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>

Adafruit_ICM20948 icm;

#define I2C_PIN_SCL 1
#define I2C_PIN_SDA 2

void setup() {
  Wire.begin(I2C_PIN_SDA, I2C_PIN_SCL);
  Serial.begin(115200);
  while(!Serial) {}

  if (icm.begin_I2C(0x68, &Wire))
  {
    icm.setAccelRange(ICM20948_ACCEL_RANGE_8_G);
    icm.setAccelRateDivisor(10.25); // 100 Hz sample rate
  } else {
    Serial.println("Failed to find ICM20948 chip");
    while (1) { delay(10); }
  }

}

void loop() {
  sensors_event_t a, g, m, temp;
  icm.getEvent(&a, &g, &m, &temp);
  Serial.printf("AccelX:%.2f,AccelY:%.2f,AccelZ:%.2f,GyroX:%.2f,GyroY:%.2f,GyroZ:%.2f,MagX:%.2f,MagY:%.2f,MagZ:%.2f,Temp:%.2f\n",
    a.acceleration.x, a.acceleration.y, a.acceleration.z,
    g.gyro.x, g.gyro.y, g.gyro.z,
    m.magnetic.x, m.magnetic.y, m.magnetic.z,
    temp.temperature);
  delay(100);
}
