int button = 8;
int led = 12;
int status = false;

void setup()
{
  pinMode(led, OUTPUT);
  pinMode(button, INPUT_PULLUP);
}

void loop(){
if (digitalRead(button) == true) {
status = !status;
digitalWrite(led, status);
} while(digitalRead(button) == true);
delay(50); // keeps a small delay
}