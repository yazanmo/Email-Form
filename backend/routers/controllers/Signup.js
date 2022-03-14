const usersModel = require("../../db/models/user");

const createNewUser = (req, res) => {
  const {name,
    age,
    mobile,
    email,
    password,
    deliveryType, } = req.body;

  const user = new usersModel({
    name,
    age,
    mobile,
    email,
    password,
    deliveryType,
  });

  user.save().then((result) => {
    res.status(201).json(result);
  });
};

const getAllDAta = (req, res) => {
  const userId = req.token.id;
  usersModel
  .find({ userId: userId})
  .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
};


module.exports = {
  createNewUser,getAllDAta
};
