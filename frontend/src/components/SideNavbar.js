import React, { Component } from 'react'
import { SideNav, SideNavItem } from 'react-materialize'
import { Link } from 'react-router-dom'
import AuthService from '../services/Auth'
import history from './history'
import { withRouter } from 'react-router-dom'
import toastr from 'toastr'

const service = new AuthService()

class SideNavbar extends Component {
  handleLogout = e => {
    service
      .logout()
      .then(res => {
        window.localStorage.clear()
        toastr.success('Logout successful!')
        //history.push('/login')
        this.props.history.push('/login')
      })
      .catch(err => toastr.error(err))
  }

  render() {
    return (
      <div>
        <SideNav options={{ closeOnClick: true }}>
          <SideNavItem
            userView
            user={{
              background: 'https://placeimg.com/640/480/tech',
              image: 'static/media/react-materialize-logo.824c6ea3.svg',
              name: 'John Doe'
            }}
          />
          <Link to={'/'}>
            <SideNavItem>Home</SideNavItem>
          </Link>
          <div onClick={this.handleLogout}>
            <SideNavItem>Logout</SideNavItem>
          </div>
          <SideNavItem divider />
          <SideNavItem subheader>Subheader</SideNavItem>
          <SideNavItem waves href="#!third">
            Third Link With Waves
          </SideNavItem>
        </SideNav>
      </div>
    )
  }
}

export default withRouter(SideNavbar)
