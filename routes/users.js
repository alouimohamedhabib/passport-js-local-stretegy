var express = require("express");
var router = express.Router();
const passport = require("passport");
/* GET users listing. */
router.get("/login", function(req, res, next) {
  res.render("login");
});

/* GET users listing. */
router.post("/login", function(req, res, next) {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login"
  })(req, res, next);
});

module.exports = router;
