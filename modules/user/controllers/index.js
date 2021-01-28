const User = require("../model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const signup = async (req, res) => {
  const { name, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  let user = new User({ name, password: hashedPassword, email });
  await user.save();

  const userToken = await new Promise((resolve, reject) => {
    jwt.sign({ user }, process.env.secret, {}, (err, token) =>
      token ? resolve(token) : reject(err)
    );
  });
  console.log("TOKEN: ", userToken);
  return res
    .cookie("jwt", userToken, {
      expires: new Date(Date.now() + 60 * 60 * 24 * 365),
      secure: true,
      httpOnly: true,
    })
    .status(201)
    .json(user);
};

const verifyUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    try {
      const payload = await jwt.verify(token, process.env.secret);
      const user = await User.findById(payload.user._id).exec();
      req.user = user;
      next();
    } catch (err) {
      return res.status(403).json(err);
    }
  }
  return res
    .status(403)
    .json({ errMessage: "Authorization header wasn't set." });
};

const whoami = async (req, res) => {
  return res.json(req.user);
};

module.exports = {
  signup,
  verifyUser,
  whoami,
};
