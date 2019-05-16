import React, { Component } from 'react'
import { Button, TextInput, Card } from 'react-materialize'
import AuthService from '../../services/Auth'
import toastr from 'toastr'

const service = new AuthService()

export default class Signup extends Component {
  state = {
    form: {
      name: '',
      email: '',
      password: ''
    }
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
      .signup(this.state.form)
      .then(res => {
        console.log(res)
        toastr.success('You successfuly created an account')
        window.localStorage.setItem('loggedUser', JSON.stringify(res.data))
      })
      .catch(err => toastr.error('Something went wrong'))
  }

  render() {
    return (
      <div className="container">
        <h1>Sign up</h1>
        <Card>
          <form onSubmit={this.handleSubmit}>
            <TextInput
              name="name"
              value={this.state.form.name}
              placeholder="Name"
              onChange={this.handleInput}
            />
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
              value="Create an account"
              className="waves-effect waves-light btn"
            />
          </form>
        </Card>
      </div>
    )
  }
}
