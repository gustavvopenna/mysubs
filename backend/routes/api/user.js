const express = require('express')
const router = express.Router()
const Subscription = require('../../models/Subscription')
const User = require('../../models/User')

//Read one user
router.get('/', (req, res, next) => {
  const userID = req.user._id
  User.findById(userID)
    .populate('subscriptions')
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
})

module.exports = router
