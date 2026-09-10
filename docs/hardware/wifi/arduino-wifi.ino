#include <WiFi.h>

char ssid[] = "SSID";
char pass[] = "Password";

void setup() {
   Serial.begin(9600);
   WiFi.begin(ssid, pass);
    if(WiFi.status() == WL_NO_SHIELD){
      Serial.println("No WiFi shield is present");
      while(true);
    }
}

void loop(){
    Serial.println(WiFi.localIP());
    delay(1000);
}