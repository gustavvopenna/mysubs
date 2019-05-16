import axios from 'axios'

const baseURL = 'http://localhost:5000/'

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
      .catch(err => err)
  }
}

export default AuthService
