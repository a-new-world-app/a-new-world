const passport = require("passport");
const mongoose = require("mongoose");
const crypto = require("crypto");

const User = mongoose.model("users");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    async (req, res) => {
      const user = await User.findById(req.user._id);
      crypto.randomBytes(48, function (err, buffer) {
        var token = buffer.toString('base64').replace(/\//g, '_').replace(/\+/g, '-');
        user.sessionToken = token;
        user.save();
        res.redirect(`a-new-world://login?token=${user.sessionToken}`);
      });
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.json("placeholder");
  });

  app.get("/api/current_user", (req, res) => {
    res.json(req.user);
  });
};
