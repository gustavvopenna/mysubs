import React, { Component } from 'react'
import AuthService from '../../services/Auth'
import { CardPanel, Row, Col } from 'react-materialize'
import spotifyImage from '../../images/icons/black/spotify-64.png'

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
            <Row key={sub._id} style={{ margin: '0px' }}>
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
          )
        })}
      </div>
    )
  }
}
