import React, { Component } from 'react'
import { Button, TextInput, Card } from 'react-materialize'
import AuthService from '../../services/Auth'
import toastr from 'toastr'
import { Redirect } from 'react-router-dom'
import history from '../history'
import { withRouter } from 'react-router-dom'

const service = new AuthService()

class Login extends Component {
  state = {
    form: {
      email: '',
      password: ''
    },
    navigate: false
  }

  handleInput = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState(form)
    console.log(this.state.form)
  }

  handleSubmit = e => {
    e.preventDefault()
    service
      .login(this.state.form)
      .then(res => {
        console.log(this.props.data)
        if (res.err) return toastr.error(res.err)
        window.localStorage.setItem('loggedUser', JSON.stringify(res.data))
        toastr.success('Login successful')
        //history.push('/suscriptions')
        this.props.history.push('/suscriptions')
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <Card>
          <form onSubmit={this.handleSubmit}>
            <TextInput
              name="email"
              value={this.state.form.email}
              email
              validate
              label="Email"
              onChange={this.handleInput}
            />
            <TextInput
              name="password"
              value={this.state.form.password}
              password
              label="Password"
              onChange={this.handleInput}
            />

            <input
              type="submit"
              value="Login"
              className="waves-effect waves-light btn"
            />
          </form>
        </Card>
      </div>
    )
  }
}

export default withRouter(Login)
