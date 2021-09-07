const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/User");

// @route   POST api/users
//@desc     Register a user
//@access   Public
router.post(
  "/",
  [
    // Checking to make sure that all fields required are filled
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],

  // async await to alert dev of any errors in the console and also sends error as json so I can see in Postman
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // De-constructing name, email and password to use more easily
    const { name, email, password } = req.body;

    try {
      //Checking to see if user is already in database
      let user = await User.findOne({ email });

      // If user already exists, return json stating user already exists
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
        console.log("user exissts");
      }

      // If user does not exist, we are creating a new user instance here
      user = new User({
        name,
        email,
        password,
      });

      // Using bcrypt to hash the password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // Saving the user information to the database along with the hashed password
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      // If everything is okay at this point, we are sending the json token
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      // Logging error so the dev can clearly see what is wrong as well as sending error message to be seen in Postman
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
