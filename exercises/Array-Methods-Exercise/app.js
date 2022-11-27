var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.
const removeLast = vegetables.pop();
console.log(removeLast);
console.log(vegetables);

// 2. Remove the first item from the fruit array.
const removeFirst = fruit.shift();
console.log(removeFirst);
console.log(fruit);

// 3. Find the index of "orange."
const indexOfArr = fruit.indexOf("orange");
console.log(indexOfArr);//1
console.log(fruit);

// 4. Add that number to the end of the fruit array.
const addLast = fruit.push(1);
console.log(addLast);//['apple', 'orange', 'watermelon', 1]
console.log(fruit);

// 5. Use the length property to find the length of the vegetable array.
const findLength = vegetables.length;
console.log(findLength);//3
console.log(vegetables);
// 6. Add that number to the end of the vegetable array.
const addToLast = vegetables.push(3);
console.log(addToLast);
console.log(vegetables);

// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
const fruits1 = ['apple', 'orange', 'watermelon', 1];
const vegetables1 = ['carrot', 'tomato', 'pepper', 3];
const food = fruits1.concat(vegetables1);
console.log(food);

// 8. Remove 2 elements from your new array starting at index 4 with one method.
const slipeTwo = food.splice(4, 2,);
console.log(slipeTwo);
console.log(food);

// 9. Reverse your array.
const reverseArr = food.reverse();
// console.log(reverseArr);
console.log(food);


// 10. Turn the array into a string and return it.
const newString = food.toString();
console.log(newString);//3,pepper,1,watermelon,orange,apple
console.log(food);