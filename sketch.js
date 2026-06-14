// Sadie Kuzyk
// History 30 Project
// Start date = April 23rd, 2026

//windowWidth 1365
//windowHeight 957

const windowHeight = 957;
const windowWidth = 1920;
const BORDER_HEIGHT = 75;
let gameState = "title";
let wordState = "";
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
let yearWords = ["1931. This year's winter was dry. Once the spring came, the droughts", "were unbearable. An abundance of dust storms ruined our land. The",  "summer was hot and dry with no rain. Our crops couldn't stand it. In", "addition to that, our lovely neighbours are moving away. I read in the", "papers that more and more folk are moving out of the prairies.", "1932. We had the worst infestation of grasshoppers I've ever seen! My", "papa told me that this is the worst grasshopper plague he's seen in", "over 50 years. Our wheat is selling for extremely low, only 26¢ per", "bushel.", "1933 to 1935. Times are getting harder. The winters have been", "unbelieveably severe. The summers have been extremely dry and", "we've had lots of droughts. It's been destroying our crops and our land. ", "1936. The weather here is still terribly awful, but I heard it's even", "worse in other provinces. Edmonton reached -45°C and froze cattle to", "death, and the summer in Winnipeg reached 42°C and wilted farmers'", "grain fields.", "1937. The papers said this has been the worst year in what they call", "the 'Palliser Triangle', which is where we are located in. We've had", "snowless winters with dangerously freezing temperatures. The spring", "and summer had no rain, which caused lots of dust storms, and", "Regina's prolonged heat reached 43°C! I heard on the radio that at", "least two-thirds of the farming population in Saskatchewan is", "destitute. I'm glad we are still doing just swell here.", "1938. The year started out decently well after the winter, we had", "good spring weather! But then the summer came and the hail didn't", "stop and neither did the 'grasshopper blizzards'. Once again our crops", "were destroyed.", "1939. I think the weather has finally subsided. I don't want to be too", "optimistic, but there were no major disasters this year! My sweet baby", "boy cried when he first saw rain, it startled him so."];
let transitionWords = ["Well, isn't that terrible.", "The Great Depression impacted Saskatchewan farmers and their income.", "Let's read what someone had to say about the Great Depression..."];
let journalWords = [];
let bennettWords = [];

