const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Inventory, Category } = require('../models');

// Routes for homepage/login 

router.get('/login', (req, res) => {
    res.render("homepage");
  });

  module.exports = router;