const readlineSynce = require("readline-sync");

// 2. Console must ask for the player's name and store it
const name = readlineSynce.question("What is your name? ");

// 1. Console must greet player with a fun message
const answer1 = readlineSynce.question(`Welcome ${name} to Copper Top Mountains'  👾 GAME 👾  Press Enter to begin your hike!`);

//HIKER COMMANDS
const option1 = ["Walk", "Exit"];


//HIKER CONSTRUCTOR
function player(classType, health, attacking){
  this.classType = classType;
  this.health = health;
  this.attacking = attacking; 
 
}

// Set User 
let user = new player("Hiker", 100, 50)

// user inventory
let inventory = [];
function Inventory(item, rewardPoints){
  this.item = item;
  this.rewardPoints = rewardPoints;
}
let water = new Inventory("Water", 20)
let food = new Inventory("Food", 30)
let healthKit = new Inventory("health kit", 50)
inventory.push(water, food, healthKit);

//ENEMIES CONTSTRUCTOR
let enemies = [];
function Enemies(name, health){
    this.name = name;
    this.health = health;
}
let bear = new Enemies("Bear 🐻", 75)
let wolves = new Enemies(" 🐺 PACK OF WOLVES 🐾 ", 50)
let yeti = new Enemies("👣 YETI 🧌", 100)
enemies.push(bear, wolves, yeti);

let hp = 100

function walk() {
  const options = ["WALK", "User Info"];
  const userOption = readlineSynce.keyInSelect(options, "Choose one of the following options:");
 if (userOption === 0){
    console.log("Let us continue the trail...");
    // The enemy is random (can be chosen out of a minimum of 3 different enemy names)
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    const playerInventory = inventory[Math.random() + inventory.length];
    // console.log(enemy);
   
    
 if (userOption <= 0.4){
      console.log("Oh No!  There's a " + enemy.name + " and they have spotted you!");
      decision(enemy);
    }
 } else if (userOption === 1){
  // const item = inventory[Math.floor(Math.random() * inventory.length)]
  
  console.log(name + "\'s " + 'Health: ' + user.health);
 } else if (userOption === -1){
    hp = 0;
    console.log(name + " EXITED the Game!");
   
  
 }
}
// The user can decide to attack or run
 function decision(boss){
  const option2 = ["🏃RUN!", "🤺FIGHT!"];
  const enemy = enemies[Math.floor(Math.random() * enemies.length)];
  const userAttack = readlineSynce.keyInSelect(option2, "What will you do? ");
if (userAttack === 0){
  user.health -= 20;
  console.log("You ran away, but were attacked in the process!");
  console.log("Your new health is: " + user.health); 
} else if (userAttack === 1){
  console.log("FIGHTING the " + enemy.name);
  return;
}1
  //  if (chance >= .5){
  //    user.health -=  20;
  //    console.log("YOU'VE ran away, but were hurt in the process!");
  //    console.log("Your new health is: " + user.health);
  //    return;
  // } else if (chance <= .6){
  //    console.log("fighting")
  //   // }
  
function fight(boss){
  while (user.health > 0){
    // var userHP = user.attacking;
    // var enemyHP = Enemies.attacking;
    // console.log(userHP);
    // console.log(enemyHP);
    // break;
  }

}




    }
  
//   const option3 = ["YES", "No Thank You!"];
//  function replayGame(){
//      const replayGame = readlineSynce.keyInSelect(option3);
//      if(replayGame === true){
//        hp = 100;
//      } else {
//        console.log(`thank you!`);
//    }






// ### **Project Requirements:**
// - Every time the player walks, a random algorithm will be run that determines if a wild      enemy has appeared (A 1/3 or 1/4 chance of being attacked)
// - Use a while loop to control this flow.
// 1. If a wild enemy appears:
// - 
// - 
// - If attacking, a random amount of damage will be dealt between a min and max
// - If running, there will be a 50% chance of escaping
// - After the player attacks or runs the enemy attacks back for a random damage amount
// - The player and enemy will attack each other in a loop until one of them passes out or dies.
// - If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking.
// - If the enemy kills the player the console prints a cool death message and the game ends
// 1. Inventory
// - When the player kills enemies, they are awarded with items
// - If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory

// function randomDmg(max, min) {
//   const attackDamage = Math.floor(Math.random() * (max - min) + min);
//   return attackDamage;
// }
//userRestore();

// function randomDmg(max, min) {
//   const attackDamage = Math.floor(Math.random() * (max - min) + min);
//   return attackDamage;
// }

while (hp > 0){
 walk();
}

