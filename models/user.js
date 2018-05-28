const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: { type: String, index: { unique: true } },
  sessionToken: { type: String, index: true },
  currentPathId: { type: Schema.Types.ObjectId, ref: "paths" }
});

mongoose.model("users", userSchema);
