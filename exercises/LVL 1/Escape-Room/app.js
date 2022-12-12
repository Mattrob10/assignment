const readline = require("readline-sync");
const name = readline.question("What is your name? ");

// KEYS
door = false;
window = true;
alive = true;

const answer = readline.question(`Hurry ${name}, you have drove into a lake!  You only have one chance to make it out ALIVE before you run out of air to breath!  What will you do? 
a. Open the car door.
b. Break window.
c. Let car fill with water then escape car!`)


while(alive){
  if(answer == "a"){
    console.log("Too much water pressure, you cannot open the door! TRY AGAIN");
    alive = false;
   } else if (answer == "b"){
    const newAlive = readline.question('You have found a tool to help break the glass! a. Break the glass!  b.  Wait for water to fill the car?');
   
  if(newAlive == "a"){
    alive = false;
    console.log("The tool isn't working and you've used up all you air supply exerted yourself TRY AGAIN!");
  } else if (newAlive == "b"){
    alive = true;
    console.log(`Great Now Swim towards the light and SURVIVE!`);
    break;
  };

  } else if (answer == "c"){
    console.log (`Don't Panic, take one last breath of air!  Now calmy wait then open the door and swim towards the light!  GREAT JOB!`);
    alive = true;
    break;
  };
}
