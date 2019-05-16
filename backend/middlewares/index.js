const passport = require('passport')

function isLogged(req, res, next) {
  if (!req.isAuthenticated())
    return res.status(401).json({ msg: "You're not logged" })
  next()
}

module.exports = isLogged
