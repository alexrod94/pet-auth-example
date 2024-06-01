const express = require("express");
const router = express.Router();
const User = require("../models/User.model");

const isLoggedIn = require("../middleware/isLoggedIn");

/* GET home page */
router.get("/", isLoggedIn, (req, res, next) => {
  const user = req.session.currentUser;
  console.log(user);
  res.render("index", { user });
});

router.get("/profile", isLoggedIn, (req, res) => {
  User.findById(req.session.currentUser._id).then((data) => {
    res.render("profile", { user: data });
  });
});

module.exports = router;
