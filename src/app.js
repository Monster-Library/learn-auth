const express = require("express");

// the app
const app = express();

// parse to json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require helmet to handling the requests errors and make the application more secured
// https://www.udemy.com/course/complete-nodejs-developer-zero-to-mastery/learn/lecture/26778622#overview
const helmet = require("helmet");
const { configurePassport } = require("./middlewares/passport-strategy");

// use helmet before the routes to handle them
app.use(helmet());
configurePassport(app);

// required routes
const api = require("./routers/api");
const auth = require("./routers/auth");
// const client = require("./routes/client");
// required routes

// for just a production
// app.use(express.static(path.join(__dirname, "..", "public")));

/**
 * cors for handling CORS ERROR
 * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 */

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

// end cors for handling http requests

// for just a production
// app.use(express.static(path.join(__dirname, "..", "public")));

// Routes
// api router
app.use("/api", api);
app.use("/auth", auth);

// the client route
// app.use(client);
// Routes

module.exports = app;
