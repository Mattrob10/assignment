const express = require("express");
const { Query } = require("mongoose");
const { rawListeners } = require("../models/bounty.js");
const bountiesRouter = express.Router();
const Bounty = require('../models/bounty.js')


// Get All
bountiesRouter.get("/", async (req, res, next) => {
  try {
    const bounties = await Bounty.find()
    return res.status(200).send(bounties)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

//Get One Bounty
bountiesRouter.get("/:bountyId", (req, res, next) => {
  Bounty.findById(req.params.bountyId)
    .then(bounty => {
      if (!bounty) {
        return res.status(404).send("Bounty not found")
      }
      return res.status(200).send(bounty)
    })
    .catch(err => {
      res.status(500)
      return next(err)
    })
})


// POST BOUNTY
bountiesRouter.post("/", (req, res, next) => {
  const newBounty = new Bounty(req.body)
  newBounty.save()
    .then(savedBounty => {
      return res.status(201).send(savedBounty)
    })
    .catch(err => {
      res.status(500)
      return next(err)
    })
})

// GET BY TYPE
bountiesRouter.get('/search/Type',async (req, res, next) => {
  const query = Bounty.find({Type: {$gte:req.query.Type}})
  var filter = query.getFilter()
    try{
      const result = await Bounty.find(filter)
      return res.send(result)
    } catch (err) {
      res.status(500)
      return next(err)
    }

 
  // try {
  //   const bounties = await Bounty.find({Type: req.query.Type})
  //   return res.status(200).send(bounties)
  // } catch (err) {
  //   res.status(500)
  //   return next(err)
  // }
})
bountiesRouter.get('/search/firstName',async (req, res, next) => {
  const query = Bounty.find({firstName: {$gte:req.query.firstName}})
  var filter = query.getFilter()
    try{
      const result = await Bounty.find(filter)
      return res.send(result)
    } catch (err) {
      res.status(500)
      return next(err)
    }


 
  // try {
  //   const bounties = await Bounty.find({Type: req.query.Type})
  //   return res.status(200).send(bounties)
  // } catch (err) {
  //   res.status(500)
  //   return next(err)
  // }
})
bountiesRouter.get('/search/BountyAmount',async (req, res, next) => {
  const query = Bounty.find({BountyAmount: {$gte:req.query.BountyAmount}})
  var filter = query.getFilter()
    try{
      const result = await Bounty.find(filter)
      return res.send(result)
    } catch (err) {
      res.status(500)
      return next(err)
    }
})
bountiesRouter.get('/search/living',async (req, res, next) => {
  const query = Bounty.find({living: {$gte:req.query.living}})
  var filter = query.getFilter()
    try{
      const result = await Bounty.find(filter)
      return res.send(result)
    } catch (err) {
      res.status(500)
      return next(err)
    }
})

// DELETE BOUNTY
bountiesRouter.delete("/:bountyId", (req, res, next) => {
  Bounty.findOneAndDelete({_id: req.params.bountyId})
    .then((deletedItem) => {
      if (!deletedItem) {
        return res.status(404).send(`Bounty with ID ${req.params.bountyId} not found`);
      }
      return res.status(200).send(`Successfully deleted ${deletedItem.firstName} from the database`);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});



// PUT(UPDATE) BOUNTY
bountiesRouter.put("/:bountyId", (req, res, next) => {
  Bounty.findOneAndUpdate(
    {_id: req.params.bountyId},
    req.body,
    {new: true}
  )
    .then((updatedBounty) => {
      if (!updatedBounty) {
        return res.status(404).send(`Bounty with ID ${req.params.bountyId} not found`);
      }
      return res.status(201).send(updatedBounty);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});




module.exports = bountiesRouter;