const PostModel = require("../models/Post");
const dotenv = require("dotenv");
dotenv.config();
const { ObjectId } = require('mongodb');

const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find({});
    // console.log(messages);
    if (posts) {
      res.status(200).json(posts);
    }
  } catch (err) {
    if (err) throw err;
  }
};

const createPost = async (req, res) => {
  try {
    const { user_id, text, image, date, number_of_likes } =
      req.body;
    const post = await PostModel.create({
      user_id,
      text,
      image,
      date,
      number_of_likes,
    });
    // console.log(messages);
    if (post) {
      res.status(201).send(`${post._id}`);
    }
  } catch (err) {
    if (err) throw err;
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id, text, image, date, number_of_likes } =
      req.body;

    if (!ObjectId.isValid(id)) {
      res.status(400).json("Must use a valid post id to update a post.");
    }

    const updatedPost = await PostModel.findOneAndUpdate(
      { _id: id },
      {
        user_id,
        text,
        image,
        date,
        number_of_likes,
      }
    );

    console.log(updatedPost);

    if (!updatedPost) {
      return res.status(400).json({ error: "Item does not exist" });
    }

    res.status(204).json(updatedPost);
  } catch (err) {
    if (err) throw err;
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      res.status(400).json("Must use a valid post id to delete a post.");
    }

    const post = await PostModel.findOneAndDelete({ _id: id });

    if (!post) {
      return res.status(400).json({ error: "Item does not exist" });
    }

    res.status(200).json(post);
  } catch (err) {
    if (err) throw err;
  }
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
