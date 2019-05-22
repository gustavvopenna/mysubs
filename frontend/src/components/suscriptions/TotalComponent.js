import React, { Component } from 'react'
import { Card } from 'react-materialize'

const monthlyPricesArr = []
// ['mensual', 'anual', 'bimestral', 'trimestral', 'semestral'],

export default class TotalComponent extends Component {
  state = {
    total: [],
    anual: true
  }
  componentDidMount() {
    const { user } = this.props
    user.map((sub, i) => {
      console.log(sub)
      if (sub.period === 'mensual') {
        // this.setState({total: {...total, sub.planSelected.price}})
        monthlyPricesArr.push(sub.planSelected.price)
      }
      if (sub.period === 'bimestral') {
        const bimestralPriceToMonth = sub.planSelected.price / 2
        monthlyPricesArr.push(bimestralPriceToMonth)
      }
      if (sub.period === 'trimestral') {
        const trimestralPriceToMonth = sub.planSelected.price / 3
        monthlyPricesArr.push(trimestralPriceToMonth)
      }
      if (sub.period === 'semestral') {
        const semestralPriceToMonth = sub.planSelected.price / 6
        monthlyPricesArr.push(semestralPriceToMonth)
      }
      if (sub.period === 'anual') {
        const anualPriceToMonth = sub.planSelected.price / 12
        monthlyPricesArr.push(anualPriceToMonth)
      }
    })
    console.log(monthlyPricesArr)
    this.setState({ total: monthlyPricesArr })
    console.log(this.state.total)
  }

  handlePrices = () => {}
  render() {
    return (
      <Card>
        {(
          this.state.total.reduce((acc, curr) => {
            return acc + curr
          }, 0) * (this.state.anual ? 12 : 1)
        ).toFixed(2)}
      </Card>
    )
  }
}
