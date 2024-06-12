const { response } = require("../../utils/response.utils");
const {
  Transaction,
  Customer,
  Menu,
  Topping,
  Filling,
} = require("../../models");

const getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return response(res, 400, false, "Id is required", null);

    const transaction = await Transaction.findOne({
      where: { id },
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
    if (!transaction)
      return response(res, 404, false, "Transaction not found", null);

    return response(
      res,
      200,
      true,
      `Success get transaction ${transaction.id}`,
      transaction
    );
  } catch (error) {
    return response(res, error.status || 500, false, error.message, null);
  }
};

module.exports = getTransactionById;
