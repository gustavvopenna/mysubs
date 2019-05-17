import React, { Component } from 'react'

export default class Suscriptions extends Component {
  componentWillMount() {
    const user = localStorage.getItem('loggedUser')
    if (!user) return this.props.history.push('/login')
  }

  render() {
    return (
      <div>
        <h1>Suscriptions</h1>
      </div>
    )
  }
}
