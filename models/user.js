const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    index: {
      unique: true
    }
  },
  sessionToken: {
    type: String,
    index: true
  },
  currentPathId: {
    type: Schema.Types.ObjectId,
    ref: "paths"
  },
  gameData: {
    type: Object
  },
  agree: {
    type: Number
  }
});

mongoose.model("users", userSchema);