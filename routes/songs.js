const express = require("express");
const router = express.Router();
const songsController = require("../controllers/songs");

// InDUCES

router.get("/", songsController.index);

router.delete("/:id", songsController.del);

router.put("/:id", songsController.update);

router.post("/", songsController.create);

router.get("/:id", songsController.show);


module.exports = router;
