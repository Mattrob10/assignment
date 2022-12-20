
//  Use the REST to help this function return an array of animals, no matter how many animals are passed to it:
function collectAnimals(...animals) {
  return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "tiger", "hippo", "deer", "bear"));
//---------------------------------------------------------------------------

// Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

function combineFruit(fruit, sweets, vegetables){
  return {
    fruit: fruit,
    sweets: sweets,
    vegetables: vegetables
  }
}
console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]));
// combineFruit(["apple", "pear"],
//            ["cake", "pie"],
//            ["carrot"])
// //=> {
//       fruit: ["apple", "pear"],
//       sweets: ["cake", "pie"],
//       vegetables: ["carrot"]
//    }
//--------------------------------------------------------------------------------

// Use destructuring to use the property names as variables. Destructure the object in the parameter:

// function parseSentence(_________){
//   return `We're going to have a good time in ${location} for ${duration}`
// }

// parseSentence({
//   location: "Burly Idaho",
//   duration: "2 weeks"
// });

const vacation = {
  location: "Burly Idaho",
  duration: "2 weeks"
};

function parseSentence({ location, duration }){
    return `We're going to have a good time in ${location} for ${duration}` 
}
console.log(parseSentence(vacation));
//--------------------------------------------------------------------------------

// Use array destructuring to make this code ES6:
function returnFirst(items){
  const [firstItem] = items;
  // const firstItem = items[0]; /*change this line to be es6*/
  return firstItem
}
console.log(returnFirst(['x', 'y', 'z']))//x => [0] 
//--------------------------------------------------------------------------------

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}!`;
}
console.log(returnFavorites(favoriteActivities));//My top three favorite activities are, magnets, snowboarding, and philanthropy!
//----------------------------------------------------------------------------------

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

// function combineAnimals() {

// }
// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const combineAnimals = [ ...realAnimals, ...magicalAnimals, ...mysteriousAnimals];
console.log(combineAnimals);// ["dog", "cat", "mouse", "jackolope", "platypus"]
//----------------------------------------------------------------------------------
///ATTENTION I CAN'T FIGURE THIS ONE OUT!!!!!!!!!!!!!!!!!
// Try to make the following function more ES6y:

// function product(a, b, c, d, e) {
//   var numbers = [a,b,c,d,e];

//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }

//-----------------------------------------------------------------------------------

// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }


function unshift(array, ...letters) {
  return [...letters, ...array];
}
console.log(unshift([1, 2, 3,], 'a', 'b', 'c'));//[ 'a', 'b', 'c', 1, 2, 3]

//-----------------------------------------------------------------------------------

// Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

function populatePeople(names){
    return names.map((name) =>{
      let [firstName, lastName] = name.split(" ");
  // return names.map(function(name){
  //     name = name.split(" ");
  //     // your code
      return {
          firstName: firstName,
          lastName: lastName
      }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]