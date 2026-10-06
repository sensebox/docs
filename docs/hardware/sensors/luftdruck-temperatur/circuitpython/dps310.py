import time
import board
import digitalio
from adafruit_dps310.basic import DPS310
# IO Enable
io_enable_pin = digitalio.DigitalInOut(board.IO_POWER)
io_enable_pin.direction = digitalio.Direction.OUTPUT
io_enable_pin.value = False
i2c = board.I2C()
dps310 = DPS310(i2c, 0x76)
while True:
  print("Temperature = %.2f *C" % dps310.temperature)
  print("Pressure = %.2f hPa" % dps310.pressure)
  print("")
  time.sleep(1.0)