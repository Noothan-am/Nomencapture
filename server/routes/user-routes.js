const router = require("../utils/router-instance");
const {
  userLogin,
  makeuser,
  handleVerifyAuth,
  handleAddNewUser
} = require("../controllers/user-controllers");
const { verifyAuthToken } = require("../middlewares/auth-middleware");

router.post("/login", userLogin);
router.post("/make", makeuser);
router.post("/add-user", handleAddNewUser);
router.post("/verify", verifyAuthToken, handleVerifyAuth);

module.exports = router;
