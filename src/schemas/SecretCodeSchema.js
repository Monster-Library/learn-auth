const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const SecretCodeSchema = new Schema({
  code: {
    type: String,
    required: [true, "The Code Is Required"],
    min: 10,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = SecretCodeSchema;
