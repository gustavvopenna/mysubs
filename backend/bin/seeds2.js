require('dotenv').config()

const mongoose = require('mongoose')

const TypeSubscription = require('../models/TypeSubscription')

const typeSubscriptions = [
  {
    name: 'Amazon Prime',
    version: {
      primeMensual: { key_name: 'primeMensual', name: 'Prime', price: 99 },
      primeAnual: { key_name: 'primeAnual', name: 'Prime Anual', price: 899 }
    },
    color: '#97AEEE',
    imageURL_color:
      'https://upload.wikimedia.org/wikipedia/commons/2/27/Amazon_Prime_logo.png',
    imageURL_black:
      'https://upload.wikimedia.org/wikipedia/commons/2/27/Amazon_Prime_logo.png'
  },
    {
    name: 'Youtube Music',
    version: {
      student: { key_name: 'student', name: 'Estudiante', price: 49 },
      premium: { key_name: 'premium', name: 'Premium', price: 99 },
      family: { key_name: 'family', name: 'Familiar', price: 149 }
    },
    color: '#282828',
    imageURL_color:
      'https://image.flaticon.com/icons/svg/1618/1618181.svg',
    imageURL_black:
      'https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_logo_musiclarge_desktop_1104x142.png'
  },
    {
    name: 'Youtube Premium',
    version: {
      student: { key_name: 'student', name: 'Estudiante', price: 69 },
      premium: { key_name: 'premium', name: 'Premium', price: 119 },
      family: { key_name: 'family', name: 'Familiar', price: 179 }
    },
    color: '#FFFFFF',
    imageURL_color:
      'https://image.flaticon.com/icons/svg/174/174883.svg',
    imageURL_black:
      'https://image.flaticon.com/icons/svg/733/733646.svg'
  },
    {
    name: 'Apple iCloud',
    version: {
      gb50: { key_name: 'gb50', name: '50 GB', price: 17 },
      gb200: { key_name: 'gb200', name: '200 GB', price: 49 },
      tb2: { key_name: 'tb2', name: '2 TB', price: 179 }
    },
    color: '#8B2EB3',
    imageURL_color:
      'https://upload.wikimedia.org/wikipedia/commons/2/27/Amazon_Prime_logo.png',
    imageURL_black:
      'https://upload.wikimedia.org/wikipedia/commons/2/27/Amazon_Prime_logo.png'
  },
    {
    name: 'Google One',
    version: {
      gb100: { key_name: 'gb100', name: '100 GB', price: 34 },
      gb200: { key_name: 'gb200', name: '200 GB', price: 49 },
      tb2: { key_name: 'tb2', name: '2 TB', price: 169 },
      tb10: { key_name: 'tb10', name: '10 TB', price: 1699 },
      tb20: { key_name: 'tb20', name: '20 TB', price: 3399 },
      tb30: { key_name: 'tb30', name: '30 TB', price: 4999 },
    },
    color: '#FFFFFF',
    imageURL_color:
      'https://techcrunch.com/wp-content/uploads/2018/05/2018-05-14_0902.png',
    imageURL_black:
      'https://techcrunch.com/wp-content/uploads/2018/05/2018-05-14_0902.png'
  },
  {
    name: 'Platzi',
    version: {
      expert: { key_name: 'expert', name: 'Expert', price: 500 },
      basic: { key_name: 'basic', name: 'Basic', price: 769 },
    },
    color: '#000000',
    imageURL_color:
      'https://static.platzi.com/static/css/logo.a76b2a87162b3b46529c30d1cb91ccc6.png',
    imageURL_black:
      'https://static.platzi.com/static/css/logo.a76b2a87162b3b46529c30d1cb91ccc6.png'
  },
    {
    name: 'Amazon Music Unlimited',
    version: {
      unlimited: { key_name: 'unlimited', name: 'Music Unlimited', price: 99 }
    },
    color: '#FFFFFF',
    imageURL_color:
      'https://static.spin.com/files/2016/10/Amazon-Music-Logo-1476279710-640x400.png',
    imageURL_black:
      'https://static.spin.com/files/2016/10/Amazon-Music-Logo-1476279710-640x400.png'
  },
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