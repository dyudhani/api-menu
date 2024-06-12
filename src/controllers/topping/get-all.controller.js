const { response } = require("../../utils/response.utils");
const { Topping, Menu } = require("../../models");

const getAllTopping = async (req, res) => {
  try {
    const topping = await Topping.findAll({
      attributes: ["id", "name", "price"],
      include: [
        {
          model: Menu,
          as: "menu",
          attributes: ["id", "name", "price"],
        },
      ],
    });
    return response(res, 200, true, "Success get all toppings", topping);
  } catch (error) {
    return response(res, error.status || 500, false, error.message, null);
  }
};

module.exports = getAllTopping;
