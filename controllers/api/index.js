
const router = require("express").Router();

const userRoutes = require("./user-routes");
const restaurantRoutes = require("./restaurant-routes");
const reviewRoutes = require("./review-routes");
const averageRatingRoutes = require("./average-rating")

router.use("/users", userRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/review", reviewRoutes);
router.use("/averageRating", averageRatingRoutes);

module.exports = router;

