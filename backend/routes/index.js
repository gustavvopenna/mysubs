const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('../handlers/passport')
const isLogged = require('../middlewares')

/* GET home page */
router.get('/', (req, res, next) => {
  res.send('Hello from index')
})

router.post('/api/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
})

router.post('/api/login', (req, res, next) => {
  passport.authenticate('local', (err, user, infoError) => {
    if (err) return res.status(500).json({ err, infoError })
    if (!user) return res.status(401).json({ msg: "This user doesn't exist" })
    req.logIn(user, err => {
      if (err) return res.status(401).json(err)
      res.status(200).json(user)
    })
  })(req, res, next)
})

// router.post('/api/login', passport.authenticate('local'), (req, res, next) => {
//   res.json({ msg: req.user })
// })

router.get('/api/logout', (req, res, next) => {
  req.logout()
  console.log(res.user, ' despues')
  res.status(200).json({ user: res.user })
  // res.redirect('/')
})

router.get('/api/private', isLogged, (req, res, next) => {
  return res.status(200).json({ msg: 'You did it' })
})

module.exports = router
