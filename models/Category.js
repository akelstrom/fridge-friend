// Create the Category model here
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Inventory model
class Category extends Model {}

// Create fields and columns for Inventory model
Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
);

module.exports = Category;