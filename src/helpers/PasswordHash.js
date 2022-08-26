const bcrypt = require("bcrypt");

const PasswordHash = (password) => {
  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const compareHash = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = {
  PasswordHash,
  compareHash,
};
