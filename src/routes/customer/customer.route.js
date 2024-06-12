const router = require("express").Router();
const controller = require("../../controllers/customer");

router.post("/regis", controller.createCustomer);

module.exports = router;
