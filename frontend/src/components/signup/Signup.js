import React, { Component } from 'react'
import { TextInput, Card } from 'react-materialize'
import AuthService from '../../services/Auth'
import toastr from 'toastr'
import { Redirect } from 'react-router-dom'

const service = new AuthService()

export default class Signup extends Component {
  state = {
    form: {
      name: '',
      email: '',
      password: ''
    },
    navigate: false
  }

  handleInput = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState(form)
    //console.log(this.state.form)
  }

  handleSubmit = e => {
    e.preventDefault()
    service
      .signup(this.state.form)
      .then(res => {
        console.log(res)
        toastr.success('You successfuly created an account')
        window.localStorage.setItem('loggedUser', JSON.stringify(res.data))
        setTimeout(() => this.setState({ navigate: true }), 2000)
      })
      //.catch(err => toastr.error('Something went wrong'))
      .catch(err => console.log(err))
  }

  render() {
    if (this.state.navigate) {
      return <Redirect to={'/login'} />
    }
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
