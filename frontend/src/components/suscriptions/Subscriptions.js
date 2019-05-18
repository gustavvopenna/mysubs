import React, { Component } from 'react'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'

export default class Suscriptions extends Component {
  componentWillMount() {
    const user = localStorage.getItem('loggedUser')
    if (!user) return this.props.history.push('/login')
  }

  render() {
    return (
      <div>
        <h1>Subscriptions</h1>
        <Link to={'/subscriptionsList'}>
          <Button floating large className="red" waves="light" icon="add" />
        </Link>
      </div>
    )
  }
}
