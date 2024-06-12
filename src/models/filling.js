"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Filling extends Model {
    static associate(models) {
      Filling.belongsTo(models.Menu, {
        foreignKey: "menu_id",
        as: "menu",
      });
    }
  }
  Filling.init(
    {
      menu_id: DataTypes.STRING,
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Filling",
    }
  );
  return Filling;
};
