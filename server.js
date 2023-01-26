//Dependencies
require("dotenv").config();


const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

// DB Config
require("./config/database");

//Routers
const songsRouter = require("./routes/songs");
const usersRouter = require("./routes/users");


//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("static")) 
app.use(cors());
app.use(morgan('dev'))



//Model

app.use("/songs/", songsRouter);

app.use("/users/", usersRouter);




//Listen

const PORT = process.env.PORT|| 3003
app.listen(PORT, () => console.log(`You're on song_port ${PORT}`));
