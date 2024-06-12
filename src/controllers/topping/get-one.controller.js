const { response } = require("../../utils/response.utils");
const { Topping, Menu } = require("../../models");

const getToppingById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return response(res, 400, false, "Id is required", null);

    const topping = await Topping.findOne({
      where: { id },
      attributes: ["id", "name", "price"],
      include: [
        {
          model: Menu,
          as: "menu",
          attributes: ["id", "name", "price"],
        },
      ],
    });
    if (!topping) return response(res, 404, false, "Topping not found", null);

    return response(
      res,
      200,
      true,
      `Success get topping ${topping.name}`,
      topping
    );
  } catch (error) {
    return response(res, error.status || 500, false, error.message, null);
  }
};

module.exports = getToppingById;
