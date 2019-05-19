import React, { Component } from 'react'
import { Card } from 'react-materialize'
import AuthService from '../../services/Auth'
import Preload from '../Preload'

const service = new AuthService()

export default class subscriptionForm extends Component {
  state = {
    subscription: '',
    price: 0,
    versions: []
  }

  componentDidMount() {
    //console.log(this.props)
    const { id } = this.props.match.params
    service
      .oneTypeSubscriptions(id)
      .then(res => {
        const { data } = res
        this.setState({ subscription: data })
        console.log(this.state.subscription)
        //to get price
        const versions = Object.entries(this.state.subscription.version)
        console.log(versions)
        this.setState({ price: versions[0][1].price })
        console.log(this.state.price)
        //to get subscription type
        this.setState({ versions: versions })
        console.log(this.state.versions)
      })
      .catch(err => console.log(err))
  }

  render() {
    //const { price } = this.state.subscription.version.hboGo
    if (!this.state.subscription) return <Preload />
    const { versions } = this.state
    console.log(versions)
    return (
      <div className="container">
        <Card
          style={{ background: this.state.subscription.color, color: 'white' }}
        >
          <h2>{this.state.subscription.name}</h2>
          <h4>${this.state.price}</h4>
        </Card>
        {versions.map((version, i) => {
          return (
            <Card>
              <p>{version[1].name}</p>
              <p>${version[1].price}</p>
            </Card>
          )
        })}
      </div>
    )
  }
}
