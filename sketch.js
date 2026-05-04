// Sadie Kuzyk
// History 30 Project
// Start date = April 23rd, 2026

const BORDER_HEIGHT = 75
let gameState = "title";
let font;
let introWords = ["Today is October 29th, 1929.", "Today is the day that the Wall Street stock market will crash.", "Although you live in Canada, this fact still affects you greatly.", "Why?", "Well, because you live in *CHOOSE PLACE*"];
let n = 0;
let title;
let prairieButton;
let bcButton;
let maritimeButton;
let ontqueButton;
let areYouSure = "";

function preload(){
  font = loadFont("OldNewspaperTypes.ttf");

  prairieButton = loadImage("prairies.png");
  bcButton = loadImage("bc.png");
  ontqueButton = loadImage("ontarioquebec.png");
  maritimeButton = loadImage("maritimes.png");
  title = createImg("title-ezgif.com-gif-maker.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gameState = "title";
  background(27, 62, 47);
}

function draw() {
  borders();
  title.position(100, 100);
  if (gameState === "title"){
    buttons();
  }
  if (gameState === "intro"){
    introduction();
    borders();
  }
  if (gameState === "chooseProvince"){
    birthPlace();
  }
  if (gameState === "BC" || gameState === "prairies" || gameState === "ontarioquebec" || gameState === "maritimes"){
    provinceIntro();
  }
}

function borders(){
  fill(6, 14, 11);
  rect(0, 0, windowWidth, BORDER_HEIGHT);
  rect(0, windowHeight-BORDER_HEIGHT, windowWidth, BORDER_HEIGHT);
}

function mouseClicked(){
  if (mouseX < windowWidth/2+690 && mouseX > windowWidth/2+410 && mouseY < windowHeight/2-80 && mouseY > windowHeight/2-180 && gameState === "title"){
    gameState = "intro";
    clear();
  }
  if (mouseX < windowWidth/2+690 && mouseX > windowWidth/2+410 && mouseY < windowHeight/2+40 && mouseY > windowHeight/2-60 && gameState === "title"){
    //middle button
  }
  if (mouseX < windowWidth/2+690 && mouseX > windowWidth/2+410 && mouseY < windowHeight/2+160 && mouseY > windowHeight/2+60 && gameState === "title"){
    gameState = "references";
    clear();
    references();
  }
  if (gameState === "intro"){
    n += 1;
    if (n === introWords.length+1){
      gameState = "chooseProvince";
      borders();
    }
  }
  if (mouseX < windowWidth/2-550 && mouseX > windowWidth/2-850 && mouseY < windowHeight/2+150 && mouseY > windowHeight/2-250 && gameState === "chooseProvince"){
    gameState = "BC";
  }
  if (mouseX < windowWidth/2-100 && mouseX > windowWidth/2-400 && mouseY < windowHeight/2+150 && mouseY > windowHeight/2-250 && gameState === "chooseProvince"){
    gameState = "prairies";
  }
  if (mouseX < windowWidth/2+350 && mouseX > windowWidth/2+50 && mouseY < windowHeight/2+150 && mouseY > windowHeight/2-250 && gameState === "chooseProvince"){
    gameState = "ontarioquebec";
  }
  if (mouseX < windowWidth/2+800 && mouseX > windowWidth/2+500 && mouseY < windowHeight/2+150 && mouseY > windowHeight/2-250 && gameState === "chooseProvince"){
    gameState = "maritimes";
  }
}

function buttons(){
  noStroke()
  fill(219, 190, 156);
  rect(windowWidth/2+400, windowHeight/2-200, 300, 400);
  fill("black");
  rect(windowWidth/2+410, windowHeight/2-180, 280, 100);
  rect(windowWidth/2+410, windowHeight/2-60, 280, 100);
  rect(windowWidth/2+410, windowHeight/2+60, 280, 100);

  textAlign(CENTER);
  fill("white");
  text("PLAY", windowWidth/2+550, windowHeight/2-125);
  //middle button text
  text("REFERENCES", windowWidth/2+550, windowHeight/2+115);
}

function introduction(){
  background(27, 62, 47);
  fill(12, 28, 21);
  rect(25, windowHeight-200, windowWidth-50, 100);
  fill(78, 123, 104);
  textSize(40);
  textFont(font);
  textAlign(LEFT, TOP);
  text(introWords[n-1], 50, windowHeight-175);
}

function birthPlace(){
  if (gameState === "chooseProvince"){
    image(bcButton, windowWidth/2-850, windowHeight/2-250);
    image(prairieButton, windowWidth/2-400, windowHeight/2-250);
    image(ontqueButton, windowWidth/2+50, windowHeight/2-250);
    image(maritimeButton, windowWidth/2+500, windowHeight/2-250);
  }
}

function provinceIntro(){
  clear();
  background(41, 96, 72);
  borders();
  fill(12, 28, 21);
  rect(25, windowHeight-200, windowWidth-50, 100);
  fill(78, 123, 104);
  if (gameState === "BC"){
    image(bcButton, windowWidth/2-850, windowHeight/2-250);
    text("That's right, you live in British Columbia.", 50, windowHeight-175);
  }
  if (gameState === "prairies"){
    image(prairieButton, windowWidth/2-400, windowHeight/2-250);
    text("That's right, you live in the Prairies.", 50, windowHeight-175);
  }
  if (gameState === "ontarioquebec"){
    image(ontqueButton, windowWidth/2+50, windowHeight/2-250);
    text("That's right, you live in Ontario/Quebec.", 50, windowHeight-175);
  }
  if (gameState === "maritimes"){
    image(maritimeButton, windowWidth/2+500, windowHeight/2-250);
    text("That's right, you live in the Maritimes.", 50, windowHeight-175);
  }
}