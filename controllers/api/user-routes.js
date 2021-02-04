// User CRUD routes here
const router = require('express').Router();
const { Category, Inventory } = require('../../models');

// Dummy router method to connect model server
router.get('/', (req, res) => {
    res.send('Hit a post route!');
});

module.exports = router;