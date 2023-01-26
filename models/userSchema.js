// Model
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    image: String,
    mediaType: String,
    email: String,
    instruments: String,
    bands: String,
  });
  
  
  const User = mongoose.model("User", UserSchema);

  module.exports = User 