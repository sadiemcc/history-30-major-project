// Sadie Kuzyk
// History 30 Project
// Start date = April 23rd, 2026

const BORDER_HEIGHT = 75
let gameState = "title";

function setup() {
  createCanvas(windowWidth, windowHeight);
  gameState = "title";
  background(41, 96, 72);
}

function draw() {
  fill(6, 14, 11);
  rect(0, 0, windowWidth, BORDER_HEIGHT);
  rect(0, windowHeight-BORDER_HEIGHT, windowWidth, BORDER_HEIGHT);
  if (gameState === "title"){
    buttons();
  }
}

function mouseClicked(){
  if (mouseX < windowWidth/2+690 && mouseX > windowWidth/2+410 && mouseY < windowHeight/2-80 && mouseY > windowHeight/2-180 && gameState === "title"){
    gameState = "intro";
    clear();
    introduction();
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
}

function introduction(){
  background(41, 96, 72);
  fill(12, 28, 21);
  rect(25, windowHeight-200, windowWidth-50, 100);
  // text color (78, 123, 104)
}