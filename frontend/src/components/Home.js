import React from 'react'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home </h1>
      <Link to={'/signup'}>
        <Button waves="light" style={{ marginRight: '5px' }}>
          Sign up
        </Button>
      </Link>
    </div>
  )
}
