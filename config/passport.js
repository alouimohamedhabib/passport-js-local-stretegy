var passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
module.exports = function() {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, function(
      email,
      password,
      done
    ) {
    
      User.findOne({ email: email }, function(err, user) {
          console.log(user)
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        return done(null, user); //success response
      });
    })
  );
  // serializer
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
