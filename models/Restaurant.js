const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Restaurant model
class Restaurant extends Model {
  // static review(body, models) {
  //   return models.Review.create({
  //     user_id: body.user_id,
  //     restaurant_id: body.restaurant_id
  //   }).then(() => {
  //     return Restaurant.findOne({
  //       where: {
  //         id: body.restaurant_id
  //       },
  //       attributes: [
  //         "id",
  //         "restaurant_name",
  //         "restaurant_url",
  //         "created_at",
  //         [sequelize.literal("(SELECT COUNT(*) FROM review WHERE restaurant.id = review.restaurant_id)"), "review_count"]
  //       ],
  //       include: [
  //         {
  //           model: models.Review,
  //           attributes: ["id", "review_text", "restaurant_id", "user_id", "created_at"],
  //           include: {
  //             model: models.User,
  //             attributes: ["username"]
  //           }
  //         }
  //       ]
  //     });
  //   });
  // }
}

// create fields/columns for Restaurant model
Restaurant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    restaurant_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },
    restaurant_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "restaurant",
  }
);

module.exports = Restaurant;
