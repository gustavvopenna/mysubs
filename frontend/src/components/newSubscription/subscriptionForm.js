import React, { Component } from 'react'
import {
  Card,
  Select,
  DatePicker,
  TextInput,
  Button,
  Chip,
  Icon,
  Row,
  Col
} from 'react-materialize'
import AuthService from '../../services/Auth'
import Preload from '../Preload'
import moment from 'moment'
import { Redirect } from 'react-router-dom'

const service = new AuthService()
const periodArr = ['mensual', 'anual', 'bimestral', 'trimestral', 'semestral']
let allLabelsArr = []

export default class subscriptionForm extends Component {
  state = {
    subscription: '',
    versions: [],
    value: '',
    formatMoment: 'DD, MM, YYYY',
    oneLabel: '',
    navigate: false,
    form: {
      subscription: '',
      name: '',
      planSelected: '',
      price: 0,
      paymentDate: '',
      period: '',
      paymentMethod: '',
      labels: []
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    service
      .oneTypeSubscriptions(id)
      .then(res => {
        const { data } = res
        this.setState({ subscription: data })
        this.setState({ form: { ...this.state.form, name: data.name } })
        this.setState({ form: { ...this.state.form, subscription: id } })

        //to get price
        const versions = Object.entries(this.state.subscription.version)

        // Define initial price
        this.setState({
          form: { ...this.state.form, price: versions[0][1].price }
        })

        //to get subscription type
        this.setState({ versions: versions })
      })
      .catch(err => console.log(err))
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
    const version = event.target.value
    this.setState({
      price: this.state.subscription.version[version].price
    })
    this.setState(
      {
        form: {
          ...this.state.form,
          planSelected: this.state.subscription.version[version]
        }
      }
    )
  }

  handleDate = event => {
    this.setState({
      form: {
        ...this.state.form,
        paymentDate: moment(event).format(this.state.formatMoment)
      }
    })
  }

  //Callback after setState config helps to not have delay in updating state
  handlePeriod = event => {
    this.setState(
      { form: { ...this.state.form, period: event.target.value } }
    )
  }

  handlePaymentMethod = event => {
    this.setState(
      { form: { ...this.state.form, paymentMethod: event.target.value } }
    )
  }

  handleOneLabel = event => {
    this.setState({ oneLabel: event.target.value }
  }

  addLabel = event => {
    event.preventDefault()
    const label = this.state.oneLabel
    allLabelsArr.push(label)

    this.setState(
      {
        form: { ...this.state.form, labels: allLabelsArr }
      }
    )

    this.setState({ oneLabel: '' }
  }

  handleSubmit = event => {
    event.preventDefault()
    service
      .newSubscriptionForm(this.state.form)
      .then(response => {
        console.log('You created a new subscription!')
        if (response) this.setState({ navigate: true })
        if (response)
          this.setState({ form: { ...this.state.form, labels: [] } })
        allLabelsArr = []
      })
      .catch(err => console.log(err))
  }

  render() {
    if (this.state.navigate) {
      return <Redirect to={'/suscriptions'} />
    }
    if (!this.state.subscription) return <Preload />
    const { versions } = this.state
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <Card
            style={{
              background: this.state.subscription.color,
              color: 'white'
            }}
          >
            <h2>{this.state.subscription.name}</h2>
            <h4>${this.state.price}</h4>
          </Card>
          <Card>
            <Select
              label="Selecciona tu suscripción"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="" disabled>
                Choose your option
              </option>
              {versions.map((version, i) => {
                return (
                  <option value={version[1].key_name}>{version[1].name}</option>
                )
              })}
            </Select>

            <DatePicker
              options={{ format: 'dd/mm/yyyy' }}
              onChange={this.handleDate}
              label="Selecciona tu próxima fecha de pago"
            />

            <Select
              label="Periodo"
              value={this.state.form.period}
              onChange={this.handlePeriod}
            >
              <option value="" disabled>
                Choose your option
              </option>
              {periodArr.map(period => {
                return <option value={period}>{period}</option>
              })}
            </Select>
            <TextInput
              value={this.state.form.paymentMethod}
              onChange={this.handlePaymentMethod}
              label="Método de pago. Ej. Tarjeta Banamex 6098"
            />
            <Row>
              <Col>
                <TextInput
                  value={this.state.oneLabel}
                  label="Ingresa una etiqueta"
                  onChange={this.handleOneLabel}
                />
                <Button onClick={this.addLabel}>Añadir etiqueta</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                {this.state.form.labels.map((label, i) => {
                  return (
                    <Chip close={true} key={i}>
                      {label}
                    </Chip>
                  )
                })}
              </Col>
            </Row>
            <Button
              style={{ backgroundColor: '#37474f', color: '#fff' }}
              onClick={this.handleSubmit}
            >
              Agregar suscripción <Icon tiny>save_alt</Icon>
            </Button>
          </Card>
        </form>
      </div>
    )
  }
}
