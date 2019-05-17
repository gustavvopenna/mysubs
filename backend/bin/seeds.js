require('dotenv').config()

const mongoose = require('mongoose')

const TypeSubscription = require('../models/TypeSubscription')

const typeSubscriptions = [
  {
    name: 'Netflix',
    version: {
      oneScreen: { name: '1 pantalla', price: 99 },
      twoScreen: { name: '2 pantallas FHD', price: 129 },
      fourScreen: { name: '4 pantallas 4K', price: 229 }
    }
  },
  {
    name: 'Spotify',
    version: {
      student: { name: 'Estudiante', price: 49 },
      premium: { name: 'Premium', price: 99 },
      family: { name: 'Familia', price: 149 }
    }
  },
  {
    name: 'Amazon Prime',
    version: {
      prime: { name: 'Prime', price: 899 }
    }
  },
  {
    name: 'HBO',
    version: {
      hboGo: { name: 'HBO Go', price: 99 }
    }
  },
  {
    name: 'Apple Music',
    version: {
      premium: { name: 'premium', price: 99 },
      student: { name: 'Estudiante', price: 49 },
      family: { name: 'Familia', price: 149 }
    }
  },
  {
    name: 'Dropbox',
    version: {
      plus: { name: 'Plus', price: 199 },
      professional: { name: 'Professional', price: 999 }
    }
  },
  {
    name: 'Claro Video',
    version: {
      standart: { name: 'Estandar', price: 99 },
      family: { name: 'Familia 4 pantallas', price: 249 }
    }
  }
]

//Database config
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => {
    TypeSubscription.create(typeSubscriptions)
      .then(subs => {
        console.log(`You created ${subs.length} subscriptions types`)
        mongoose.connection.close()
      })
      .catch(err => {
        console.log(err)
      })
  })
  .catch(err => {
    console.log(err)
  })
