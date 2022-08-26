const passport = require("passport");
const passportLocal = require("passport-local");
const localConfig = require("../auth/PassportLocalConfig");
const passportJWT = require("passport-jwt");

const configurePassport = (app) => {
  passport.serializeUser(localConfig.serializeUser);
  passport.deserializeUser(localConfig.deserializeUser);

  passport.use(
    new passportLocal.Strategy(localConfig.config, localConfig.handler)
  );

  passport.use(
    new passportJWT.Strategy(localConfig.jwtConfig, localConfig.jwtHandler)
  );

  app.use(passport.initialize());
};

module.exports = {
  configurePassport,
};
