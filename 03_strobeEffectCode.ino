void setup()
{
  pinMode(12, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(10, OUTPUT);
}

int delayTime = 100;

void loop()
{
  digitalWrite(12, HIGH);
  delay(delayTime); // Wait for 1000 millisecond(s)
  digitalWrite(12, LOW);
  delay(delayTime); // Wait for 1000 millisecond(s)
  digitalWrite(11, HIGH);
  delay(delayTime); // Wait for 1000 millisecond(s)
  digitalWrite(11, LOW);
  delay(delayTime); // Wait for 1000 millisecond(s)
  digitalWrite(10, HIGH);
  delay(delayTime); // Wait for 1000 millisecond(s)
  digitalWrite(10, LOW);
  delay(delayTime); // Wait for 1000 millisecond(s)
}