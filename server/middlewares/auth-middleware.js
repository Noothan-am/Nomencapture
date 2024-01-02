const jwt = require("jsonwebtoken");

const verifyAuthToken = async (req, res, next) => {
  const cookie = req.headers.authToken;
  console.log({ cookie });

  if (!cookie) {
    return res.status(403).send("A token is required for authentication");
  }
  const token = cookie.split("=")[1];
  try {
    jwt.verify(token, "hello this is secrate key", (err, data) => {
      if (err) {
        return res.status(401).send("Invalid Token");
      }
      console.log(data._id);
      req.id = data._id;
      return next();
    });
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
};

module.exports = { verifyAuthToken };
