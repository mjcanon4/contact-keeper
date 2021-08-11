const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get the token from the header
  const token = req.header("x-auth-token");

  // Check if there is no token
  if (!token) {
    return res.status(401).json({ msg: "No toke, authorization denied" });
  }
};
