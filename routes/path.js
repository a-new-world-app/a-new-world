const mongoose = require("mongoose");

const Path = mongoose.model('paths');
const User = mongoose.model('users');

module.exports = app => {
  app.post('/api/paths', async (req, res) => {
    const path = new Path(req.body.path);
    const sessionToken = req.get("Authorization").match(/Bearer (.+)/);
    const user = await User.findOne({sessionToken});
    path.userId = user.id;
    await path.save();
    res.json("things happened");
  });
}