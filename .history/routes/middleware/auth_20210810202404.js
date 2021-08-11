const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get the token from the header
  const token = req.header("x-auth-token");
};
