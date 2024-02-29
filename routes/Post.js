const {getPosts, createPost, updatePost, deletePost} = require("../controllers/Post");
const router = require("express").Router();

const validation = require('../middleware/validate');

const { auth, requiresAuth } = require('express-openid-connect');



router.get("/", requiresAuth(), getPosts);

router.post("/", validation.postRules, createPost);

router.put("/update/:id", validation.postRules, updatePost);

router.delete("/delete/:id", deletePost);



module.exports = router;