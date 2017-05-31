int sensorPin = 0;
int ledPin = 11;
int ledLevel = 0;
int inputValue;

void setup() {
  analogReference(DEFAULT);
  Serial.begin(9600);
  pinMode(ledPin,OUTPUT);
}

void loop() {
  inputValue = analogRead(sensorPin);
  inputValue = constrain(inputValue , 100 ,850);
  ledLevel = map(inputValue,100,800,255,0);
  delay(450);
  if(inputValue > 800) ledLevel = 0;
  Serial.print(ledLevel);
  Serial.print("\n");
  analogWrite(ledPin,ledLevel);
}
