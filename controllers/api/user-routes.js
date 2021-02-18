const router = require("express").Router();
const { User } = require("../../models");
const { sendWelcomeEmail } = require("../../notifications/email");

// GET /api/users
router.get("/", (req, res) => {
  // Access our User model and run .findAll() method)
  User.findAll({ attributes: { exclude: ["password"] } })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1
router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    attributes: {
      exclude: ["password"],
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json({
        id: dbUserData.id,
        username: dbUserData.username,
        email: dbUserData.email,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users -- creates a new user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      // Sends a Wecome Email to any new user that signs up
      sendWelcomeEmail(req.body.email, req.body.username);
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json({
          id: dbUserData.id,
          username: dbUserData.username,
          email: dbUserData.email,
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST /users/login login route
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.statusMessage = "No user with that email address.";
      res.status(400).end();
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

// PUT /api/users/1
router.put("/:id", (req, res) => {
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
