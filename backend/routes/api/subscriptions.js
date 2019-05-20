const express = require('express')
const router = express.Router()
const Subscription = require('../../models/Subscription')

//Read all subscriptions
router.get('/', (req, res, next) => {
  Subscription.find()
    .then(subscriptions => res.status(200).json(subscriptions))
    .catch(err => res.status(500).json(err))
})

//Read one suscription
router.get('/:id', (req, res, next) => {
  Subscription.findById(req.params.id)
    .then(subscription => res.status(200).json(subscription))
    .catch(err => res.status(500).json(err))
})

// Create subscription
router.post('/', (req, res, next) => {
  const {
    name,
    planSelected,
    price,
    paymentDate,
    period,
    paymentMethod,
    labels
  } = req.body
  Subscription.create({
    subscription: req.params.id,
    name,
    planSelected,
    price,
    paymentDate,
    period,
    paymentMethod,
    labels
  })
    .then(subscription => res.status(200).json(subscription))
    .catch(err => res.status(500).json(err))
})

//Update a subscription
router.patch('/:id', (req, res, next) => {
  Subscription.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(subscription => res.status(200).json(subscription))
    .catch(err => res.status(500).json(err))
})

//Delete a subscription
router.delete('/:id', (req, res, next) => {
  Subscription.findByIdAndDelete(req.params.id)
    .then(subscription => res.status(200).json(subscription))
    .catch(err => res.status(500).json(err))
})

module.exports = router
