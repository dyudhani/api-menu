const router = require("express").Router();
const controller = require("../../controllers/menu");

router.get("/", controller.getAllMenu);

module.exports = router;
