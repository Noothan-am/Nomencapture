const userDetails = require("../model/userDetailsSchema");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await userDetails.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found");
    }
    const isValidPassword = user.password === password;
    if (!isValidPassword) {
      return res.status(401).json({ message: "invalid credentials" });
    }
    const authToken = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "15hr",
    });

    res.cookie("authToken", authToken, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 60 * 60 * 1000 * 15,
    });

    const userData = {
      email: user.email,
      name: user.name,
      accessPages: user.accessPages,
    };

    return res.status(200).send({ user: { ...userData }, isValid: true });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Internal server error",
      user: { userData },
      isValid: true,
    });
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
    if (!user) {
      return res.status(404).send({ user: {}, isValid: false });
    }
    return res.status(200).send({ user: user, isValid: true });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};


const handleAddNewUser = async (req, res) => {
  try {
    const {userEmail,userPassword, userName} = req.body;
    const data = {
        "name": userName,
        "email": userEmail,
        "password": userPassword,
        "accessedPages": {
          "forms": false,
          "auditPage": false,
          "namingSet": false,
          "firstName": false,
          "secondName": {
            "isRequired": false,
            "hasSeen": false
          },
          "selectedName": false
        },
    }
    const user = new userDetails(data);
    await user.save();
    return res.status(200).send("successfully added new user");
  } catch (error) {
    console.log("error while adding new User", error);
    return res.status(500).send("Internal server error");

  }
}


module.exports = { userLogin, makeuser, handleVerifyAuth, handleAddNewUser };
