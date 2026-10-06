#include <SPI.h>
#include <LTR329.h>
#include <Wire.h>
#include <VEML6070.h>

bool lightsensortype = 0; //0 for tsl - 1 for ltr
//settings for LTR sensor
LTR329 LTR;
unsigned char gain = 1;
unsigned char integrationTime = 0;
unsigned char measurementRate = 3;
VEML6070 veml;


int read_reg(byte address, uint8_t reg)
  {
    int i = 0;
    Wire.beginTransmission(address);
    Wire.write(reg);
    Wire.endTransmission();
    Wire.requestFrom((uint8_t)address, (uint8_t)1);
    delay(1);
    if(Wire.available())
      i = Wire.read();
    return i;
  }


void write_reg(byte address, uint8_t reg, uint8_t val)
  {
    Wire.beginTransmission(address);
    Wire.write(reg);
    Wire.write(val);
    Wire.endTransmission();
  }

void Lightsensor_begin()
  {
    Wire.begin();
    unsigned int u = 0;
    u = read_reg(0x29, 0x80 | 0x0A); //id register
    if ((u & 0xF0) == 0xA0)            // TSL45315
      {
        write_reg(0x29, 0x80 | 0x00, 0x03); //control: power on
        write_reg(0x29, 0x80 | 0x01, 0x02); //config: M=4 T=100ms
        delay(120);
        lightsensortype = 0; //TSL45315
      }
    else
      {
        LTR.begin();
        LTR.setControl(gain, false, false);
        LTR.setMeasurementRate(integrationTime, measurementRate);
        LTR.setPowerUp(); //power on with default settings
        delay(10); //Wait 10 ms (max) - wakeup time from standby
        lightsensortype = 1;                     //
      }
  }


unsigned int Lightsensor_getIlluminance()
  {
    unsigned int lux = 0;
    if (lightsensortype == 0) // TSL45315
    {
      unsigned int u = (read_reg(0x29, 0x80 | 0x04) << 0);  //data low
      u |= (read_reg(0x29, 0x80 | 0x05) << 8); //data high
      lux = u * 4; // calc lux with M=4 and T=100ms
    }
    else if (lightsensortype == 1) //LTR-329ALS-01
    {
      delay(100);
      unsigned int data0, data1;
      for (int i = 0; i < 5; i++) {
        if (LTR.getData(data0, data1)) {
          if(LTR.getLux(gain, integrationTime, data0, data1, lux));
          if(lux > 0) break;
          else delay(10);
        }
        else {
        byte error = LTR.getError();
      }
    }
  }
  return lux;
  }


void setup() {
    Serial.begin(9600);
    Lightsensor_begin();
    veml.begin();

}

void loop() {
    Serial.print("Illuminance: ");
    Serial.println(ightsensor_getIlluminance());
    Serial.print("UV-Intensity: ");
    Serial.println(veml.getUV());
}