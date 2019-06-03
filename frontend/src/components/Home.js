import React from 'react'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import './../components/home.css'
import Logo from '../images/logo.png'

export default function Home() {
  if (window.localStorage.loggedUser)
    return (
      <div className="background-home" style={{ marginTop: '90px' }}>
        <img
          src={Logo}
          alt="logo"
          width="300"
          style={{ borderRadius: '20px' }}
        />
        <h3 style={{ marginTop: '0', color: 'black' }}>
          Tu manager de suscripciones
        </h3>

        <Link to={'/suscriptions'}>
          <Button waves="light" style={{ marginRight: '5px' }}>
            Mis suscripciones
          </Button>
        </Link>
      </div>
    )
  return (
    <div className="background-home" style={{ marginTop: '90px' }}>
      <img src={Logo} alt="logo" width="300" style={{ borderRadius: '20px' }} />
      <h3 style={{ marginTop: '0', color: 'black' }}>
        Tu manager de suscripciones
      </h3>
      <Link to={'/signup'}>
        <Button waves="light" style={{ marginRight: '5px' }}>
          Sign up
        </Button>
      </Link>

      <Link to={'/login'}>
        <Button waves="light" style={{ marginRight: '5px' }}>
          Log in
        </Button>
      </Link>
    </div>
  )
}
