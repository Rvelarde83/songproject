// Model
const mongoose = require("mongoose");

const SongsSchema = new mongoose.Schema({
    name: String,
    image: String,
    lyrics: String,
    progression: String,
    authors: String,
    musicians: String,
    media: String,
  });
  
  
  const Songs = mongoose.model("Songs", SongsSchema);

  module.exports = Songs