var readlineSync = require("readline-sync");


//HIKER CONSTRUCTOR
class Player{
  constructor(player, HP, AP){
    this.player = player;
    this.HP = HP
    this.AP = AP;
    this.inventory = [];
    this.enemyKilled = 0;
  }
  isAlive(){
    return this.HP > 0;
  }
  reduceHP(damage){
    this.HP -= damage;
    if(this.HP < 0){
      this.HP = 0;
    }
  }
}


// Set User 
console.log("WELCOME TO COPPERTOP ⛰️ MOUNTAIN 👾 GAME 👾");

var playerName = readlineSync.question("What is your name? ");
console.log("Welcome " + playerName + " to Coppertop Mountain ⛰️  where you walk an unexplored trail 🗺️  on the backside of the ⛰  mountain!");


const newPlayer = new Player(playerName, 200, 50);
// console.log(newPlayer.isAlive());
////INVENTORY
class Inventory{
  constructor(item, HP){
    this.item = item;
    this.HP = HP;
  }
}
const healthKit = new Inventory("health kit", 30)


//pushes HK into invenetory
function findItem(healthKit){
  newPlayer.inventory.push(healthKit);
}
function showInventory(){
  console.log(newPlayer);
}


//inventory
function useItem(){
    if(newPlayer.inventory.length == 0){
      console.log("NOTHING HERE");
    } else {
      newPlayer.HP += 30;
      console.log("added 30HP");

      newPlayer.inventory.shift()
    }
}
class Enemies{
  constructor(enemy, HP, AP){
    this.enemy = enemy;
    this.HP = HP;
    this.AP = AP;
  }
  isAlive(){
    return this.HP > 0;
  }
  reduceHP(damage){
   this.HP -= damage;
    if(this.HP < 0){
       this.HP = 0;
    }
  }
}
let bear = new Enemies("Bear 🐻", 75, 25)
let wolves = new Enemies(" 🐺 PACK OF WOLVES 🐾 ", 50, 20)
let yeti = new Enemies("👣 YETI 🧌", 80, 30)
let enemies = [bear, wolves, yeti];



function walk(){
  const odds = Math.random();
  if(odds > 0.5){
    console.log("💭 This trail probably wasn't the best, but I'm going to keep exploring!  Let's continue hiking 🥾..."); 
  } else {
    enemyEncounter();
  } 
}

function enemyEncounter() {
  if (enemies.length == 0) {
    console.log(
      "You did it! You eliminated all the wild animals....killing a total of " +
        +
        newPlayer.enemyKilled
        +
        " Enemies killed."
    );
    let end = readlineSync.keyIn("[q] for quit", { limit: "q" });
    if (end === "q") {
      console.log("QUIT GAME")
      process.exit();
    }
  } else {
    let newEncounter = enemies[Math.floor(Math.random() * enemies.length)];
    console.log("Heads ⚠️ up!  There's a " + newEncounter.enemy + "!" );
    console.log(newEncounter);
    fight(newEncounter);
  }
} 

function fight(newEncounter) {
  while (newPlayer.isAlive() && newEncounter.isAlive()) {
    const fightOptions = readlineSync.keyIn(
      "[r]Run 🏃‍♂️ Away\n[f]🤺Attack\n[u]🩹HealthKit\n[q]🔚Quit the game",
      { limit: "rfuq" }
    );

    const chanceOfEscape = Math.random();
    if (fightOptions === "r") {
      if (chanceOfEscape > 0.5) {
        console.log(
          "The animal trapped you! Use an item ⚕️ if available!!!!."
        );
        enemyAttack(newEncounter);
        // playerAttack(newEncounter);
        return;
      } else {
        enemyAttack(newEncounter);
      }
    } else if (fightOptions === "f") {
      playerAttack(newEncounter);
      enemyAttack(newEncounter);
    } else if (fightOptions === "u") {
      useItem();
    } else if (fightOptions === "q") {
      console.log(
        "Nobody likes quiter, I amlost quit trying to make this RPG!   😂"
      );
      //node to quit
      process.exit;
    }
  }
  if (newPlayer.HP == 0) {
    console.log(
      playerName +
        " you died to " +
        newEncounter.enemy +
        ".... maybe next time!"
    );
  } else if (newEncounter.HP == 0) {
    enemyKilled(newEncounter);
    console.log(newEncounter.enemy + " has been eliminated. You gain 30HP");
    findItem(healthKit);
    console.log(
      "Great Fight 🤺 " + newEncounter.enemy + " dies and drops an item for you, its another HealthKit: 30HP" + healthKit.item);
  }
}
//ATTACKING
function enemyAttack(newEncounter) {
  newPlayer.reduceHP(Math.floor(Math.random() * newEncounter.AP));
  console.log(
    "You're Taking Damage " +
      newEncounter.enemy +
      " HP remaining: " +
      newPlayer.HP
  );
}
function playerAttack(newEncounter) {
  newEncounter.reduceHP(Math.floor(Math.random() * newPlayer.AP));
  console.log(
    "🤺 Fighting!" +
      newEncounter.enemy +
      "Your HP remaining: " +
      newEncounter.HP
  );
}
///REWARD DUE ENEMY DEATH
function enemyKilled(newEncounter){
  let encounterSP = enemies.indexOf(newEncounter);
  enemies.splice(encounterSP,1);
  newPlayer.HP += 25;
  newPlayer.enemyKilled++;
}

while (newPlayer.isAlive()) {
  const commands = readlineSync.keyIn(
    "[w]Walk\n[i]Inventory\n[u]Use Item\n[q]Quit Game\n",
    { limit: "wiuq" }
  );
  if (commands == "w") {
    walk();
  
  } else if (commands == "i") {
    showInventory();
  } else if (commands == "u") {
    useItem(healthKit);
  } else if (commands == "q") {
    if (enemies.length > 0) {
      console.log("You quit without defeating all the enemies, maybe next time we'll actually play the GAME 👾");
      process.exit;
      break;
    }
  } else {
    console.log("You Made It Back ALIVE!!");
    process.exit;
    break;
  }
}







