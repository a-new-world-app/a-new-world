const mongoose = require("mongoose");
const fs = require("fs");
var cloudinary = require("cloudinary");

const Path = mongoose.model("paths");
const User = mongoose.model("users");

module.exports = app => {
  app.post("/api/paths", async (req, res) => {
    const auth = req.get("Authorization");
    if (!auth) {
      return res.status(403).json("Authorization required");
    }
    const sessionToken = auth.match(/Bearer (.+)/);
    const user = await User.findOne({ sessionToken });
    const path = new Path(req.body.path);
    path.userId = user.id;
    await path.save();
    res.json(path);
  });

  app.post("/api/paths/images", async (req, res) => {
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
};
