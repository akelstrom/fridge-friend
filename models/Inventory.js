const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Inventory model
class Inventory extends Model {}

// Create fields and columns for Inventory model
Inventory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        expiration_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        sent_expiring: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        sent_expired: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'inventory'
    }
);

module.exports = Inventory;