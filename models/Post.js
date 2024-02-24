const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({

    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    text: String,
    image: String,
    date: String,
    number_of_likes: Number,

}, {timestamps: true});

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;