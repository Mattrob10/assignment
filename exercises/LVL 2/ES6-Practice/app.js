


// Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and insert `let` and `const`

// John is the pet owner, and his name should be stored differently than the other names.

const name = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])
console.log("REPLACED ALL `VAR`")
//-------------------------------------------------------------------------------

// Task 1
// Re-write this `.map()` using an arrow function:
// Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    newVeg =  arr.map((carrot) => {
        return { type: "carrot", name: carrot };
    });
}


// Task 2
// Re-write this `.filter()` ’s callback function using an arrow function:
const people = [
  {
      name: "Princess Peach",
      friendly: false
  },
  {
      name: "Luigi",
      friendly: true
  },
  {
      name: "Mario",
      friendly: true
  },
  {
      name: "Bowser",
      friendly: false
  }
]

function filterForFriendly(arr) {
  return arr.filter((person) => person.friendly);
}
//test
console.log(filterForFriendly(people));
//-----------------------------------------------------------------

// Task 3
// Re-write the following functions to be arrow functions:

// function doMathSum(a, b) {
//     return a + b
// }
var doMathSum = (a, b) => a + b;
console.log(doMathSum(5, 10));
// var produceProduct = function(a, b) {
//     return a * b
// }
var produceProduct = (a, b) => a * b;
console.log(produceProduct(5,5));
//----------------------------------------------------------

// Task 4
// Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?

var guest = {
    firstName: "Kat",
    lastName: "Stark",
    ageNum: 40
  };
  
  let printSring = (guest) => console.log(`Hi ${guest.firstName} ${guest.lastName}, how does it feel to be ${guest.ageNum}?`)
  
  printSring(guest)

// Practice
// const defaultColors = ['red', 'green'];
// const userFavoriteColors = ['orange', 'yellow'];
// // using concat() 👇
// // const  newArr = defaultColors.concat(userFavoriteColors);


// // using the Spread Operator 👇
// const newColors = [ ...defaultColors, ...userFavoriteColors ];
// console.log(newColors)

// const addedColors = ["mocha", "brown"];

// const addNewArr =[ ...defaultColors, ...userFavoriteColors, ...addedColors ];
// console.log(addNewArr) 

// const addedNewValue = [ "blue", "purple", ...defaultColors, ...userFavoriteColors, ...addedColors ];
// console.log(addedNewValue);