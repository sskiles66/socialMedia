const PostModel = require("../models/Post")
const dotenv = require("dotenv");
dotenv.config();

const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find({});
        // console.log(messages);
        if (posts) {
            res.status(200).json(posts)
        }
        
    } catch (err) {
        if (err) throw err;
    }
}

const createPost = async (req, res) => {
    try {
        const {text, image, date, number_of_likes, user_name, userAvatar} = req.body;
        const post = await PostModel.create({text, image, date, number_of_likes, user_name, userAvatar});
        // console.log(messages);
        if (post) {
            res.status(200).json(post)
        }
        
    } catch (err) {
        if (err) throw err;
    }
}


module.exports = {
    getPosts,
    createPost
}