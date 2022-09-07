const router = require("express").Router();
const sequelize = require("../config/connection");
const {
  User,
  Category,
  Restaurant,
  Review,
  RestaurantCategory,
} = require("../models");

// login form
router.get("/login", (req, res) => {
  res.render("login");
});

//   sign up form
router.get("/signup", (req, res) => {
  res.render("signup");
});

//get all restaurants
//GET "/"
router.get("/", async (req, res) => {
  try {
    const restaurantData = await Restaurant.findAll({
      include: [
        { model: Category, attributes: ["category_name"] },
        {
          model: Review,
          attributes: ["id", "review_text", "user_id"],
          include: { model: User, attributes: ["username"] },
        },
      ],
    });

    const restaurants = restaurantData.map((restaurant) =>
      restaurant.get({ plain: true })
    );
    const categeriesData = await Category.findAll({});
    const categories = categeriesData.map((category) =>
      category.get({ plain: true })
    );
    res.render("homepage", {
      restaurants,
      categories,
      loggedIn: req.session.loggedIn,
    });
    //res.status(200).json(restaurantData);
    // restaurants
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get("/restaurant/view/:id", async (req, res) => {
  const restaurantId = req.params.id;
  try {
    const restaurantData = await Restaurant.findOne({
      where: { id: restaurantId },
      include: [
        User,
        {
          model: Review,
          include: [User],
        },
      ],
    });
    const reviews = await Review.findAll({
      where: { restaurant_id: req.params.id },

      attributes: [[sequelize.fn("avg", sequelize.col("rating")), "avgRating"]],
    });
    const avgRating = Math.round(reviews[0].dataValues.avgRating);

    // const restaurant = restaurantData.map((restaurant) => restaurant.get({ plain: true }));
    const restaurant = restaurantData.get({ plain: true });
    //res.send({restaurant, avgRating})
    res.render("restaurant-view", {
      restaurant,
      loggedIn: req.session.loggedIn,
      avgRating,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
