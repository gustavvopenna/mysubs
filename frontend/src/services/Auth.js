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
      .catch(err => {
        return { err: 'Incorrect user or password' }
      })
  }

  logout = () => {
    return (
      this.service
        .get('/api/logout')
        .then(response => console.log(response))
        //.catch(err => ({ err: 'Logout went wrong' }))
        .catch(err => console.log(err))
    )
  }
}

export default AuthService
