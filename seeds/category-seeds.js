const { Category } = require("../models");

const categorydata = [
    {
      category_name: "Italian"
    },
    {
        category_name: "Japanese"
    },
    {
        category_name: "Fast Food"
    },
    {
        category_name: "Tex Mex"
    },
    {
        category_name: "Burger Joint"
    }
  ];
  
  const seedCategory = () => Category.bulkCreate(categorydata);

  module.exports = seedCategory