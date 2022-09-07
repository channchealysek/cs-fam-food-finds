const { Restaurant } = require("../models");

const restaurantdata = [
    {
        restaurant_name: "Mamma Mia",
        restaurant_url: "google.com",
        restaurant_description: "A fake place for fake people",
        user_id: 1
    },
    {
        restaurant_name: "Oga's",
        restaurant_url: "https://www.ogasnatick.com/menu",
        restaurant_description: "Located in Massachussetts, as close to authentic you can find in these parts",
        user_id: 2
    },
    {
        restaurant_name: "Whataburger",
        restaurant_url: "https://whataburger.com/home",
        restaurant_description: "Fast food at it's best",
        user_id: 3
    },
    {
        restaurant_name: "Escalantes",
        restaurant_url: "https://www.escalantes.net/",
        restaurant_description: "Local text-mex joint with a great happy hour",
        user_id: 1
    },
    {
        restaurant_name: "Shake Shack",
        restaurant_url: "https://shakeshack.com/home#/",
        restaurant_description: "Upscale burger joint",
        user_id: 2
    }
  ];
  
  const seedRestaurant = () => Restaurant.bulkCreate(restaurantdata);

  module.exports = seedRestaurant;