"use strict";
const { nanoid } = require("nanoid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Menus", [
      {
        id: nanoid(7),
        name: "Pizza",
        price: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(7),
        name: "Doughnut",
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: nanoid(7),
        name: "Pie",
        price: 45000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Menus", null, {});
  },
};
