const Songs = require("../models/SongsSchema")

const index =  async(req, res)=>{
    try{
       
        res.json(await Songs.find({}))
    }catch (error){a
        //send error
        res.status(400).json(error)
    }
    }

      //Delete
const del =  async(req, res)=>{
    try{
        res.json( await Songs.findByIdAndDelete(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
  }

    
  //Songs Update Route
 const update=  async(req,res) => {
    try {
        res.json( await Songs.findByIdAndUpdate(req.params.id, req.body, {new: true })
        ) // new:true is not required...
    }catch(error){
        res.status(400).json(error)
    }
  }


    // CREATE
 const create=  async(req, res) => {
    try {
        res.json(await Songs.create(req.body))
    } catch(error) {
        res.status(400).json(error)
    }
        
  }


  //show Songs indiv
 const show=  async (req, res) => {
    try {
      res.json(await Songs.findById(req.params.id))
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
  