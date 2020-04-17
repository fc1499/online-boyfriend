let harryimg;
x = 500;
var hello = "Hello world, welcome to the universe.";


function preload() {
  harryimg = loadImage('harry.png');
}

function setup() {
	createCanvas(x,600);
	background(255);
    textAlign(CENTER);
    textSize(50);
  
  input = createInput();
  input.position(180, 500);
 
  
  button = createButton('SEND');
  button.position(input.x + input.width+5, 500);
  button.mousePressed(greet);

  greeting = createElement('h2', 'ello luv, how are you doing?');
  greeting.position(x/4, 425);


}


function draw() {
	textSize(40);
	text("Online Boyfriend", 250, 60);
	image(harryimg,10,70,500,350);
}


function greet() {

  const name = input.value();
    if (input.value().includes("not") || input.value().includes("i'm not")) { 
        greeting.html('sorry luv, would you like me to play a song?'); 
  } else if (input.value().includes("well") || input.value().includes("good") || input.value().includes("great")) {
    
  greeting.html('wow that is great, love ^_^');
 
  } else {
    greeting.html('wow that is great, love ^_^');
  }
}