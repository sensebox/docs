from vl53lxcx import (
  DATA_DISTANCE_MM,
  DATA_TARGET_STATUS,
  RESOLUTION_8X8,
  STATUS_VALID,
  VL53L8CX,
)
import busio
import board
from digitalio import DigitalInOut, Direction

i2c = busio.I2C(board.SCL, board.SDA, frequency=1_000_000)
lpn = DigitalInOut(board.D3)
lpn.direction = Direction.OUTPUT
lpn.value = True

tof = VL53L8CX(i2c, lpn=lpn)

def main():
  tof.reset()
  if not tof.is_alive():
      raise ValueError("VL53L8CX not detected")
  
  tof.init()
  tof.resolution = RESOLUTION_8X8
  grid = 7
  tof.ranging_freq = 2
  
  tof.start_ranging({DATA_DISTANCE_MM, DATA_TARGET_STATUS})
  
  while True:
      if tof.check_data_ready():
          results = tof.get_ranging_data()
          distance = results.distance_mm
          status = results.target_status
          # enumerate(distance) ...

main()