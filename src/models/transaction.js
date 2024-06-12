"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      Transaction.belongsTo(models.Customer, {
        foreignKey: "customer_id",
        as: "customer",
      });
      Transaction.belongsTo(models.Menu, {
        foreignKey: "menu_id",
        as: "menu",
      });
      Transaction.belongsTo(models.Topping, {
        foreignKey: "topping_id",
        as: "topping",
      });
      Transaction.belongsTo(models.Filling, {
        foreignKey: "filling_id",
        as: "filling",
      });
    }
  }
  Transaction.init(
    {
      customer_id: DataTypes.STRING,
      menu_id: DataTypes.STRING,
      topping_id: DataTypes.STRING,
      filling_id: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      total: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
