const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

//Connect to DB
mongoose.connect("mongodb+srv://mattrob101:finn1212@cluster0.msb08b3.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connection to database!");
  })
  .catch(dbErr => {
    console.log("Connection to database failed:", dbErr.message);
  });
  
//MIDDLEWARE
app.use(express.json())//Looks for a request body, and turns it into 'req.body'
app.use(morgan('dev'))// Logs requests to the console.

//ROUTES
app.use("/bounties", require("./routes/bountiesRouter.js"))

// app.use((err, req, res, next) => {
//   console.log(err)
//   return res.send({errMsg: err.message})
// })

// ERROR HANDLER
app.use((err, req, res, next) => {
  console.log(err)
  res.send({errMsg: err.message})
})


//SERVER LISTEN
app.listen(5506, () => {
  console.log("Server is running on Port 5506")
})

// # STATUS CODE

    // #200 - Successful request
    // #201 - Succesful Insert(put) / Successful (post)update
    // #401 - Unauthorized
    // #404 - Not Found
    // #500 - Server Error


// # Introduction to Mongoose
// npm install mongoose
// # Purpose
  // * Create models
  // * Query data

// # Connect

// # Mongoose Schemas
  // * Blueprints for our data

// # Mongoose Models
  // * Models have a Name, and a Blueprint (Schema)
  // * Models are used to perform the CRUD operations on data created with the Model
  