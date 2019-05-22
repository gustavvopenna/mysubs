import React, { Component } from 'react'
import { Button, Card, Navbar } from 'react-materialize'
import { Link } from 'react-router-dom'
import AuthService from '../../services/Auth'
import Preload from '../Preload'
import CardComponent from '../suscriptions/CardComponent'

const service = new AuthService()

export default class Suscriptions extends Component {
  state = {
    userSubscriptions: undefined
  }

  componentWillMount() {
    const user = localStorage.getItem('loggedUser')
    if (!user) return this.props.history.push('/login')
  }

  componentDidMount() {
    service
      .getUser()
      .then(res => {
        const { subscriptions } = res.data
        this.setState({ userSubscriptions: subscriptions })
        console.log(this.state.userSubscriptions)
      })
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.userSubscriptions) return <Preload />
    return (
      <div className="container">
        <h4>Mis suscripciones</h4>
        {this.state.userSubscriptions.map((sub, i) => {
          return <CardComponent key={i} {...sub} />
        })}
        <Link to={'/subscriptionsList'}>
          <Button
            floating="true"
            large
            className="red"
            waves="light"
            icon="add"
          />
        </Link>
      </div>
    )
  }
}
