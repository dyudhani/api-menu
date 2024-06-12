const { response } = require("../../utils/response.utils");
const {
  Transaction,
  Customer,
  Menu,
  Topping,
  Filling,
} = require("../../models");
const { nanoid } = require("nanoid");

const orderMenu = async (req, res) => {
  try {
    let addOns = { topping: null, filling: null };
    let totalAmount = 0;
    const { customer_id, menu_id, topping_id, filling_id, qty } = req.body;
    if (!customer_id || !menu_id) {
      return response(
        res,
        400,
        false,
        "Customer name and menu are required",
        null
      );
    }

    const customer = await Customer.findOne({ where: { id: customer_id } });
    if (!customer) return response(res, 404, false, "Customer not found", null);
    const menu = await Menu.findOne({ where: { id: menu_id } });
    if (!menu) return response(res, 404, false, "Menu not found", null);

    const isNotNull = topping_id && filling_id ? true : false;
    if (isNotNull) {
      return response(
        res,
        400,
        false,
        "Please choose just the topping or filling",
        null
      );
    }

    if (topping_id) {
      const topping = await Topping.findOne({
        where: {
          id: topping_id,
          menu_id: menu.id,
        },
      });

      if (!topping) {
        return response(
          res,
          404,
          false,
          `Topping not found in menu ${menu.name}`,
          null
        );
      }
      addOns.topping = topping;
    }

    if (filling_id) {
      const filling = await Filling.findOne({
        where: {
          id: filling_id,
          menu_id: menu.id,
        },
      });
      if (!filling) {
        return response(
          res,
          404,
          false,
          `Filling not found in menu ${menu.name}`,
          null
        );
      }
      addOns.filling = filling;
    }

    if (addOns.topping) {
      totalAmount += Number(addOns.topping.price);
    }
    if (addOns.filling) {
      totalAmount += Number(addOns.filling.price);
    }

    totalAmount += Number(menu.price);
    totalAmount *= qty;

    const order = await Transaction.create({
      id: nanoid(7),
      customer_id: customer.id,
      menu_id: menu.id,
      topping_id: addOns.topping ? addOns.topping.id : null,
      filling_id: addOns.filling ? addOns.filling.id : null,
      quantity: qty,
      total: totalAmount,
    });

    const orderDetail = await Transaction.findOne({
      where: { id: order.id },
      attributes: ["id", "quantity", "total"],
      include: [
        {
          model: Customer,
          as: "customer",
          attributes: ["name"],
        },
        {
          model: Menu,
          as: "menu",
          attributes: ["name", "price"],
        },
        {
          model: Topping,
          as: "topping",
          attributes: ["name", "price"],
        },
        {
          model: Filling,
          as: "filling",
          attributes: ["name", "price"],
        },
      ],
    });

    return response(
      res,
      200,
      true,
      `Success order for ${orderDetail.customer.name}`,
      orderDetail
    );
  } catch (error) {
    return response(res, error.status || 500, false, error.message, null);
  }
};

module.exports = orderMenu;
