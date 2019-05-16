import React from 'react'
import { SideNav, SideNavItem } from 'react-materialize'
import { Link } from 'react-router-dom'

export default function SideNavbar() {
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
        <SideNavItem href="#!second">Second Link</SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href="#!third">
          Third Link With Waves
        </SideNavItem>
      </SideNav>
    </div>
  )
}
