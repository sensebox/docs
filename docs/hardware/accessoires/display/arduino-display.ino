#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h> // http://librarymanager/All#Adafruit_GFX_Library
#include <Adafruit_SSD1306.h> // http://librarymanager/All#Adafruit_SSD1306


#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

void setup() {
    display.begin(SSD1306_SWITCHCAPVCC, 0x3D);
    display.display();
    delay(100);
    display.clearDisplay();
}


void loop() {
    display.setCursor(0,0);
    display.setTextSize(1);
    display.setTextColor(WHITE,BLACK);
    display.println("Hallo Welt!");
    display.display();
}