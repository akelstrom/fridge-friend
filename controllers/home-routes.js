const router = require('express').Router();

// Routes for homepage/login 

router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('/dashboard');
    //   return;
    // }
    res.render('login');
  });

  router.get('/signup', (req,res) => {
 
      res.render('signup');
  })

module.exports = router;