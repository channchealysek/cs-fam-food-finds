const router = require("express").Router();
const sequelize = require("sequelize");
const {
  Category,
  Restaurant,
  Review,
  RestaurantCategory,
  User,
} = require("../../models");

router.get("/:id", async (req, res) => {
    try {
        const reviews = await Review.findAll({
            where: {restaurant_id: req.params.id},
            
            attributes: [[sequelize.fn('avg', sequelize.col('rating')),'avgRating']]
        })
        const avgRating = Math.round(reviews[0].dataValues.avgRating);

        res.status(200).json(avgRating)
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router