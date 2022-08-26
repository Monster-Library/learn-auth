const passport = require("passport");

const AuthMiddleware = (req, res, next) => {
  passport.authenticate("jwt", (error, user, info) => {
    if (error) {
      return next(error);
    }

    if (info) {
      return res.status(401).json({
        message: info.message,
      });
    }

    if (!user) {
      return res.status(401).json({
        message: "redirect to login",
      });
    }

    req.user = user;

    next();
  })(req, res, next);
};

module.exports = AuthMiddleware;
