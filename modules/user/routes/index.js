const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/images" });

router.post("/upload-avatar", upload.single("photo"), (req, res) => {
  console.log(req.file);
  if (req.file) return res.json(req.file);
  return res.status(400).json({
    message: "Something went wrong on file save.",
  });
});

module.exports = router;
