let texto = [];
let rm;
let reftime;
let order = 2;
let nsentences = 1;
let interval = 10000;
let jitter = 0.3;
let cnv;
let x = 50;
let y = 50;
let s = "Fake Fake News" ;
let c = 255;

function preload() {
  
  texto = loadStrings('textos/data.txt');
  
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 0);
  frameRate(10);
  
  rm = new RiMarkov(order);
  rm.loadText(texto[0]);
  
  reftime = millis();
  textSize(45);
  textFont('Oswald');



}


function draw() {
  background(255, 0, 0, 2);
  fill(c)
  text(s, x, y, width-2*x, height-10*x);



 
}

function mouseClicked() {

  sentences = rm.generateSentences(nsentences);
  s = ' ';
    
  for (i = 0; i < sentences.length; i++) {
    s += sentences[i];
    if (random() < jitter) s+= '\n\n';
  }

x = random (0, 100);
y = random (0, height-10*x);
c = random (0, 255);

}