const UserModel = require("../models/User");
const dotenv = require("dotenv");
dotenv.config();
const { ObjectId } = require('mongodb');

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    // console.log(messages);
    if (users) {
      res.status(200).json(users);
    }
  } catch (err) {
    if (err) throw err;
  }
};

const createUser = async (req, res) => {
  try {
    const { first_name, last_name, email, phone_number, user_name, user_avatar } =
      req.body;
    const user = await UserModel.create({
        first_name, last_name, email, phone_number, user_name, user_avatar
    });
    // console.log(messages);
    if (user) {
      res.status(201).send(`${user._id}`);
    }
  } catch (err) {
    if (err) throw err;
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, phone_number, user_name, user_avatar } =
      req.body;

    if (!ObjectId.isValid(id)) {
      res.status(400).json("Must use a valid user id to update a user.");
    }

    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: id },
      {
        first_name, last_name, email, phone_number, user_name, user_avatar
      }
    );

    console.log(updatedUser);

    if (!updatedUser) {
      return res.status(400).json({ error: "Item does not exist" });
    }

    res.status(204).json(updatedUser);
  } catch (err) {
    if (err) throw err;
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      res.status(400).json("Must use a valid user id to delete a user.");
    }

    const user = await UserModel.findOneAndDelete({ _id: id });

    if (!user) {
      return res.status(400).json({ error: "Item does not exist" });
    }

    res.status(200).json(user);
  } catch (err) {
    if (err) throw err;
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
