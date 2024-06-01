const express = require("express");
const router = express.Router();

const Pet = require("../models/Pet.model");
const User = require("../models/User.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const consoleLog = require("../middleware/consoleLog");

router.get("/", isLoggedIn, consoleLog, (req, res) => {
  Pet.find({ user: req.session.currentUser._id }).then((data) => {
    res.render("pet/list", { pets: data });
  });
});

router.get("/create", isLoggedIn, async (req, res) => {
  const users = await User.find();
  res.render("pet/create", { users });
});

router.post("/create", isLoggedIn, (req, res) => {
  Pet.create(req.body).then((data) => {
    res.redirect("/pet");
  });
});

module.exports = router;
