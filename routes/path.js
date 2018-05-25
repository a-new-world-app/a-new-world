const mongoose = require("mongoose");

const Path = mongoose.model("paths");
const User = mongoose.model("users");

module.exports = app => {
  app.post("/api/paths", async (req, res) => {
    const path = new Path(req.body.path);
    const auth = req.get("Authorization");
    if (!auth) {
      return res.status(403).json("Authorization required");
    }
    const sessionToken = auth.match(/Bearer (.+)/);
    const user = await User.findOne({ sessionToken });
    path.userId = user.id;
    await path.save();
    res.json("things happened");
  });
};
