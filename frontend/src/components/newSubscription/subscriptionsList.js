import React, { Component } from 'react'
import AuthService from '../../services/Auth'
import { CardPanel, Row, Col } from 'react-materialize'
import { Link } from 'react-router-dom'

const service = new AuthService()

export default class subscriptionsList extends Component {
  state = {
    subscriptions: []
  }

  componentDidMount() {
    console.log(this.props)
    service
      .allTypeSubscriptions()
      .then(res => {
        const { data } = res
        this.setState({ subscriptions: data })
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Subscriptions List</h1>
        {this.state.subscriptions.map(sub => {
          return (
            <Link key={sub._id} to={`/subscriptionslist/${sub._id}`}>
              <Row style={{ margin: '0px' }}>
                <Col m={6} s={12}>
                  <CardPanel
                    style={{
                      backgroundColor: sub.color
                    }}
                  >
                    <span className="white-text">
                      <img src={sub.imageURL_black} alt={sub.name} width="45" />
                    </span>
                  </CardPanel>
                </Col>
              </Row>
            </Link>
          )
        })}
      </div>
    )
  }
}
