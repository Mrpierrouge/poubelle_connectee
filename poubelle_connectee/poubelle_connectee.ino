#include <Arduino.h>
#include "HX711.h"
#include "soc/rtc.h"
#include <WiFi.h>
#include <HTTPClient.h>

// HX711 circuit wiring
const int LOADCELL_DOUT_PIN = 16;
const int LOADCELL_SCK_PIN = 4;
const String type = "plat";
const String ecole = "ecole1";
const String password = "XXX";
const char* ssid = "Galaxy A54 5G C289";
const char* ssidpassword = "pierriclegay";
const char* serverName = "http://192.168.123.206:3000/poids";

HX711 scale;

void setup() {
  Serial.begin(115200);
  rtc_cpu_freq_config_t config;
  rtc_clk_cpu_freq_get_config(&config);
  rtc_clk_cpu_freq_to_config(RTC_CPU_FREQ_80M, &config);
  rtc_clk_cpu_freq_set_config_fast(&config);
  Serial.println("HX711 Demo");

  Serial.println("Initializing the scale");

  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);

  Serial.println("Before setting up the scale:");
  Serial.print("read: \t\t");
  Serial.println(scale.read());      

  Serial.print("read average: \t\t");
  Serial.println(scale.read_average(20));  

  Serial.print("get value: \t\t");
  Serial.println(scale.get_value(5));   

  Serial.print("get units: \t\t");
  Serial.println(scale.get_units(5), 1);  
            
  scale.set_scale(-67.925);            
  scale.tare();               

  Serial.println("After setting up the scale:");

  Serial.print("read: \t\t");
  Serial.println(scale.read());                 

  Serial.print("read average: \t\t");
  Serial.println(scale.read_average(20));      

  Serial.print("get value: \t\t");
  Serial.println(scale.get_value(5));   

  Serial.print("get units: \t\t");
  Serial.println(scale.get_units(5), 1);        

  Serial.println("Readings:");
  Serial.begin(115200);

unsigned long lastTime = 0;

unsigned long timerDelay = 5000;

  WiFi.begin(ssid, ssidpassword);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
 
  Serial.println("Timer set to 5 seconds (timerDelay variable), it will take 5 seconds before publishing the first reading.");
}

void loop() {
      Serial.println("--------------------------------------------------------------------------------------------------------------------");
  Serial.print("one reading:\t");
  Serial.print(scale.get_units(), 1);
  Serial.print("\t| average:\t");
  Serial.println(scale.get_units(10), 5);
  //poid en kg
  float p = scale.get_units(10)/-3;
  Serial.print("poid en g   ");
  Serial.println(p);
  scale.power_down();            
  delay(1000);
  scale.power_up();
  const int lastTime = 0;
  const int timerDelay = 0.1;
  if ((millis() - lastTime) > timerDelay) {
    if(WiFi.status()== WL_CONNECTED){
      WiFiClient client;
      HTTPClient http;
      http.begin(client, serverName);
      int poids = (int) p;
      Serial.print(poids);
      http.addHeader("Content-Type", "application/json");
      char json[100];
      sprintf(json, "{\"type\":\"%s\",\"ecole\":\"%s\",\"password\":\"%s\",\"poids\":%d}", type, ecole, password, poids);
      int httpResponseCode = http.POST(json);

      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
        
      http.end();
    }
    else {
      Serial.println("WiFi not connected");
    }
  }

}
