const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({

    text: String,
    image: String,
    date: String,
    number_of_likes: Number,
    user_name: String,
    user_avatar: String

}, {timestamps: true});

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;