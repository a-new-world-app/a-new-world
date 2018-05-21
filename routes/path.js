const mongoose = require("mongoose");

const Path = mongoose.model('paths');

module.exports = app => {
  app.post('/api/paths', (req, res) => {
    const path = new Path(req.body.path);
    path.userId = req.user.id;
    path.save();
    res.json("things happened");
  });
}