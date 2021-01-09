const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/images" });

router.post("/upload-avatar", upload.single("photo"), (req, res) => {
  if (req.file) res.json(req.file);
  res.status(400).json({
    message: "Something went wrong on file save.",
  });
});

module.exports = router;
