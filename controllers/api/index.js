const router = require('express').Router();

const userRoutes = require('./user-routes');
const inventoryRoutes = require('./inventory-routes');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/inventory', inventoryRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;