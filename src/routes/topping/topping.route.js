const router = require("express").Router();
const controller = require("../../controllers/topping");

router.get("/", controller.getAllTopping);
router.get("/:id", controller.getToppingById);

module.exports = router;
