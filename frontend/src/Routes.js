import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import SideNavbar from './components/SideNavbar.js'
import Suscriptions from './components/suscriptions/Suscriptions'

const Routes = () => (
  <div>
    <SideNavbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/suscriptions" component={Suscriptions} />
    </Switch>
  </div>
)

export default Routes
