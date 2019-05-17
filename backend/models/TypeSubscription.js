const mongoose = require('mongoose')

const typeSubscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    version: {
      type: {},
      require: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model('TypeSubscription', typeSubscriptionSchema)
