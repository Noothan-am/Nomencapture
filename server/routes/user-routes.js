const router = require("../utils/router-instance");
const {
  userLogin,
  handleVerifyAuth,
  handleAddNewUser,
  userLogout,
} = require("../controllers/user-controllers");
const { verifyAuthToken } = require("../middlewares/auth-middleware");

router.post("/login", userLogin);
router.post("/logout", userLogout);
router.post("/add-user", handleAddNewUser);
router.post("/verify", verifyAuthToken, handleVerifyAuth);

module.exports = router;
