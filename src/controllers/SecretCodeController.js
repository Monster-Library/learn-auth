// the SecretCode model represents the SecretCode table
const SecretCode = require(`../models/SecretCode`);

// method that get all the SecretCodes from db | model
const index = (req, res) => {
  // Todo: get all the SecretCodes from SecretCode table
  res.send(process.env.ALLOWED_WEBSITE);
};

const create = async (req, res, next) => {
  const { code } = req.body;

  try {
    const user = req.user;

    const checkDuplicatedCode = await SecretCode.exists({ code });

    if (!checkDuplicatedCode) {
      const secret_code = new SecretCode({
        code,
        user: user._id,
      });

      secret_code.save();

      res.status(200).json({
        code: secret_code.code,
        message: "The secret code was created successfully",
      });
    } else {
      res.status(400).json({
        message:
          "The code name is already exist!, please change the code name!",
      });
    }
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const user = req.user;

    const secret_codes = await SecretCode.find({
      user: user._id,
    }).exec();

    res.status(200).json(secret_codes.map((el) => el.code));
  } catch (error) {
    next(error);
  }
};

const update = (req, res) => {
  // Todo: update a SecretCode
  const id = req.params.id;
  res.send(`Welcome in update method your id is: ${id}`);
};

const del = (req, res) => {
  // Todo: delete a SecretCode
  const id = req.params.id;
  res.send(`Welcome in delete method your id is: ${id}`);
};

// exports the methods there're inside this controller in object
module.exports = {
  index,
  create,
  getById,
  update,
  del,
};
