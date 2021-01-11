const express = require("express");
const router = express.Router();

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
