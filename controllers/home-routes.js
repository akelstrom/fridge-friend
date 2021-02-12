const router = require('express').Router();

// Routes for homepage/login 

router.get('/login', (req, res) => {
    res.render("login");
  });

  router.get('/signup', (req,res) => {
      res.render('signup');
  })

module.exports = router;