const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");
const Contact = require("../models/Contact");

// @route   GET api/contacts
// @desc     Get all users contacts
// @access   Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route   POST api/contacts
// @desc     Add new contact
// @access   Private
router.post("/", auth, (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id})
  } catch (err) {
    
  }
});

// @route  PUT api/contacts/:id
// @desc     Update contact
// @access   Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route     DELETE api/contacts/:id
// @desc      Update contact
// @access    Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;