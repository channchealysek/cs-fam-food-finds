const router = require("express").Router();
const sequelize = require("sequelize");
const withAuth = require("../../utils/auth");
const {
  Category,
  Restaurant,
  Review,
  RestaurantCategory,
  User,
} = require("../../models");

// Get all reviews
router.get("/", (req, res) => {
  console.log("======================");
  Review.findAll({
    attributes: [
      "id",
      "review_text",
      "rating",
      "user_id",
      "restaurant_id",
      "created_at",
    ],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all reviews by restaurant id
// /api/review/1
router.get("/:id",withAuth, async (req, res) => {
  try {
    const reviewData = await Restaurant.findByPk(req.params.id, {
      include: [
        { model: Review, include: [{ model: User, attributes: ["username"] }] },
      ],
    });

    const reviews = await Review.findAll({
      where: { restaurant_id: req.params.id },
      attributes: [[sequelize.fn("AVG", sequelize.col("rating")), "avgRating"]],
    });
    const reviewPost = reviewData.get({ plain: true });
    const avgRating = Math.round(reviews[0].dataValues.avgRating);

    //insert reviewAvg
    res.render("review", { reviewPost, avgRating });
    //res.send({reviewPost, reviews});
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a review
// /api/review
router.post("/", withAuth, async (req, res) => {
  try {
    const reviewData = await Review.create({
      review_text: req.body.review_text,
      rating: req.body.rating,
      user_id: req.session.user_id, // req.session.user_id
      restaurant_id: req.body.restaurant_id, // pull this off the url
    });
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// PUT update review /api/review/:id
router.put("/:id",  async (req, res) => {
  try {
    const reviewData = await Review.update(
      {
        review_text: req.body.review_text,
        rating: req.body.rating,
      }, 
      { where: { id: req.params.id } }
    );
    if (!reviewData) {
      res.status(400).json({ message: "No restaurant found" });
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE review /api/review/:id
router.delete("/:id", async (req, res) => {
  try {
    const reviewtData = await Review.destroy({
      where: { id: req.params.id },
    });
    if (!reviewtData) {
      res.status(400).json({ message: "No restaurant found" });
      return;
    }
    res.status(200).json(reviewtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.delete("/:id", (req, res) => {
//   Review.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbReviewData) => {
//       if (!dbReviewData) {
//         res.status(404).json({ message: "No review found with this id!" });
//         return;
//       }
//       res.json(dbReviewData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
