const { compareHash } = require("../helpers/PasswordHash");
const passportJWT = require("passport-jwt");
const User = require("../models/User");

const serializeUser = (user, done) => {
  if (user.password) {
    delete user.password;
  }
  return done(null, user);
};

const deserializeUser = (user, done) => {
  return done(null, user);
};

const config = {
  usernameField: "email",
  session: false,
};

const handler = async (email, password, done) => {
  // done(error, user) => if there's no error or user write null instead!
  try {
    const user = await User.findOne({ email }).exec();

    // if the email was exist
    if (user) {
      // check the password is correct
      const check = compareHash(password, user.password);

      // if the password was correct
      if (check) {
        done(null, user);
      } else {
        done(null, false, { message: "Invalid Password, Please try again!" });
      }
    } else {
      done(null, false, {
        message: "The email is NOT exist, please register first",
      });
    }
  } catch (error) {
    done(error);
  }
};

const jwtConfig = {
  jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_PRIVATE_KEY,
};

const jwtHandler = (payload, done) => {
  try {
    done(null, payload);
  } catch (error) {
    done(error);
  }
};

module.exports = {
  config,
  handler,
  serializeUser,
  deserializeUser,
  jwtHandler,
  jwtConfig,
};
