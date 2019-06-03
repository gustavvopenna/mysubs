import React, { Component } from 'react'
import { Card } from 'react-materialize'
import Preload from '../Preload'
import AuthService from '../../services/Auth'

// ['mensual', 'anual', 'bimestral', 'trimestral', 'semestral'],
let monthlyPricesArr = []

const service = new AuthService()

export default class TotalComponent extends Component {
  state = {
    userSubscriptions: [],
    total: [],
    anualTotal: '',
    anual: false
  }

  componentWillMount() {
    monthlyPricesArr = []
  }

  componentDidMount() {
    service
      .getUser()
      .then(res => {
        const { subscriptions } = res.data
        this.setState({ userSubscriptions: subscriptions })

        subscriptions.map((sub, i) => {
          if (sub.period === 'mensual') {
            monthlyPricesArr.push(sub.planSelected.price)
          } else if (sub.period === 'bimestral') {
            const bimestralPriceToMonth = sub.planSelected.price / 2
            monthlyPricesArr.push(bimestralPriceToMonth)
          } else if (sub.period === 'trimestral') {
            const trimestralPriceToMonth = sub.planSelected.price / 3
            monthlyPricesArr.push(trimestralPriceToMonth)
          } else if (sub.period === 'semestral') {
            const semestralPriceToMonth = sub.planSelected.price / 6
            monthlyPricesArr.push(semestralPriceToMonth)
          } else if (sub.period === 'anual') {
            const anualPriceToMonth = sub.planSelected.price / 12
            monthlyPricesArr.push(anualPriceToMonth)
          }
          return monthlyPricesArr
        })
      })
      .catch(err => console.log(err))

    this.setState({ total: monthlyPricesArr })
  }

  handleSwitchPrice = () => {
    this.setState({ anual: !this.state.anual })
  }

  checkForTotal = () => {
    if (this.state.userSubscriptions.length === 0) {
      return <div>Calculando</div>
    } else {
      return (
        <Card style={{ fontWeight: 'bold' }} onClick={this.handleSwitchPrice}>
          Tu total a pagar es de ${' '}
          {(
            this.state.total.reduce((acc, curr) => {
              return acc + curr
            }, 0) * (this.state.anual ? 12 : 1)
          ).toFixed(2)}{' '}
          {this.state.anual ? 'al año.' : 'al mes.'}
        </Card>
      )
    }
  }

  render() {
    return <>{this.checkForTotal()}</>
  }
}
