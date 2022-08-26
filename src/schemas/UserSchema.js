const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const UserSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    country: String,
    secret_code: [
      {
        type: Schema.Types.ObjectId,
        ref: "SecretCode",
      },
    ],
  },
  { timestamps: true }
);

module.exports = UserSchema;
