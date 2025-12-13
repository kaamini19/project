
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const { getAnalytics } = require("../controllers/admin.controller");

router.get("/analytics", auth, role("ADMIN"), getAnalytics);

module.exports = router;
