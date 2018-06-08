const passport = require("passport");
const mongoose = require("mongoose");
const crypto = require("crypto");

const User = mongoose.model("users");

module.exports = app => {
  app.get("/auth/google", passport.authenticate("google", {
    scope: ["email"]
  }));

  app.get("/auth/google/callback", passport.authenticate("google"), async (req, res) => {
    const user = await User.findById(req.user._id);
    crypto.randomBytes(48, function (err, buffer) {
      var token = buffer
        .toString("base64")
        .replace(/\//g, "_")
        .replace(/\+/g, "-");
      user.sessionToken = token;
      user.save();
      res.redirect(`a-new-world://login?token=${user.sessionToken}`);
    });
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.json("placeholder");
  });

  app.get("/api/current_user", async (req, res) => {
    const auth = req.get("Authorization");
    if (!auth) {
      return res
        .status(403)
        .json("Authorization required");
    }
    const sessionToken = auth.match(/Bearer (.+)/);
    const user = await User.findOne({
      sessionToken
    });
    if (!user) {
      return res
        .status(403)
        .json("Authorization required");
    }

    res.json({
      sessionToken: user.sessionToken
    });
  });

  app.patch("/api/agree", async (req, res) => {
    console.log('test')
    const auth = req.get("Authorization");
    if (!auth) {
      return res
        .status(403)
        .json("Authorization required");
    }
    const sessionToken = auth.match(/Bearer (.+)/);
    const user = await User.findOne({
      sessionToken
    });
    if (!user) {
      return res
        .status(403)
        .json("Authorization required");
    }
    user.agree = Date.now()
    await user.save()
    res.json({
      user: user
    });
  });
};