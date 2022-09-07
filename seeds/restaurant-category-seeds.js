const { RestaurantCategory } = require("../models");

const restaurantcategoryData = [
  {
    restaurant_id: 1,
    category_id: 1,
  },
  {
    restaurant_id: 2,
    category_id: 2,
  },
  {
    restaurant_id: 3,
    category_id: 3,
  },
  {
    restaurant_id: 4,
    category_id: 4,
  },
  {
    restaurant_id: 5,
    category_id: 5,
  },
  {
    restaurant_id: 1,
    category_id: 3,
  },
  {
    restaurant_id: 3,
    category_id: 5,
  },
  {
    restaurant_id: 5,
    category_id: 3,
  }
];

const seedRestaurantCategory = () => RestaurantCategory.bulkCreate(restaurantcategoryData);

module.exports = seedRestaurantCategory;