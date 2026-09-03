import time
import adafruit_icm20x
import busio
import microcontroller

# Define the GPIO pins used for the I2C connection
scl = microcontroller.pin.GPIO42
sda = microcontroller.pin.GPIO45

# Initialize the I2C bus for communication with the ICM-20948
i2c_icm = busio.I2C(scl, sda)

# Initialize the ICM-20948 sensor at I2C address 0x68
icm = adafruit_icm20x.ICM20948(i2c_icm, address=0x68)

while True:

    # Read and print acceleration on the X, Y and Z axes in m/s^2
    print("Acceleration: X:%.2f, Y: %.2f, Z: %.2f m/s^2" % (icm.acceleration))

    # Read and print angular velocity on the X, Y and Z axes in rad/s
    print("Gyro X:%.2f, Y: %.2f, Z: %.2f rad/s" % (icm.gyro))

    # Read and print magnetic field strength on the X, Y and Z axes in microtesla
    print("Magnetometer X:%.2f, Y: %.2f, Z: %.2f uT" % (icm.magnetic))

    # Print an empty line for better readability
    print("")

    # Wait 0.5 seconds before taking the next measurement
    time.sleep(0.5)