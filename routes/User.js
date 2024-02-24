const {getUsers, createUser, updateUser, deleteUser} = require("../controllers/User");
const router = require("express").Router();

const validation = require('../middleware/validate');

router.get("/", getUsers);

router.post("/", validation.userRules, createUser);

router.put("/update/:id", validation.userRules, updateUser);

router.delete("/delete/:id", deleteUser);



module.exports = router;