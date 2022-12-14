// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(x, y){
    if(typeof x === 'number' && typeof y === 'number'){
  return x + y;
 } else throw new Error('Your current entered Value must equal to a #');
}

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.
try{
  sum('5', '10')
} catch(err){
  console.log(err)// Error: Your current entered Value must equal to a #
                  // at sum (app.js:6:15)
                  // at app.js:11:3
}

//-----------------------------------------------------------------------------------------------

// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};
function login(username, password){
  if(username ==="sam" && password ==="123abc"){
    return console.log('login successful')
  } else throw new Error(" ☃ You did NOT meet the criteria for login credentials! ")
}

// 2b) Call the `login` function within a `try` block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!
try{
  login('sam', '123abc')
  } catch(err){
    console.log(err) // => login successful at app.js:25
  }
