const express = require("express");

// routes required
const LocalRouter = require("./auth/LocalRouter");

const auth = express.Router();

// using these routes
auth.use("/local", LocalRouter);

module.exports = auth;
