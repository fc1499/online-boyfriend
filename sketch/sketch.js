let harryImg;
let singImg;
let teaImg;
let watermelon;
let x = 500;

function preload() {
  harryImg = loadImage('harry.png');
  singImg = loadImage('singingharry.png');
  fontReg = loadFont('KeeponTruckin.ttf');
}

function setup() {
  createCanvas(x, 600);
  background(255);
  textFont(fontReg);
  textAlign(CENTER);
  textSize(50);
  watermelon = loadSound('Harry Styles - Watermelon Sugar (Official Audio).mp3');
  input = createInput();
  input.position(180, 500);

  textSize(40);
  text("Online Boyfriend", 250, 60);

  greeting1 = createElement('h2');
  greeting1.html('ello luv, how are you doing?');
  greeting1.position(x / 4, 425);


  greeting2 = createElement('h2');
  greeting2.html('wow that is great, luv ^_^');
  greeting2.position(x / 4, 425);

  greeting3 = createElement('h2');
  greeting3.html('sorry luv, would you like me to play a song?');
  greeting3.position(x / 10, 425);

  greeting4 = createElement('h2');
  greeting4.html("Fine, I'll just have tea by myself.");
  greeting4.position(x / 5, 425);

  
  greeting5 = createElement('h2');
  greeting5.html("Baby, you light up my world like nobody else!");
  greeting5.position(25, 425);

  button = createButton('SEND');
  button.position(input.x + input.width + 5, 500);
  button.mousePressed(greet);

  restart = createButton('RESTART');
  restart.position(250, 500);
  restart.mousePressed(resetSketch);

  next = createButton('NEXT');
  next.position(250, 500);
  next.mousePressed(resetSketch);

  harryReg = createImg('harry.png', 'harry regular');
  harryReg.position(20, 70);
  harryReg.size(500, 350);


  harrySing = createImg('singingharry.png', 'harry singing');
  harrySing.position(60, 90);
  harrySing.size(400, 350);
  
  
  harryTea = createImg('harrytea.jpg', 'harry drinking tea');
  harryTea.position(60, 90);
  harryTea.size(400, 350);

   
  OneDirection = createImg('onedirection.jpeg', 'the gang');
  OneDirection.position(30, 90);
  OneDirection.size(500, 350);
  
  resetSketch();

}

function resetSketch() {
  watermelon.stop();
  greeting1.show();
  greeting2.hide();
  greeting3.hide();
  greeting4.hide();
    greeting5.hide();
  restart.hide();
  button.show();
  input.show();
  next.hide();
  harryReg.show();
  harrySing.hide();
  harryTea.hide();
  OneDirection.hide();
}


function greet() {

  const name = input.value();
  
if (input.value().includes("not") || input.value().includes("i'm not")) {
      greet2();
    } else if (input.value().includes("one direction")) {
      greet3();
      
      
    } else if (input.value().includes("wattpad")) {
      window.open('https://www.wattpad.com/stories/harrystyles');
    } else {
   greeting1.hide();
    greeting2.show();
    }
  }



function greet2() {
  greeting1.hide();
  greeting2.hide();
  greeting3.show();
  yesButton = createButton('YES');
  noButton = createButton('NO');

  yesButton.position(200, 500);
  noButton.position(300, 500);
  yesButton.mousePressed(playSong);
  noButton.mousePressed(goodbye);
  button.hide();
  input.hide();
}

function playSong() {
  harryReg.hide();
  harrySing.show();
  greeting3.hide();
  watermelon.play();
  next.show();
  yesButton.hide();
  noButton.hide();


}

function goodbye() {
  harryReg.hide();
  harryTea.show();
  greeting3.hide();
  yesButton.hide();
  noButton.hide();
  greeting4.show();
  restart.show();
}

function greet3() {
  greeting1.hide();
  harryReg.hide();
    greeting5.show();
  OneDirection.show();
  harryReg.hide();
  harryTea.show();
  greeting3.hide();
  greeting4.hide();
  restart.show();
  button.hide();
  input.hide();
  
}
