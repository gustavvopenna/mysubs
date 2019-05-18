import React, { Component } from 'react'
import AuthService from '../../services/Auth'
import { CardPanel, Row, Col } from 'react-materialize'

const service = new AuthService()

export default class subscriptionsList extends Component {
  state = {
    subscriptions: []
  }

  componentDidMount() {
    service
      .allTypeSubscriptions()
      .then(res => {
        const { data } = res
        this.setState({ subscriptions: data })
        console.log(this.state.subscriptions)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Subscriptions List</h1>
        {this.state.subscriptions.map(sub => {
          return (
            <Row key={sub._id}>
              <Col m={6} s={12}>
                <CardPanel className="teal">
                  <span className="white-text">{sub.name}</span>
                </CardPanel>
              </Col>
            </Row>
          )
        })}
      </div>
    )
  }
}
