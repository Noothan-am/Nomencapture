const jwt = require("jsonwebtoken");

const verifyAuthToken = async (req, res, next) => {
  const cookie = req.headers["cookie"];
  const token = cookie.split("=")[1];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    jwt.verify(token, "hello this is secrate key", (err, data) => {
      if (err) {
        return res.status(401).send("Invalid Token");
      }
      req.id = data._id;
      return next();
    });
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
};

module.exports = { verifyAuthToken };
