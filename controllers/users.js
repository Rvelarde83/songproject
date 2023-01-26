const Users = require("../models/userSchema")

const index =  async(req, res)=>{
    try{
       
        res.json(await Users.find({}))
    }catch (error){a
        //send error
        res.status(400).json(error)
    }
    }

      //Delete
const del =  async(req, res)=>{
    try{
        res.json( await Users.findByIdAndDelete(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
  }

    
  //Users Update Route
 const update=  async(req,res) => {
    try {
        res.json( await Users.findByIdAndUpdate(req.params.id, req.body, {new: true })
        ) // new:true is not required...
    }catch(error){
        res.status(400).json(error)
    }
  }


    // CREATE
 const create=  async(req, res) => {
    try {
        res.json(await Users.create(req.body))
    } catch(error) {
        res.status(400).json(error)
    }
        
  }


  //show Users indiv
 const show=  async (req, res) => {
    try {
      res.json(await Users.findById(req.params.id))
    } catch (error) {
      res.status(400).json(error)
    }
  }

  module.exports = {
    index,
    del,
    update,
    create,
    show,
  };
  