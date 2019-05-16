import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import SideNavbar from './components/SideNavbar.js'

const Routes = () => (
  <div>
    <SideNavbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </div>
)

export default Routes
