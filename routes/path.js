const mongoose = require("mongoose");
const fs = require("fs");
var cloudinary = require("cloudinary");

const Path = mongoose.model("paths");
const User = mongoose.model("users");

module.exports = app => {
  app.get("/api/current_path", async (req, res) => {
    const auth = req.get("Authorization");
    if (!auth) {
      return res.status(403).json("Authorization required");
    }
    const sessionToken = auth.match(/Bearer (.+)/);
    const user = await User.findOne({ sessionToken });
    if (!user) {
      return res.status(403).json("Authorization required");
    }

    if (user.activePathId) {
      const path = await Path.findById(user.activePathId);
      return res.json(path);
    }
    res.json(null);
  });

  app.post("/api/paths", async (req, res) => {
    const auth = req.get("Authorization");
    if (!auth) {
      return res.status(403).json("Authorization required");
    }
    const sessionToken = auth.match(/Bearer (.+)/);
    const user = await User.findOne({ sessionToken });
    if (!user) {
      return res.status(403).json("Authorization required");
    }

    const path = new Path(req.body.path);
    path.userId = user.id;
    await path.save();
    user.activePathId = path.id;
    user.save();
    res.json(path);
  });

  app.patch("/api/paths/:id", async (req, res) => {
    const auth = req.get("Authorization");
    if (!auth) {
      return res.status(403).json("Authorization required");
    }
    const sessionToken = auth.match(/Bearer (.+)/);
    const user = await User.findOne({ sessionToken });
    if (!user) {
      return res.status(403).json("Authorization required");
    }

    const path = await Path.findById(req.params.id);
    if (path.userId.toString() !== user.id) {
      return res.status(403).json("Authorization required");
    }
    path.pathData = req.body.path.pathData;
    await path.save();
    res.json(path);
  });

  app.post("/api/paths/complete", async (req, res) => {
    const auth = req.get("Authorization");
    if (!auth) {
      return res.status(403).json("Authorization required");
    }
    const sessionToken = auth.match(/Bearer (.+)/);
    const user = await User.findOne({ sessionToken });
    if (!user) {
      return res.status(403).json("Authorization required");
    }

    path.completedAt = new Date();
    path.save();
    user.activePathId = null;
    await user.save();
    res.json(user);
  });

  app.post("/api/paths/images", (req, res) => {
    stream = cloudinary.uploader.upload_stream(
      function(result) {
        console.log(result);
        res.json({ url: result.url, public_id: result.public_id });
      },
      { public_id: req.body.title }
    );
    fs
      .createReadStream(req.files.image.path, { encoding: "binary" })
      .on("data", stream.write)
      .on("end", stream.end);
  });

  app.get("/api/completed_paths", async (req, res) => {
    const completedPaths = await Path.find({ completedAt: { $exists: true } });
    res.json(completedPaths);
  });
};
