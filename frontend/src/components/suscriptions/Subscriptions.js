import React, { Component } from 'react'
import { Button, Card, Navbar } from 'react-materialize'
import { Link } from 'react-router-dom'
import AuthService from '../../services/Auth'
import logo from '../../images/logo.png'
import Preload from '../Preload'

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
        {this.state.userSubscriptions.map((sub, i) => {
          return (
            <h4>Subscriptions</h4>
            <ul className="collection">
              <li className="collection-item avatar">
                <img src={logo} alt="" className="circle" />
                <p style={{ textAlign: 'left' }} className="title">
                  {sub.name}
                </p>
                <p style={{ textAlign: 'left' }}>{sub.period}</p>
                <p style={{ textAlign: 'left' }}>{sub.paymentDate}</p>
                <div className="secondary-content">
                  <i className="material-icons">more_vert</i>
                </div>
              </li>
            </ul>
          )
        })}
        <Link to={'/subscriptionsList'}>
          <Button floating large className="red" waves="light" icon="add" />
        </Link>
      </div>
    )
  }
}
