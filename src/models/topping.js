"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Topping extends Model {
    static associate(models) {
      Topping.belongsTo(models.Menu, {
        foreignKey: "menu_id",
        as: "menu",
      });
    }
  }
  Topping.init(
    {
      menu_id: DataTypes.STRING,
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Topping",
    }
  );
  return Topping;
};
