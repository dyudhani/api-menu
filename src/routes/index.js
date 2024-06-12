const router = require("express").Router();
const { response } = require("../utils/response.utils");

const menu = require("./menu/menu.route");
const topping = require("./topping/topping.route");
const filling = require("./filling/filling.route");
const transaction = require("./transaction/transaction.route");
const customer = require("./customer/customer.route");

router.get("/", (req, res) => {
  return response(res, 200, true, "Welcome to the API Menu", null);
});

router.use("/menu", menu);
router.use("/topping", topping);
router.use("/filling", filling);
router.use("/transaction", transaction);
router.use("/customer", customer);

module.exports = router;
