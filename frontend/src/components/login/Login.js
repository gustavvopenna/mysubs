import React, { Component } from 'react'
import { Button, TextInput, Card } from 'react-materialize'
import AuthService from '../../services/Auth'

const service = new AuthService()

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
      </div>
    )
  }
}
