import time
import busio
import microcontroller
import adafruit_mpu6050

scl = microcontroller.pin.GPIO42
sda = microcontroller.pin.GPIO45

i2c = busio.I2C(scl, sda)
mpu = adafruit_mpu6050.MPU6050(i2c)

while True:
  print("Acceleration: X:%.2f, Y: %.2f, Z: %.2f m/s^2"%(mpu.acceleration))
  print("Gyro X:%.2f, Y: %.2f, Z: %.2f degrees/s"%(mpu.gyro))
  print("Temperature: %.2f C"%mpu.temperature)
  print("")
  time.sleep(1)