function preload(){
  font = loadFont("OldNewspaperTypes.ttf");

  prairieButton = loadImage("prairies.png");
  bcButton = loadImage("bc.png");
  ontqueButton = loadImage("ontarioquebec.png");
  maritimeButton = loadImage("maritimes.png");
  titleCard = createImg("title-ezgif.com-resize.gif");
  playImage = loadImage("PLAY.png");
  journalimg = loadImage("Untitled design.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gameState = "title";
  background(27, 62, 47);
}

function draw() {
  console.log(gameState);
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
  if (gameState === "1931"){
    prairieYearWords();
  }
  else if (gameState === "1932"){
    prairieYearWords();
  }
  else if (gameState === "1933to1935"){
    prairieYearWords();
  }
  else if (gameState === "1936"){
    prairieYearWords();
  }
  else if (gameState === "1937"){
    prairieYearWords();
  }
  else if (gameState === "1938"){
    prairieYearWords();
  }
  else if (gameState === "1939"){
    prairieYearWords();
  }
  if (gameState === "dialogue"){
    journal();
  }
  if (gameState === "dialogue" && mouseIsPressed === true){
    showJournal();
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
    gameState = "1930";
    noStroke();
    fill(41, 96, 72);
    rect(250, 125, windowWidth-500, windowHeight-250);
    fill("white");
    text("1930. This year's winter was terrible. Horrendous blizzards and bitter", 300, windowHeight-250);
    text("coldness that reached -34°C.", 300, windowHeight-200);
    rect(1595, windowHeight/2-75, 150, 150);
  }
  if (mouseX < 1745 && mouseX > 1595 && mouseY < windowHeight/2+75 && mouseY > windowHeight/2-75 && gameState === "1930"){
    clear();
    background(27, 62, 47);
    fill(12, 28, 21);
    borders();
    fill("white");
    gameState = "1931";
  }
  else if (mouseX < 1745 && mouseX > 1595 && mouseY < windowHeight/2+75 && mouseY > windowHeight/2-75 && gameState === "1931"){
    clear();
    background(27, 62, 47);
    fill(12, 28, 21);
    borders();
    fill("white");
    gameState = "1932";
  }
  else if (mouseX < 1745 && mouseX > 1595 && mouseY < windowHeight/2+75 && mouseY > windowHeight/2-75 && gameState === "1932"){
    clear();
    background(27, 62, 47);
    fill(12, 28, 21);
    borders();
    fill("white");
    gameState = "1933to1935";
  }
  else if (mouseX < 1745 && mouseX > 1595 && mouseY < windowHeight/2+75 && mouseY > windowHeight/2-75 && gameState === "1933to1935"){
    clear();
    background(27, 62, 47);
    fill(12, 28, 21);
    borders();
    fill("white");
    gameState = "1936";
  }
  else if (mouseX < 1745 && mouseX > 1595 && mouseY < windowHeight/2+75 && mouseY > windowHeight/2-75 && gameState === "1936"){
    clear();
    background(27, 62, 47);
    fill(12, 28, 21);
    borders();
    fill("white");
    gameState = "1937";
  }
  else if (mouseX < 1745 && mouseX > 1595 && mouseY < windowHeight/2+75 && mouseY > windowHeight/2-75 && gameState === "1937"){
    clear();
    background(27, 62, 47);
    fill(12, 28, 21);
    borders();
    fill("white");
    gameState = "1938";
  }
  else if (mouseX < 1745 && mouseX > 1595 && mouseY < windowHeight/2+75 && mouseY > windowHeight/2-75 && gameState === "1938"){
    clear();
    background(27, 62, 47);
    fill(12, 28, 21);
    borders();
    fill("white");
    gameState = "1939";
  }
  else if (mouseX < 1745 && mouseX > 1595 && mouseY < windowHeight/2+75 && mouseY > windowHeight/2-75 && gameState === "1939"){
    gameState = "dialogue";
    clear();
    background(27, 62, 47);
    fill(12, 28, 21);
    borders();
    journal();
  }
  if (gameState === "dialogue" && mouseIsPressed === true){
    showJournal();
  }
  if (gameState === "showjournal"){

  }
}

function buttons(){
  titleCard.position(100, 100);
  image(playImage, windowWidth/2+400, windowHeight/2-200);
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

function prairieYearWords(){
  noStroke();
  fill(41, 96, 72);
  rect(250, 125, windowWidth-500, windowHeight-250);
  fill("white");
  rect(1595, windowHeight/2-75, 150, 150);
  
  if (gameState === "1931"){
    noStroke();
    fill(41, 96, 72);
    rect(250, 125, windowWidth-500, windowHeight-250);
    fill("white");
    rect(1595, windowHeight/2-75, 150, 150);
    text(yearWords[0], 300, windowHeight-400);
    text(yearWords[1], 300, windowHeight-350);
    text(yearWords[2], 300, windowHeight-300);
    text(yearWords[3], 300, windowHeight-250);
    text(yearWords[4], 300, windowHeight-200);
  }

  else if (gameState === "1932"){
    noStroke();
    fill(41, 96, 72);
    rect(250, 125, windowWidth-500, windowHeight-250);
    fill("white");
    rect(1595, windowHeight/2-75, 150, 150);
    text(yearWords[5], 300, windowHeight-350);
    text(yearWords[6], 300, windowHeight-300);
    text(yearWords[7], 300, windowHeight-250);
    text(yearWords[8], 300, windowHeight-200);
  }

  else if (gameState === "1933to1935"){
    noStroke();
    fill(41, 96, 72);
    rect(250, 125, windowWidth-500, windowHeight-250);
    fill("white");
    rect(1595, windowHeight/2-75, 150, 150);
    text(yearWords[9], 300, windowHeight-300);
    text(yearWords[10], 300, windowHeight-250);
    text(yearWords[11], 300, windowHeight-200);
  }

  else if (gameState === "1936"){
    noStroke();
    fill(41, 96, 72);
    rect(250, 125, windowWidth-500, windowHeight-250);
    fill("white");
    rect(1595, windowHeight/2-75, 150, 150);
    text(yearWords[12], 300, windowHeight-350);
    text(yearWords[13], 300, windowHeight-300);
    text(yearWords[14], 300, windowHeight-250);
    text(yearWords[15], 300, windowHeight-200);
  }

  else if (gameState === "1937"){
    noStroke();
    fill(41, 96, 72);
    rect(250, 125, windowWidth-500, windowHeight-250);
    fill("white");
    rect(1595, windowHeight/2-75, 150, 150);
    text(yearWords[16], 300, windowHeight-500);
    text(yearWords[17], 300, windowHeight-450);
    text(yearWords[18], 300, windowHeight-400);
    text(yearWords[19], 300, windowHeight-350);
    text(yearWords[20], 300, windowHeight-300);
    text(yearWords[21], 300, windowHeight-250);
    text(yearWords[22], 300, windowHeight-200);
  }
  
  else if (gameState === "1938"){
    noStroke();
    fill(41, 96, 72);
    rect(250, 125, windowWidth-500, windowHeight-250);
    fill("white");
    rect(1595, windowHeight/2-75, 150, 150);
    text(yearWords[23], 300, windowHeight-350);
    text(yearWords[24], 300, windowHeight-300);
    text(yearWords[25], 300, windowHeight-250);
    text(yearWords[26], 300, windowHeight-200);
  }

  else if (gameState === "1939"){
    noStroke();
    fill(41, 96, 72);
    rect(250, 125, windowWidth-500, windowHeight-250);
    fill("white");
    rect(1595, windowHeight/2-75, 150, 150);
    text(yearWords[27], 300, windowHeight-300);
    text(yearWords[28], 300, windowHeight-250);
    text(yearWords[29], 300, windowHeight-200);
  }
}

function journal(){
  if (gameState === "dialogue"){
    noStroke();
    fill(41, 96, 72);
    rect(25, windowHeight-200, windowWidth-50, 100);
    fill("white");
    text("What a decade. Let's see some quick facts about it.", 50, windowHeight-175);
  }
}

function showJournal(){
  clear();
  background(27, 62, 47);
  fill(12, 28, 21);
  borders();
  gameState = "showjournal";
  imageMode(CENTER);
  image(journalimg, windowWidth/2, windowHeight/2);
}

function bennettStuff(){
  clear();
  background(27, 62, 47);
  fill(12, 28, 21);
  borders();
  gameState = "bennett";

}