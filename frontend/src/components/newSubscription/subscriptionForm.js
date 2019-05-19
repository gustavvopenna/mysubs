import React, { Component } from 'react'
import { Card, Select, DatePicker } from 'react-materialize'
import AuthService from '../../services/Auth'
import Preload from '../Preload'
import moment from 'moment'

const service = new AuthService()

export default class subscriptionForm extends Component {
  state = {
    subscription: '',
    versions: [],
    value: '3',
    formatMoment: 'DD, MM, YYYY',
    form: {
      price: 0,
      date: ''
    }
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
        // const { price } = this.state.form
        this.setState({ price: versions[0][1].price })
        console.log(this.state.price)
        //to get subscription type
        this.setState({ versions: versions })
        console.log(this.state.versions)
      })
      .catch(err => console.log(err))
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
    // console.log(this.state.subscription)
    // console.log(event.target.value)
    // console.log(this.state.versions)
    const version = event.target.value
    console.log(event.target.value)
    console.log(this.state.subscription.version[version])
    this.setState({
      price: this.state.subscription.version[version].price
    })
  }

  handleDate = event => {
    console.log(event)
    this.setState({
      form: { date: moment(event).format(this.state.formatMoment) }
    })
    console.log(this.state.form.date)
  }

  render() {
    //const { price } = this.state.subscription.version.hboGo
    if (!this.state.subscription) return <Preload />
    const { versions } = this.state
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
        <Select
          label="Selecciona tu suscripción"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <option value="" disabled>
            Choose your option
          </option>
          {versions.map((version, i) => {
            //console.log(this.state.subscription.version, '  wtFFFF')
            return (
              <option value={version[1].key_name}>{version[1].name}</option>
            )
          })}
        </Select>
        <DatePicker
          options={{ format: 'dd/mm/yyyy' }}
          onChange={this.handleDate}
          label="Fecha"
        />
      </div>
    )
  }
}
