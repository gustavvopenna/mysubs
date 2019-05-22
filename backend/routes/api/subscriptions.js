const express = require('express')
const router = express.Router()
const Subscription = require('../../models/Subscription')
const User = require('../../models/User')

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
    subscription,
    name,
    planSelected,
    price,
    paymentDate,
    period,
    paymentMethod,
    labels
  } = req.body
  console.log(req, 'THIS IS THE USEEEEER')
  Subscription.create({
    owner: req.user._id,
    subscription,
    name,
    planSelected,
    price,
    paymentDate,
    period,
    paymentMethod,
    labels
  })
    .then(subscription => {
      User.findByIdAndUpdate(
        req.user._id,
        {
          $push: { subscriptions: subscription }
        },
        { new: true }
      )
        .then(res.status(200).json(subscription))
        .catch(err => res.status(500).json(err))
      res.status(200).json(subscription)
    })
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
  User.findByIdAndUpdate(
    req.user._id,
    {
      $pull: { subscriptions: req.params.id }
    },
    { new: true },
    (err, data) => {
      console.log(err)
      console.log(data)
    }
  )
    .then(user => {
      Subscription.findByIdAndDelete(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json({ msg: 'dentro del pull' }))
      // res.status(200).json(subscription)
    })
    .catch(err => res.status(500).json({ msg: 'afuera' }))

  // Subscription.findByIdAndRemove(req.params.id)
  //   .then(subscription => {
  //     User.findByIdAndUpdate(req.user._id, {
  //       $pull: { subscriptions: { $eq: req.params.id } }
  //     })
  //       .then(user => res.status(200).json(user))
  //       .catch(err => res.status(500).json({ msg: 'dentro del pull' }))
  //     // res.status(200).json(subscription)
  //   })
  //   .catch(err => res.status(500).json({ msg: 'afuera' }))

  // Subscription.findByIdAndRemove(req.params.id)
  //   .then(subscription => {
  //     User.findByIdAndUpdate(subscription.owner)
  //       .then(user => {
  //         user.subscriptions = user.subscriptions.filter(
  //           id => id !== req.params.id
  //         )
  //         res.status(200).json(subscription)
  //       })
  //       .catch(err => res.status(500).json(err))
  //   })
  //   .catch(err => res.status(500).json(err))
})

module.exports = router
