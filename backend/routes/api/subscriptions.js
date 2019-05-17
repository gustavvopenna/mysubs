const express = require('express')
const router = express.Router()
const TypeSubscription = require('../../models/TypeSubscription')

//Read all type subscriptions
router.get('/', (req, res, next) => {
  TypeSubscription.find()
    .then(subscriptions => res.status(200).json(subscriptions))
    .catch(err => res.status(500).json(err))
})

// Read one
router.get('/:id', (req, res, next) => {
  TypeSubscription.findById(req.params.id)
    .then(subscription => res.status(200).json(subscription))
    .catch(err => res.status(500).json(err))
})

module.exports = router
