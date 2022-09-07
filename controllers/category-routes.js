const router = require("express").Router();
const { User, Category, Restaurant, Review, RestaurantCategory } = require("../models");

//search by category
router.get("/:category", async (req, res) => {
    const categoryName = req.params.category.replace("-", " ");
    try {
      console.log(categoryName)
      const category_id = await Category.findOne({
        where: { category_name: categoryName},
        attributes: ["id"],
      });
      const response = await RestaurantCategory.findAll({
        where: { category_id: category_id.id },
        attributes: [],
        include: [{ model: Restaurant }],
      });
      const restaurants = response.map((restaurant) =>
        restaurant.restaurant.get({ plain: true })
      );
      const categeriesData = await Category.findAll({});
      const categories = categeriesData.map((category) =>
        category.get({ plain: true })
      );
      //res.status(200).json({restaurants, categories})
      res.render("homepage", { restaurants, categories });  
    } catch (err) {
      res.status(500).json(err);
    }
  })
  
module.exports = router;