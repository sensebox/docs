#include <Adafruit_NeoPixel.h>
Adafruit_NeoPixel rgb_led_1

void setup() {
    rgb_led_1.begin();
    rgb_led_1.setBrightness(30);
}

void loop() {
  if (time_startInterval > time_actualInterval + intervalInterval)
    {
        time_actualInterval = millis();
        rgb_led_1.setPixelColor(0,rgb_led_1.Color(random(0, 255), random(0, 255), random(0, 255)));
        rgb_led_1.show();
    }
}