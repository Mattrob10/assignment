const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Bounty Blueprint
const bountySchema = new Schema({
  firstName: {
    type: String, 
    required: true
  },
  lastName: String,
  living: {
    type: Boolean,
    required: true
  },
  BountyAmount: Number,
  Type:{
    type: String
  }
})
module.exports = mongoose.model("Bounty", bountySchema)