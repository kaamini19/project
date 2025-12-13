
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const { getUsers } = require("../controllers/user.controller");

router.get("/", auth, role("ADMIN"), getUsers);

module.exports = router;
