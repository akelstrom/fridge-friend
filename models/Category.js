// Create the Category model here
const { Model, DataTypes } = require('sequelize');
const db_config = require('../config/connection');

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
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        item_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'inventory',
                key: 'id'
            }
        }
    },
    {
        db_config,
        freezeTableName: true,
        underscored: true,
        modelName: 'inventory'
    }
);

module.exports = Category;