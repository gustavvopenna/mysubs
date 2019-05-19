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
    },
    color: {
      type: String,
      require: true
    },
    imageURL_color: {
      type: String,
      require: true
    },
    imageURL_black: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model('TypeSubscription', typeSubscriptionSchema)
