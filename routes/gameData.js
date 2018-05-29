const mongoose = require("mongoose");

const Path = mongoose.model("paths");
const User = mongoose.model("users");

module.exports = app => {
  app.patch("/api/gamedata", async (req, res) => {
    const gameData = new Path(req.body.gameData);
    const auth = req.get("Authorization");
    if (!auth) {
      return res.status(403).json("Authorization required");
    }
    const sessionToken = auth.match(/Bearer (.+)/);
    const user = await User.findOne({ sessionToken });
    user.gameData = gameData;
    await user.save();
    res.json(user.gameData);
  });
};

module.exports = app => {
  app.get("/api/gamedata", async (req, res) => {
    const auth = req.get("Authorization");
    if (!auth) {
      return res.status(403).json("Authorization required");
    }
    const sessionToken = auth.match(/Bearer (.+)/);
    const user = await User.findOne({ sessionToken });
    gameData =  user.gameData;
    await user.save();
    res.json(gameData);
  });
};
