const express = require("express");
const router = express.Router();
const { validate } = require("../../../helpers");
const { body } = require("express-validator");
const UserControllers = require("../controllers");

router.post(
  "/signup",
  body(["name", "password"]).exists().isString(),
  body("email").exists().isEmail(),
  validate,
  UserControllers.signup
);

router.get("/whoami", UserControllers.verifyUser, UserControllers.whoami);

// get new token
router.post(
  "/login",
  body("password").exists().isString(),
  body("email").exists().isEmail(),
  UserControllers.login
);

router.post("/upload-avatar", (req, res) => {
  if (!req.files) return res.json({ fail: true });

  const myFile = req.files.file;
  myFile.mv(`./assets/images/${myFile.name}`, function (err) {
    if (err) {
      return res.status(500).send({ msg: "Error occured" });
    }
    return res.status(200).send({ name: myFile.name, path: `/${myFile.name}` });
  });
});

module.exports = router;
