const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");

// @route   POST api/users
//@desc     Register a user
//@access   Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include valid email").isemail,
  ],
  (req, res) => {
    res.send(req.body);
  }
);

module.exports = router;
