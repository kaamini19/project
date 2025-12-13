
const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const { createOrder, assignOrder } = require("../controllers/order.controller");

router.post("/", auth, role("VYAPARI"), createOrder);
router.post("/assign", auth, role("ADMIN"), assignOrder);

module.exports = router;
