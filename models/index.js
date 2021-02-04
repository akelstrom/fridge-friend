const User = require('./User');
const Inventory = require('./Inventory');
const Category = require('./Category');

// Create associations
//user to inventory 
User.hasMany(Inventory, {
  foreignKey: 'user_id'
});
//inventory belongs to user 
Inventory.belongsTo(User, {
  foreignKey: 'user_id'
});
//inventory belongs to category
Inventory.belongsTo(Category, {
  foreignKey: 'category_id'
});

module.exports = { Inventory, Category, User };