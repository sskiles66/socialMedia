const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    first_name: String,
    last_name: String,
    email: String,
    phone_number: Number,
    user_name: String,
    user_avatar: String

}, {timestamps: true});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;