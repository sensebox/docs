import time
import board
from adafruit_sps30.i2c import SPS30_I2C

# For i2c mode the SPS30 interface select pin needs to be connected to ground
i2c = board.I2C()   # uses board.SCL and board.SDA
sps = SPS30_I2C(i2c)

while True:
    aqdata = sps.read()
    print("PM2.5: {:.1f}".format(aqdata["pm25 standard"]))
    time.sleep(1)
