const {getPosts, createPost} = require("../controllers/Post");
const router = require("express").Router();



router.get("/", getPosts);

router.post("/", createPost);



module.exports = router;