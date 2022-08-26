// the User model represents the User table
const { PasswordHash } = require("../helpers/PasswordHash");
const User = require(`../models/User`);
const jwt = require("jsonwebtoken");

const Register = async (req, res, next) => {
  let { username, email, password } = req.body;

  try {
    if (username || email || password) {
      password = PasswordHash(password);

      const user = new User({
        username,
        email,
        password,
      });

      user.save();

      // token part
      const payload = {
        email: user.email,
        username: user.username,
        _id: user._id,
        role: 1,
      };
      const secret = process.env.SECRET_PRIVATE_KEY;
      const options = { expiresIn: process.env.EXPIRE_IN };
      const token = jwt.sign(payload, secret, options);

      res.status(200).json({
        token,
        message: "The user was registered successfully!",
      });
    } else {
      res.status(400).json({
        message: "bad request",
      });
    }
  } catch (error) {
    next(error);
  }
};

const Login = async (req, res, next) => {
  const { email, username, secret_code, _id } = req.user;

  try {
    const payload = { email, username, _id, role: 1 };
    const secret = process.env.SECRET_PRIVATE_KEY;
    const options = { expiresIn: process.env.EXPIRE_IN };
    const token = jwt.sign(payload, secret, options);

    res.status(200).json({
      token,
      message: "The user was logged in successfully!",
    });
  } catch (error) {
    next(error);
  }
};

// exports the methods there're inside this controller in object
module.exports = {
  Register,
  Login,
};
