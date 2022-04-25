const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Handles the post request to the signup page
// Takes the username & password from req.body & creates a new username in the database and then returns the userId object back to the client (frontend)
router.post('/signup', async (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) {
    console.log(username, password);
    try {
      const userInDb = await User.create({ username, password });
      res.locals.userId = userInDb._id;
      return res.status(200).json(res.locals.userId);
    } catch (err) {
      return next({
        log: 'Error occurred with sign up. Try again',
        message: { err: 'Must have a username and password' },
      });
    }
  }
});

// Handles the post request to the login page
// Takes the username and password from req.body and finds the username returns a boolean, isMatch, if the password matches and returns the userId to client (frontend)
router.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  User.findOne(
    {
      username,
    },
    async (error, user) => {
      if (error || user === null) {
        return next({
          log: 'Error occurred with logging in. Try again',
          message: { err: error },
        });
      } else {
        console.log('testing');
        const isMatch = await user.comparePassword(password, next);
        if (isMatch) {
          res.locals.userId = user._id;
          return res.status(200).json(res.locals.userId);
        } else {
          return next({
            log: 'Error occurred with logging in. Try again',
            message: { err: 'Wrong username or password' },
          });
        }
      }
    }
  );
});

router.post('/oauth', async (req, res, next) => {
  const { gmail, googleId } = req.body;
  const username = gmail;
  const password = googleId;

  try {
    // check and see if username already exists in the database
    // if it doesn't
    // create a new user and set their password to googleId
    // if it does
    // check if their password matches what we have in the database

    //create a new user in mongo database and setting their user_id to be the password

    // const check = await User.findOne({ username });
    // console.log(check);
    // const user = await User.findOne({username})
    User.findOne({ username }, async (err, user) => {
      if (err) {
        return next({
          log: 'Error occured in authentication',
          message: { err: err.message },
        });
      } else if (user === null) {
        const newUser = await User.create({ username, password });
        // console.log(newUser._id);
        res.locals.userId = newUser._id;
        return res.status(200).json(res.locals.userId);
      } else {
        console.log('mongodb find one');
        const verify = await user.comparePassword(password, next);
        if (verify) {
          res.locals.userId = user._id;
          return res.status(200).json(res.locals.userId);
        } else {
          return next({
            log: 'Error occured in authentication',
            message: { err: err.message },
          });
        }
      }
    });

    // console.log(user_id);
  } catch (err) {
    return next({
      log: 'Error occurred with google logging in. Try again',
      message: {
        err: err,
      },
    });
  }
});

module.exports = router;
