const router = require("express").Router();
// const sequelize = require("sequelize");
// const Op = sequelize.Op;
const {
  Category,
  Restaurant,
  Review,
  RestaurantCategory,
  User,
} = require("../../models");


// Get All Restaurants
router.get("/", async (req, res) => {
  try {
    const restaurantData = await Restaurant.findAll({
      //attributes: ["id", "restaurant_name", "restaurant_url", "user_id"],
      order: [["created_at", "DESC"]],
      include: [
        {
          model: Review,
          attributes: [
            "id",
            "review_text",
            "rating",
            "user_id",
            "restaurant_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const restaurants = restaurantData.map((restaurant) => restaurant.get({ plain: true }));
    console.log(restaurants)
    res.send(restaurants)
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/", (req, res) => {
//   Restaurant.findAll({
//     attributes: ["id", "restaurant_name", "restaurant_url", "user_id"],
//     order: [["created_at", "DESC"]],
//     include: [
//       {
//         model: Review,
//         attributes: [
//           "id",
//           "review_text",
//           "rating",
//           "user_id",
//           "restaurant_id",
//           "created_at",
//         ],
//         include: {
//           model: User,
//           attributes: ["username"],
//         },
//       },
//       {
//         model: User,
//         attributes: ["username"],
//       },
//     ],
//   })
//     .then((dbPostData) => res.json(dbPostData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// Get a Restaurant
router.get("/:id", (req, res) => {
  Restaurant.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "post_url",
      "title",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        ),
        "vote_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST create new restaurant /api/restaurant/
router.post("/", (req, res) => {
  Restaurant.create({
    restaurant_name: req.body.restaurant_name,
    restaurant_url: req.body.restaurant_url,
    restaurant_description: req.body.restaurant_description,
    user_id: req.session.user_id,
  })
    .then((dbRestaurantData) => res.json(dbRestaurantData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT update restaurant /api/restaurant/1
router.put("/:id", async (req, res) => {
  try {
    const restaurantData = await Restaurant.update(
      {
        restaurant_name: req.body.restaurant_name,
        restaurant_url: req.body.restaurant_url,
        restaurant_description: req.body.restaurant_description,
        user_id: req.body.user_id,
      }, 
      { where: { id: req.params.id } }
    );
    if (!restaurantData) {
      res.status(400).json({ message: "No restaurant found" });
      return;
    }
    res.status(200).json(restaurantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE restaurant /api/restaurant/1
router.delete("/:id", async (req, res) => {
  try {
    const restaurantData = await Restaurant.destroy({
      where: { id: req.params.id },
    });
    if (!restaurantData) {
      res.status(400).json({ message: "No restaurant found" });
      return;
    }
    res.status(200).json(restaurantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // search restaurant by restaurant name when click on box search...
// router.get("/name", async (req, res) => {
//   try {
//     const restaurantData = await Restaurant.findAll({
//       attributes: ["restaurant_name"],
//     });
//     if (restaurantData) {
//       const restaurants = restaurantData.get({ plain: true });
//       console.log(restaurants);
//       // res.render("edit-restaurant", {
//       //   layout: "dashboard",
//       //   restaurant,
//       //   categories,
//       // });
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     res.redirect("login");
//   }
// });

module.exports = router;
