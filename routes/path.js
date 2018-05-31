const mongoose = require("mongoose");
const fs = require("fs");
var cloudinary = require("cloudinary");

const Path = mongoose.model("paths");
const User = mongoose.model("users");

const multer = require('multer');
const upload = multer({dest: 'uploads/'});

module.exports = app => {
  app.get("/api/current_path", async(req, res) => {
    const auth = req.get("Authorization");
    if (!auth) {
      return res
        .status(403)
        .json("Authorization required");
    }
    const sessionToken = auth.match(/Bearer (.+)/);
    const user = await User.findOne({sessionToken});
    if (!user) {
      return res
        .status(403)
        .json("Authorization required");
    }
    if (user.currentPathId) {
      const path = await Path.findById(user.currentPathId);
      console.log(user)
      return res.json(path);
    } else {
      res.json({type: failure});
    }
  });

  app.post("/api/paths", async(req, res) => {
    const auth = req.get("Authorization");
    if (!auth) {
      return res
        .status(403)
        .json("Authorization required");
    }
    const sessionToken = auth.match(/Bearer (.+)/);
    const user = await User.findOne({sessionToken});
    if (!user) {
      return res
        .status(403)
        .json("Authorization required");
    }

    const path = new Path(req.body.path);
    path.userId = user.id;
    await path.save();
    user.currentPathId = path.id;
    await user.save();
    console.log(user)
    res.json(path);
  });

  app.patch("/api/paths/:id", async(req, res) => {
    const auth = req.get("Authorization");
    if (!auth) {
      return res
        .status(403)
        .json("Authorization required");
    }
    const sessionToken = auth.match(/Bearer (.+)/);
    const user = await User.findOne({sessionToken});
    if (!user) {
      return res
        .status(403)
        .json("Authorization required");
    }

    const path = await Path.findById(req.params.id);
    if (path.userId.toString() !== user.id) {
      return res
        .status(403)
        .json("Authorization required");
    }
    path.pathData = req.body.path.pathData;
    await path.save();
    res.json(path);
  });

  app.post("/api/paths/complete", async(req, res) => {
    const auth = req.get("Authorization");
    if (!auth) {
      return res
        .status(403)
        .json("Authorization required");
    }
    const sessionToken = auth.match(/Bearer (.+)/);
    const user = await User.findOne({sessionToken});
    if (!user) {
      return res
        .status(403)
        .json("Authorization required");
    }

    path.completedAt = new Date();
    path.save();
    user.currentPathId = null;
    await user.save();
    res.json(user);
  });

  app.post("/api/paths/images", upload.single('picture'), (req, res) => {
    console.log("file", req.file);
    cloudinary
      .uploader
      .upload(req.file.path, image => {
        console.log(image);
        res.send(image.secure_url);
      });
  });

  app.get("/api/completed_paths", async(req, res) => {
    const completedPaths = await Path.find({
      completedAt: {
        $exists: true
      }
    });
    res.json(completedPaths);
  });
};
