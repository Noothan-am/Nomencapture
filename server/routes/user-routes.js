const router = require("../utils/router-instance");
const {
  userLogin,
  makeuser,
  handleVerifyAuth,
} = require("../controllers/user-controllers");
const { verifyAuthToken } = require("../middlewares/auth-middleware");

router.get("/", userLogin);
router.post("/make", makeuser);
router.post("/verify", verifyAuthToken, handleVerifyAuth);

module.exports = router;
