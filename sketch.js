// Sadie Kuzyk
// History 30 Project
// Start date = April 23rd, 2026

//windowWidth 1365
//windowHeight 957

const windowHeight = 957;
const windowWidth = 1920;
const BORDER_HEIGHT = 75
let gameState = "title";
let font;
let introWords = ["Today is October 29th, 1929.", "Today is the day that the Wall Street stock market will crash.", "Although you live in Canada, this fact still affects you greatly.", "Why?", "Well, because today is the start of the Great Depression.", "You're affected because you live in..."];
let n = 0;
let p = 0;
let b = 0;
let m = 0;
let o = 0;
let y = 0;
let titleCard;
let prairieButton;
let bcButton;
let maritimeButton;
let ontqueButton;
let provincesDone = [];
let prairieWords = ["That's right, you live in the Prairies. Saskatchewan, specifically.", "You're a wheat farmer.", "This year, your harvest has been plentyful!", "In 1928, the net farming income was $363 million dollars.", "Unfortunately, you're not going to be able to have a good harvest for the...", "...next 10 years.", "Let's see what happened each year..."];
let yearWords = ["This year, the winter has been terrible.", "1931", "1932", "1933 to 1935", "1936", "1937", "1938", "1939"];
// let bcWords = [];
// let maritimeWords = [];
// let ontqueWords = ["That's right, you live in Ontario.", "Quebec is a part of this catagory, but we'll focus on them later.", "You're a single man and you're unemployed.", "You're broke."];

function preload(){
  font = loadFont("OldNewspaperTypes.ttf");

  prairieButton = loadImage("prairies.png");
  bcButton = loadImage("bc.png");
  ontqueButton = loadImage("ontarioquebec.png");
  maritimeButton = loadImage("maritimes.png");
  titleCard = createImg("title-ezgif.com-resize.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gameState = "title";
  background(27, 62, 47);
  console.log(windowWidth);
  console.log(windowHeight);
}

function draw() {
  borders();
  if (gameState === "title"){
    buttons();
  }
  if (gameState === "intro"){
    titleCard.hide();
    introduction();
    borders();
  }
  if (gameState === "chooseProvince"){
    birthPlace();
  }
  if (gameState === "BC" || gameState === "maritimes"){
    provinceIntro();
  }
  if (gameState === "ontarioquebec"){
    ontarioQuebecIntro();
  }
  if (gameState === "prairies"){
    prairiesIntro();
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
  if (gameState === "prairies"){
    p += 1;
    if (p === prairieWords.length+1){
      gameState = "choose";
    }
  }
  if (gameState === "ontarioquebec"){
    o += 1;
    if (o === ontqueWords.length+1){
      gameState = "choose";
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

  if (mouseX < 500 && mouseX > 250 && mouseY < 425 && mouseY > 175 && gameState === "prairieInteract"){
    gameState = "1930"
    rect(250, 125, windowWidth-500, windowHeight-250);
    fill("white");
    rect(1595, windowHeight/2-75, 150, 150);
    text(yearWords[y], 300, windowHeight-200);
  }
  if (mouseX < 1745 && mouseX > 1595 && mouseY < windowHeight/2+75 && mouseY > windowHeight/2-75){
    yearWords.pop(0);
    y += 1;
    gameState = "1931";
    fill("white");
    rect(175, windowHeight/2-75, 150, 150);
    text(yearWords[y], 300, windowHeight-200);
  }
  //BACK BUTTON
  // if (mouseX < 325 && mouseX > 175 && mouseY < windowHeight/2+75 && mouseY > windowHeight/2-75 && gameState === "1931"){
  //   //
  // }
}

function buttons(){
  titleCard.position(100, 100);

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
  background(27, 62, 47);
  borders();
  fill(12, 28, 21);
  rect(25, windowHeight-200, windowWidth-50, 100);
  fill(78, 123, 104);
  if (gameState === "BC"){
    image(bcButton, windowWidth/2-850, windowHeight/2-250);
    text("That's right, you live in British Columbia.", 50, windowHeight-175);
    BCPath();
  }

  if (gameState === "ontarioquebec"){
    image(ontqueButton, windowWidth/2+50, windowHeight/2-250);
    text("That's right, you live in Ontario/Quebec.", 50, windowHeight-175);
    ontarioQuebecPath();
  }
  if (gameState === "maritimes"){
    image(maritimeButton, windowWidth/2+500, windowHeight/2-250);
    text("That's right, you live in the Maritimes.", 50, windowHeight-175);
    maritimesPath();
  }
}

function prairiesIntro(){
  if (provincesDone[0] !== "prairies" && provincesDone[1] !== "prairies" && provincesDone[2] !== "prairies"){
    provincesDone.push("prairies");
  }
  clear();
  background(27, 62, 47);
  fill(12, 28, 21);
  borders();
  if (p < prairieWords.length){
    rect(25, windowHeight-200, windowWidth-50, 100);
    fill(78, 123, 104);
    text(prairieWords[p], 50, windowHeight-175);
    image(prairieButton, windowWidth/2-400, windowHeight/2-250);
  }
  if (p === prairieWords.length){
    gameState = "prairieInteract";
    rect(250, 175, 250, 250);
    rect(640, 175, 250, 250);
    rect(1030, 175, 250, 250);
    rect(1420, 175, 250, 250);
    
    rect(250, 532, 250, 250);
    rect(640, 532, 250, 250);
    rect(1030, 532, 250, 250);
    rect(1420, 532, 250, 250);
  }
}

// function BCPath(){
//   if (provincesDone[0] !== "BC" && provincesDone[1] !== "BC" && provincesDone[2] !== "BC"){
//     provincesDone.push("BC");
//   }
// }

// function ontarioQuebecIntro(){
//   if (provincesDone[0] !== "ontarioquebec" && provincesDone[1] !== "ontarioquebec" && provincesDone[2] !== "ontarioquebec"){
//     provincesDone.push("ontarioquebec");
//   }
//   clear();
//   background(27, 62, 47);
//   fill(12, 28, 21);
//   borders();
//   if (o < ontqueWords.length){
//     rect(25, windowHeight-200, windowWidth-50, 100);
//     fill(78, 123, 104);
//     text(ontqueWords[o], 50, windowHeight-175);
//     image(ontqueButton, windowWidth/2+50, windowHeight/2-250);
//   }
// }

// function maritimesPath(){
//   if (provincesDone[0] !== "maritimes" && provincesDone[1] !== "maritimes" && provincesDone[2] !== "maritimes"){
//     provincesDone.push("maritimes");
//   }
// }