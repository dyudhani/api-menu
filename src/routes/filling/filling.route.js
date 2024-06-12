const router = require("express").Router();
const controller = require("../../controllers/filling");

router.get("/", controller.getAllFilling);

module.exports = router;
