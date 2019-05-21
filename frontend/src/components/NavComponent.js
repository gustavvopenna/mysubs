import React, { Component } from 'react'
import { SideNavItem } from 'react-materialize'
import { Link } from 'react-router-dom'
import AuthService from '../services/Auth'
import { withRouter } from 'react-router-dom'
import toastr from 'toastr'
import logo from '../images/logo.png'
import Navbar from 'react-materialize/lib/Navbar'
import NavItem from 'react-materialize/lib/NavItem'

const service = new AuthService()
const background =
  'https://images.template.net/wp-content/uploads/2015/08/Solid-Free-Purple-Background-for-You.png'

class NavComponent extends Component {
  handleLogout = e => {
    service
      .logout()
      .then(res => {
        window.localStorage.clear()
        toastr.success('Logout successful!')
        this.props.history.push('/login')
      })
      .catch(err => toastr.error(err))
  }

  render() {
    return (
      <div className="sidenav-close">
        <Navbar options={{ closeOnClick: true }} className="purple lighten-2">
          <SideNavItem
            userView
            user={{
              image: logo,
              background: background,
              name: 'My Subs'
            }}
          />
          <Link to={'/'}>
            <NavItem>Home</NavItem>
          </Link>
          <Link to={'/suscriptions'}>
            <NavItem>Subscriptions</NavItem>
          </Link>
          <NavItem divider />
          <div onClick={this.handleLogout}>
            <NavItem>Logout</NavItem>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(NavComponent)
