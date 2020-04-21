//most code found on p5js, or I already learned it
//General setup for popup feature made by Daniel Shiffman, watched Coding Train video 11.2
let harryImg;
let singImg;
let teaImg;
let watermelon;
let x = 500;

let words = ['wow, that is great luv ^_^', 'Im betta than Justin Beibah.', 'fancy a cuppa tea?', 'ABSOBLOODYLOOTELY!'];

function preload() {
  harryImg = loadImage('harry.png');
  singImg = loadImage('singingharry.png');
  fontReg = loadFont('KeeponTruckin.ttf');
  harrylove = loadImage('harrylove.gif');
}

function setup() {
  createCanvas(x, 600);
  background(255);
  textFont(fontReg);
  textAlign(CENTER);
  textSize(50);
  watermelon = loadSound('Harry Styles - Watermelon Sugar (Official Audio).mp3');

  let word = random(words);

  input = createInput();
  input.position(180, 500);

  textSize(40);
  text("Online Boyfriend", 250, 60);

  greeting1 = createElement('h2');
  greeting1.html('ello luv, how are you doing?');
  greeting1.position(x /3.2, 425);


  greeting2 = createElement('h2');
  greeting2.html(word);
  greeting2.position(x / 3.2, 425);

  greeting3 = createElement('h2');
  greeting3.html('sorry luv, would you like me to play a song?');
  greeting3.position(x / 6, 425);

  greeting4 = createElement('h2');
  greeting4.html("Fine, I'll just have tea by myself.");
  greeting4.position(x / 4, 450);


  greeting5 = createElement('h2');
  greeting5.html("Baby, you light up my world like nobody else!");
  greeting5.position(x/6, 450);

  greeting6 = createElement('h2');
  greeting6.html("Aww, luv you too luv <3");
  greeting6.position(x/3, 425);
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



  harryLove = createImg('harrylove.gif', 'harry love');
  harryLove.position(32, 100);
  harryLove.size(450, 300);

  OneDirection = createImg('onedirection.jpeg', 'the gang');
  OneDirection.position(10, 90);
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
  greeting6.hide();
  restart.hide();
  button.show();
  input.show();
  next.hide();
  harryReg.show();
  harrySing.hide();
  harryTea.hide();
  OneDirection.hide();
  harryLove.hide();
}


function greet() {

  const name = input.value();

if (input.value().includes("not") || input.value().includes("i'm not")) {
      greet2();
    } else if (input.value().includes("one direction")) {
      greet3();


    } else if (input.value().includes("wattpad")) {
      window.open('https://www.wattpad.com/stories/harrystyles');
    } else if (input.value().includes("news")) {
      window.open('https://www.google.com/search?q=harry+styles+news&rlz=1C5CHFA_enUS857US857&source=lnms&tbm=nws&sa=X&ved=2ahUKEwiG7qacovroAhWKlXIEHb6XDv0Q_AUoAXoECBMQAw&biw=1680&bih=916&dpr=2');
    } else if (input.value().includes("love")) {
      love();
    } else if (input.value().includes("hate you")) {
      harryReg.hide();
      button.hide();
      input.hide();
      greeting2.hide();
    }  else {
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

function love() {
  greeting1.hide();
  harryReg.hide();
    restart.show();
  harryLove.show();
  greeting6.show();
   button.hide();
  input.hide();
}
