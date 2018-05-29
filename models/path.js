const mongoose = require("mongoose");
const { Schema } = mongoose;

const pathSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
  pathData: { type: Object, required: true },
  finished: { type: Date }
});

mongoose.model("paths", pathSchema);
