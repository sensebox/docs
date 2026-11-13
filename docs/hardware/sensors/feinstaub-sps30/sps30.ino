#include <sps30.h> // http://librarymanager/All#

struct sps30_measurement m;
uint32_t auto_clean_days = 4;
const long intervalsps = 1000;
unsigned long time_startsps = 0;
unsigned long time_actualsps = 0;

void getSPS30Data(){

    uint16_t data_ready;
    int16_t ret;

    do {
        ret = sps30_read_data_ready(&data_ready);
        if (ret < 0) {
        } else if (!data_ready)  {}
        else
            break;
            delay(100); /* retry in 100ms */
        } while (1);
        ret = sps30_read_measurement(&m);
}

void setup() {
    sensirion_i2c_init();
    sps30_set_fan_auto_cleaning_interval_days(auto_clean_days);
    sps30_start_measurement();
}

void loop() {
    time_startsps = millis();
    if (time_startsps > time_actualsps + intervalsps) {
        time_actualsps = millis();
        getSPS30Data();
    }
    Serial.println(m.mc_1p0);
}
