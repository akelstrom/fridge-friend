const router = require('express').Router();
const { User, Inventory, Category } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', /* withAuth, */ (req, res) => {
    res.render('dashboard');
});

module.exports = router;