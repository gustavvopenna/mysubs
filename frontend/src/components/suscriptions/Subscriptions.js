import React, { Component } from 'react'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import AuthService from '../../services/Auth'
import Preload from '../Preload'
import CardComponent from '../suscriptions/CardComponent'
import TotalComponent from '../suscriptions/TotalComponent'
import toastr from 'toastr'

const service = new AuthService()

export default class Suscriptions extends Component {
  state = {
    userSubscriptions: []
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
      })
      .catch(err => console.log(err))
  }

  onDelete = id => {
    service.deleteSubscription(id)
    service
      .getUser()
      .then(res => {
        const { subscriptions } = res.data
        this.setState({ userSubscriptions: subscriptions })
        toastr.success('Suscripción eliminada')
      })
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.userSubscriptions) return <Preload />
    return (
      <div className='container'>
        <h4>Mis suscripciones</h4>
        <TotalComponent user={this.state.userSubscriptions} />
        {this.state.userSubscriptions.map((sub, i) => {
          return <CardComponent key={i} {...sub} handleDelete={this.onDelete} />
        })}
        <Link to={'/subscriptionsList'}>
          <Button
            floating
            fab={{ direction: 'top', toolbarEnabled: true }}
            large
            className='red'
            waves='light'
            icon='add'
          />
        </Link>
      </div>
    )
  }
}
