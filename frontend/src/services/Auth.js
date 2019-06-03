import axios from 'axios'
import toastr from 'toastr'

const baseURL = 'https://mysubsmx.herokuapp.com'

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }

  signup = form => {
    return this.service
      .post('/api/signup', form)
      .then(({ data }) => data)
      .catch(err => err)
  }

  login = form => {
    return this.service
      .post('/api/login', form)
      .then(res => res)
      .catch(err => {
        return { err: 'Incorrect user or password' }
      })
  }

  logout = () => {
    return this.service
      .get('/api/logout')
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  allTypeSubscriptions = () => {
    return this.service
      .get('/api/typesubscriptions')
      .then(response => response)
      .catch(err => {
        return { msg: 'Something went wrong' }
      })
  }

  oneTypeSubscriptions = id => {
    return this.service
      .get(`/api/typesubscriptions/${id}`)
      .then(response => response)
      .catch(err => {
        return { msg: 'Something went wrong' }
      })
  }

  newSubscriptionForm = form => {
    return this.service
      .post('/api/subscriptions', form)
      .then(response => response)
      .catch(err => {
        return(
          toastr.error('No se agregó tu suscripción, llena todos los campos')
        )
      })
  }

  getUser = () => {
    return this.service
      .get('/api/user')
      .then(response => response)
      .catch(err => {
        return { err: err }
      })
  }

  deleteSubscription = id => {
    return this.service
      .delete(`/api/subscriptions/${id}`)
      .then(response => response)
      .catch(err => {
        return { err: err }
      })
  }
}

export default AuthService
