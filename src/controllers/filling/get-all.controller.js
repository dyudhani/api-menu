const { response } = require("../../utils/response.utils");
const { Filling, Menu } = require("../../models");

const getAllFilling = async (req, res) => {
  try {
    const filling = await Filling.findAll({
      attributes: ["id", "name", "price"],
      include: [
        {
          model: Menu,
          as: "menu",
          attributes: ["id", "name", "price"],
        },
      ],
    });
    return response(res, 200, true, "Success get all fillings", filling);
  } catch (error) {
    return response(res, error.status || 500, false, error.message, null);
  }
};

module.exports = getAllFilling;
