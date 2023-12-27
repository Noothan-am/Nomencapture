const router = require("../utils/router-instance");
const { userLogin, makeuser } = require("../controllers/user-controllers");

router.get("/", userLogin);
router.post("/make", makeuser);

module.exports = router;
