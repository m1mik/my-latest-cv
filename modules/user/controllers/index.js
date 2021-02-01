const User = require("../model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const signup = async (req, res) => {
  const { name, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const result = await User.countDocuments({
    $or: [{ name }, { email }],
  }).exec();
  if (result)
    return res.status(403).json({
      errorMessage: "There is user with such email or name in database.",
    });

  const user = new User({ name, password: hashedPassword, email });
  await user.save();

  const userToken = await new Promise((resolve, reject) => {
    jwt.sign({ user }, process.env.secret, {}, (err, token) =>
      token ? resolve(token) : reject(err)
    );
  });

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

const login = async (req, res) => {
  const { password, email } = req.body;

  const user = await User.findOne({ email }).exec();
  if (!user)
    return res
      .status(404)
      .json({ errorMessage: `There is no user with ${email} email.` });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid)
    return res
      .status(403)
      .json({ errorMessage: `User exists but password is incorrect.` });

  const userToken = await new Promise((resolve, reject) => {
    jwt.sign(
      {
        user: {
          email,
          name: user.name,
          password,
        },
      },
      process.env.secret,
      {},
      (err, token) => (token ? resolve(token) : reject(err))
    );
  });

  return res
    .cookie("jwt", userToken, {
      expires: new Date(Date.now() + 60 * 60 * 24 * 365),
      secure: true,
      httpOnly: true,
    })
    .status(200)
    .json({ message: "Here is your new token, please welcome.", user });
};

module.exports = {
  signup,
  verifyUser,
  whoami,
  login,
};
