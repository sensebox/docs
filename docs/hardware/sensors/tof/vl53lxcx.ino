#include <Wire.h>
#include <vl53l8cx.h>

VL53L8CX sensor_vl53l8cx(&Wire, -1, -1);
float oldVl53l8cxMin = -1.0;

// Function to get the minimum distance measured by the ToF sensor (VL53L8CX)
// Funktion um die minimale Distanz gemessen durch den ToF Sensor (VL53L8CX) zu erhalten
float getVl53l8cxMin() {
      VL53L8CX_ResultsData Results;
      uint8_t NewDataReady = 0;
      uint8_t status;

      status = sensor_vl53l8cx.check_data_ready(&NewDataReady);

      if ((!status) && (NewDataReady != 0)) {
        sensor_vl53l8cx.get_ranging_data(&Results);
        float min = 10000.0;
        for(int i = 0; i < VL53L8CX_RESOLUTION_8X8*VL53L8CX_NB_TARGET_PER_ZONE; i++) {
          if((&Results)->target_status[i]!=255){
            float distance = (&Results)->distance_mm[i];
            if(min > distance) {
              min = distance;
            }
          }
        }
        oldVl53l8cxMin = (min==10000.0) ? 0.0 : min;
      }
      return oldVl53l8cxMin;
      }



void setup(){
    Serial.begin(9600);
    Wire.begin();
    Wire.setClock(1000000); //Sensor has max I2C freq of 1MHz
    sensor_vl53l8cx.set_i2c_address(0x51); // need to change address first, because default address is shared with LTR329
    sensor_vl53l8cx.begin();
    sensor_vl53l8cx.init();
    sensor_vl53l8cx.set_ranging_frequency_hz(30);
    sensor_vl53l8cx.set_resolution(VL53L8CX_RESOLUTION_8X8);
    sensor_vl53l8cx.start_ranging();

}

void loop(){
  Serial.println(getVl53l8cxMin());
  delay(10); // delay, to keep serial connection from overflowing
}
