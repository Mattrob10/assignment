// using a For Loop
// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i <= numbers.length; i++){
//   console.log(numbers[i]);///0-9
// }

// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];{
//   for (var i = 0; i <= numbers.length; i++){
//     console.log(numbers[i]);
//   }
// .    OR
for(i = 0; i <= 9; i++) {
  console.log("did it!", i);
}

for(i = 9; i >=0; i--){
  console.log("Counting backwards!", i);
}

// Basic ARRAY
//const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
//numbers.reverse();//logs array in reverse
//numbers.push(10);//adds a new property to the END of ARRAY [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(numbers);//  array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//console.log(numbers.length);// how many item in current array = 10 

const fruits = ["banana", "orange", "apple", "kiwi", "mango", "grape"]
for(i = 0; i <= fruits.length; i++){
  console.log(fruits[i]);//
}

// var fruit = ["banana", "orange", "apple", "kiwi"];
// fruit.unshift("strawberry");//adds to [0] index of array
// fruit.push("peach");//adds peach to end of array index
// fruit.sort();//sorts array A-Z
// console.log(fruit);


// every other fruit w/ For Loop
 var fruit = ["banana", "orange", "apple", "kiwi", "peach,", "strawberry", "mango", "watermelon", "blueberry"];
 for(i = 0; i <=fruit.length; i += 2){
   console.log("every other:", fruit[i]);
}



//Bronze For Loops 
// EVEN #'s 0-10
for (i = 0; i <= 10; i++){
  if (i % 2 === 0){
    console.log("every other EVEN", i);// 0,2,4,6,8,10
  }
}
// ODD #'s 1-9
for (i = 0; i <=10; i++){
  if (i % 2 === 1){
    console.log("every other ODD", i);// 1,3,5,7,9
  }
}
