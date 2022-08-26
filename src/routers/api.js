const express = require("express");

// routes required
const SecretCodeRouter = require("./routes/SecretCodeRouter");

const api = express.Router();

// using these routes
api.use("/code", SecretCodeRouter);

module.exports = api;
