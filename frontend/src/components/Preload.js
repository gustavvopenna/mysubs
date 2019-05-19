import React from 'react'
import { Row, Col, Preloader } from 'react-materialize'

export default function Preload() {
  return (
    <div style={{ marginTop: '100px' }}>
      <Row>
        <Col s={12}>
          <Preloader size="big" />
        </Col>
      </Row>
    </div>
  )
}
