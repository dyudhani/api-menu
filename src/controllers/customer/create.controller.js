const { response } = require("../../utils/response.utils");
const { Customer } = require("../../models");
const { nanoid } = require("nanoid");

const createCustomer = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return response(res, 400, false, "Name is required", null);

    const customer = await Customer.create({
      id: nanoid(7),
      name,
    });

    return response(
      res,
      200,
      true,
      `Success create customer ${customer.name}`,
      customer
    );
  } catch (error) {
    return response(res, error.status || 500, false, error.message, null);
  }
};

module.exports = createCustomer;
