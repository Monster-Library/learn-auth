const mongoose = require("mongoose");
const SecretCodeSchema = require("../schemas/SecretCodeSchema");

// Create a model based on that schema
const SecretCode = mongoose.model("SecretCode", SecretCodeSchema);

// export the model
module.exports = SecretCode;
