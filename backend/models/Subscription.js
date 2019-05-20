const mongoose = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const subscriptionSchema = new Schema(
  {
    owner: {
      type: ObjectId,
      ref: 'User'
    },
    subscription: {
      type: ObjectId,
      ref: 'TypeSubscription'
    },
    name: {
      type: String,
      require: true
    },
    planSelected: {
      type: {},
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
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model('Subscription', subscriptionSchema)
