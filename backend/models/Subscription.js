const mongoose = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const subscriptionSchema = new Schema({
  subscription: {
    type: ObjectId,
    ref: 'TypeSubscription'
  },
  name: {
    type: String,
    require: true
  },
  subType: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  paymentDate: {
    type: String,
    require: true
  },
  period: {
    type: String,
    enum: ['mensual', 'anual', 'bimestral', 'trimestral', 'semestral'],
    require: true
  },
  paymentMethod: String,
  labels: []
})

module.exports = mongoose.model('Subscription', subscriptionSchema)
