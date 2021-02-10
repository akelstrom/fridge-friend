const router = require('express').Router();

// Routes for homepage/login 

router.get('/login', (req, res) => {
    res.render("login");
  });

module.exports = router;