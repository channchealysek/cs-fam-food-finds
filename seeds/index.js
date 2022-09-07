const seedUsers = require("./user-seeds");
const seedCategory = require("./category-seeds")
const seedRestaurant = require("./restaurant-seeds");
const seedReview = require("./review-seeds");
const seedRestaurantCategory = require("./restaurant-category-seeds")
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");
  await seedCategory();
  console.log("--------------");
  await seedRestaurant();
  console.log("--------------");
  await seedReview();
  console.log("--------------");
  await seedRestaurantCategory();
  console.log("--------------");
  process.exit(0);
};

seedAll();