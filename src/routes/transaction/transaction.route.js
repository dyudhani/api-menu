const router = require("express").Router();
const controller = require("../../controllers/transaction");

router.get("/", controller.getAllTransaction);
router.get("/:id", controller.getTransactionById);
router.post("/", controller.orderMenu);

module.exports = router;
