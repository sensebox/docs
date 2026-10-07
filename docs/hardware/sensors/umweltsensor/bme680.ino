#include <senseBoxIO.h>
#include <bsec.h> // http://librarymanager/All#BSEC_Software_Library

float bmeTemperatur;
float bmeHumidity;
double bmePressure;
float bmeIAQ;
float bmeIAQAccuracy;
int bmeCO2;
float bmeBreathVocEquivalent;

Bsec iaqSensor;

void checkIaqSensorStatus(void)
    {
    if (iaqSensor.bsecStatus != BSEC_OK) {
        if (iaqSensor.bsecStatus < BSEC_OK) {
        for (;;)
            errLeds(); /* Halt in case of failure */
        }
    }

    if (iaqSensor.bme68xStatus != BME68X_OK) {
        if (iaqSensor.bme68xStatus < BME68X_OK) {
        for (;;)
            errLeds(); /* Halt in case of failure */
        }
    }
}


void errLeds(void)
{
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, HIGH);
    delay(100);
    digitalWrite(LED_BUILTIN, LOW);
    delay(100);
}


void setup() {
    Wire.begin();
    iaqSensor.begin(BME68X_I2C_ADDR_LOW, Wire);
    checkIaqSensorStatus();

    bsec_virtual_sensor_t sensorList[13] = {
        BSEC_OUTPUT_IAQ,
        BSEC_OUTPUT_STATIC_IAQ,
        BSEC_OUTPUT_CO2_EQUIVALENT,
        BSEC_OUTPUT_BREATH_VOC_EQUIVALENT,
        BSEC_OUTPUT_RAW_TEMPERATURE,
        BSEC_OUTPUT_RAW_PRESSURE,
        BSEC_OUTPUT_RAW_HUMIDITY,
        BSEC_OUTPUT_RAW_GAS,
        BSEC_OUTPUT_STABILIZATION_STATUS,
        BSEC_OUTPUT_RUN_IN_STATUS,
        BSEC_OUTPUT_SENSOR_HEAT_COMPENSATED_TEMPERATURE,
        BSEC_OUTPUT_SENSOR_HEAT_COMPENSATED_HUMIDITY,
        BSEC_OUTPUT_GAS_PERCENTAGE
    };


    iaqSensor.updateSubscription(sensorList, 13, BSEC_SAMPLE_RATE_LP);
    checkIaqSensorStatus();



}


void loop() {

    if (iaqSensor.run()) {
      bmeTemperatur = iaqSensor.temperature;
      bmeHumidity = iaqSensor.humidity;
      bmePressure = iaqSensor.pressure;
      bmeIAQ = iaqSensor.iaq;
      bmeIAQAccuracy = iaqSensor.iaqAccuracy;
      bmeCO2 = iaqSensor.co2Equivalent;
      bmeBreathVocEquivalent = iaqSensor.breathVocEquivalent;
    } else {
      checkIaqSensorStatus();
    }

    Serial.println(bmeTemperatur);

}