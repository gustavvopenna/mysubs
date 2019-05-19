import React, { Component } from 'react'
import { SideNav, SideNavItem } from 'react-materialize'
import { Link } from 'react-router-dom'
import AuthService from '../services/Auth'
import { withRouter } from 'react-router-dom'
import toastr from 'toastr'
import logo from '../images/logo.png'

const service = new AuthService()
const background =
  'https://images.template.net/wp-content/uploads/2015/08/Solid-Free-Purple-Background-for-You.png'

class SideNavbar extends Component {
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
        <SideNav options={{ closeOnClick: true }}>
          <SideNavItem
            userView
            user={{
              image: logo,
              background: background,
              name: 'My Subs'
            }}
          />
          <Link to={'/'}>
            <SideNavItem>Home</SideNavItem>
          </Link>
          <Link to={'/suscriptions'}>
            <SideNavItem>Subscriptions</SideNavItem>
          </Link>
          <SideNavItem divider />
          <div onClick={this.handleLogout}>
            <SideNavItem>Logout</SideNavItem>
          </div>
        </SideNav>
      </div>
    )
  }
}

export default withRouter(SideNavbar)
