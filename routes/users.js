const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

// InDUCES

router.get("/", usersController.index);

router.delete("/:id", usersController.del);

router.put("/:id", usersController.update);

router.post("/", usersController.create);

router.get("/:id", usersController.show);


module.exports = router;
