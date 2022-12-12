
//  #1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

console.log(officeItems.length)//10 is the length of the ^ Array


// #2
var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]
//defined an age for the movie
let minAge = 18;

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < minAge){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[0].name + " is not old enough to see Mad Max Fury Road, don't let HIM in.");
  } else {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[1].name + " is old enough. SHE'S good to see Mad Max Fury Road.");
    break;
}
}

