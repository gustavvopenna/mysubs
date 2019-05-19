require('dotenv').config()

const mongoose = require('mongoose')

const TypeSubscription = require('../models/TypeSubscription')

const typeSubscriptions = [
  {
    name: 'Netflix',
    version: {
      oneScreen: { key_name: 'oneScreen', name: '1 pantalla', price: 99 },
      twoScreen: { key_name: 'twoScreen', name: '2 pantallas FHD', price: 129 },
      fourScreen: { key_name: 'fourScreen', name: '4 pantallas 4K', price: 229 }
    },
    color: '#E50914',
    imageURL_color: 'https://image.flaticon.com/icons/svg/870/870910.svg',
    imageURL_black: 'https://image.flaticon.com/icons/svg/732/732082.svg'
  },
  {
    name: 'Spotify',
    version: {
      student: { key_name: 'student', name: 'Estudiante', price: 49 },
      premium: { key_name: 'premium', name: 'Premium', price: 99 },
      family: { key_name: 'family', name: 'Familia', price: 149 }
    },
    color: '#1ED761',
    imageURL_color: 'https://image.flaticon.com/icons/png/512/226/226773.png',
    imageURL_black: 'https://image.flaticon.com/icons/svg/152/152756.svg'
  },
  {
    name: 'Amazon Prime',
    version: {
      prime: { key_name: 'prime', name: 'Prime', price: 899 }
    },
    color: '#F9F9F9',
    imageURL_color:
      'https://upload.wikimedia.org/wikipedia/commons/2/27/Amazon_Prime_logo.png',
    imageURL_black:
      'https://upload.wikimedia.org/wikipedia/commons/2/27/Amazon_Prime_logo.png'
  },
  {
    name: 'HBO',
    version: {
      hboGo: { key_name: 'hboGo', name: 'HBO Go', price: 99 }
    },
    color: '#000',
    imageURL_color: 'https://image.flaticon.com/icons/svg/870/870903.svg',
    imageURL_black: 'https://image.flaticon.com/icons/svg/871/871005.svg'
  },
  {
    name: 'Apple Music',
    version: {
      premium: { key_name: 'premium', name: 'premium', price: 99 },
      student: { key_name: 'student', name: 'Estudiante', price: 49 },
      family: { key_name: 'family', name: 'Familia', price: 149 }
    },
    color: '#F9F9F9',
    imageURL_color: 'https://image.flaticon.com/icons/svg/1384/1384061.svg',
    imageURL_black: 'https://image.flaticon.com/icons/svg/1384/1384029.svg'
  },
  {
    name: 'Dropbox',
    version: {
      plus: { key_name: 'plus', name: 'Plus', price: 199 },
      professional: {
        key_name: 'professional',
        name: 'Professional',
        price: 999
      }
    },
    color: '#007BE8',
    imageURL_color: 'https://image.flaticon.com/icons/svg/174/174845.svg',
    imageURL_black: 'https://image.flaticon.com/icons/svg/25/25250.svg'
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
