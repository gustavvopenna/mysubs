import React, { Component } from 'react'
import { Button, TextInput, Card } from 'react-materialize'
import AuthService from '../../services/Auth'

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
    service.signup(this.state.form)
    console.log(this.state.form)
  }

  render() {
    return (
      <div className="container">
        <h1>Sign up</h1>
        <Card>
          <form>
            <TextInput
              name="name"
              placeholder="Name"
              onChange={this.handleInput}
            />
            <TextInput
              name="email"
              email
              validate
              label="Email"
              onChange={this.handleInput}
            />
            <TextInput
              name="password"
              password
              label="Password"
              onChange={this.handleInput}
            />
            <Button onClick={this.handleSubmit}>Create an account!</Button>
          </form>
        </Card>
      </div>
    )
  }
}
