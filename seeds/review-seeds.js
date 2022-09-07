const { Review } = require("../models");

const reviewdata = [
    {
        review_text: "Ok for a fake place",
        user_id: "1",
        restaurant_id: "1",
        rating: 5
    },
    {
        review_text: "Delicious, authentic Japanese food in MA",
        user_id: "1",
        restaurant_id: "2",
        rating: 4
    },
    {
        review_text: "You know, it works.",
        user_id: "2",
        restaurant_id: "3",
        rating: 3
    },
    {
        review_text: "Tex Mex close to the house",
        user_id: "3",
        restaurant_id: "4",
        rating: 3
    },
    {
        review_text: "Oooooh the shroom burger - fired to perfection!",
        user_id: "3",
        restaurant_id: "5",
        rating: 5
    },
    {
        review_text: "Agh so fake",
        user_id: "3",
        restaurant_id: "1",
        rating: 1
    },
    {
        review_text: "WHat are you talking about, imagination is the best!",
        user_id: "3",
        restaurant_id: "1",
        rating: 5
    }
  ];
  
const seedReview = () => Review.bulkCreate(reviewdata);

module.exports = seedReview;