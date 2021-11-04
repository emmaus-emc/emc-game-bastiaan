/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var vijandX = 600;
var vijandY = 400;

var HP = 100;
var punten= 0;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
  vijandY = vijandY + 3
  if (vijandY > 730) {
    vijandY = 0;
  }
  // kogel

  // speler
  if (keyIsDown(40)) {
    spelerY += 7;
  }
  if (keyIsDown(38)) {
    spelerY -= 7;
  }
  if (keyIsDown(37)) {
    spelerX -= 7;
  }
  if (keyIsDown(39)) {
    spelerX += 7;
  }
  if (spelerY < 10) {
    spelerY = 10;
  }
  if (spelerX < 0) {
    spelerX = 0;
  }
  if (spelerY > 690) {
    spelerY = 690;
  }
  if (spelerX > 1260) {
    spelerX = 1260;
  }
}
/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  if (vijandX - spelerX < 50 && vijandX - spelerX > -50 && vijandY - spelerY < 50 && vijandY - spelerY > -50) {
    console.log("botsing")
    if (HP > 0) {
      HP = HP - 1;
    }
    // botsing kogel tegen vijand
  }
};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  clear();
  background(51);
  // border: 10px; solid (blue);
  // vijand
  fill("blue");
  ellipse(vijandX, vijandY, 40, 40);
  // kogel

  // speler
  fill("white");
  rect(spelerX, spelerY, 15, 25);
  fill("yellow");
  ellipse(spelerX + 7, spelerY - 5, 10, 10);
  fill("black")
  rect(spelerX + 9, spelerY + 15, 6, 12)
  fill("black")
  rect(spelerX, spelerY + 15, 7, 12)
  // punten en health

  fill("white")
  rect(1100, 30, 150, 50)
  fill("black")
  textSize(50);
  text(HP, 1150, 70);

fill("grey")
rect(1100, 80, 150,50)
fill("black")
textSize(50)
text(punten, 1150, 120)
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
