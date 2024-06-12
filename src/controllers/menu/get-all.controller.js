const { response } = require("../../utils/response.utils");
const { Menu } = require("../../models");

const getAllMenu = async (req, res) => {
  try {
    const menu = await Menu.findAll();
    return response(res, 200, true, "Success get all Menu", menu);
  } catch (error) {
    return response(res, error.status || 500, false, error.message, null);
  }
};

module.exports = getAllMenu;
