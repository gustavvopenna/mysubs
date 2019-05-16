import React, { Component } from 'react'
import { Button, TextInput, Card } from 'react-materialize'

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
  }

  handleSubmit = e => {}

  render() {
    return (
      <div className="container">
        <h1>Sign up</h1>
        <Card>
          <form>
            <TextInput placeholder="Name" />
            <TextInput email validate label="Email" />
            <TextInput password label="Password" />
            <Button>Sign up</Button>
          </form>
        </Card>
      </div>
    )
  }
}
