const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class RestaurantCategory extends Model {}
// a way to make these unique? 
RestaurantCategory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        restaurant_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "restaurant",
                key: "id",
            },
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "category",
                key: "id"
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "restaurant_category"
      }
)
module.exports = RestaurantCategory;