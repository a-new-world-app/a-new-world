const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: { type: String, index: { unique: true } }
});

mongoose.model("users", userSchema);
