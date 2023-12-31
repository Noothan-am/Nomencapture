const userDetails = require("../model/userDetailsSchema");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await userDetails.findOne({ email: email });
    if (!user) {
      return res.status(400).send("User not found");
    }
    const isValidPassword = user.password === password;
    if (!isValidPassword) {
      return res.status(401).json({ message: "invalid credentials" });
    }
    const token = jwt.sign({ _id: user._id }, "hello this is secrate key", {
      expiresIn: "15hr",
    });

    res.cookie("token", token, {
      path: "/",
      expiresIn: new Date(Date.now() + 1000 * 15),
      httpOnly: true,
    });

    return res
      .status(200)
      .send({ message: "Login successful", userDetails: user, token: token });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
};

const makeuser = async (req, res) => {
  try {
    const user = new userDetails({ email: "hello", password: "hello" });
    await user.save();
    return res.status(200).send({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
  }
};

const handleVerifyAuth = async (req, res) => {
  try {
    const user = await userDetails.findById(req.id, "-password");
    return res.status(200).send({ message: "User verified", user: user });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = { userLogin, makeuser, handleVerifyAuth };
