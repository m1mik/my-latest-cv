const express = require("expres");
const { verifyUser } = require("../../user/controllers");
const router = express.Router();
const todoControllers = require("./controllers");

router.get("/todos", verifyUser, todoControllers.getTodos);

module.exports = router;
