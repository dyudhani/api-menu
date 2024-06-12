const { response } = require("../../utils/response.utils");
const {
  Transaction,
  Customer,
  Menu,
  Topping,
  Filling,
} = require("../../models");

const getAllTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      attributes: ["id", "quantity", "total"],
      include: [
        {
          model: Customer,
          as: "customer",
          attributes: ["id", "name"],
        },
        {
          model: Menu,
          as: "menu",
          attributes: ["id", "name", "price"],
        },
        {
          model: Topping,
          as: "topping",
          attributes: ["id", "name", "price"],
        },
        {
          model: Filling,
          as: "filling",
          attributes: ["id", "name", "price"],
        },
      ],
    });
    return response(
      res,
      200,
      true,
      "Success get all transactions",
      transactions
    );
  } catch (error) {
    return response(res, error.status || 500, false, error.message, null);
  }
};

module.exports = getAllTransaction;
