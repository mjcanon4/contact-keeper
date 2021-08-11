const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get the token from the header
  const token = req.header("x-auth-token");

  // Check if there is no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // If there is a token
  try {
    // Verify the token
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // Pull out the user from the token so we can use that data
    req.user = decoded.user;
    next();
  } catch (err) {
    // ERR if the token does not verify
    res.status(401).json({ msg: "Token is not valid" });
  }
};
