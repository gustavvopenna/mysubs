const mongoose = require('mongoose')
const PLM = require('passport-local-mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      require: true,
      unique: true
    },
    subscriptions: [
      {
        type: ObjectId,
        ref: 'Subscription'
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = mongoose.model('User', userSchema)
