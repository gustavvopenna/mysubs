import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import SideNavbar from './components/SideNavbar.js'
import Subscriptions from './components/suscriptions/Subscriptions'
import subscriptionsList from './components/newSubscription/subscriptionsList'

const Routes = () => (
  <div>
    <SideNavbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/suscriptions" component={Subscriptions} />
      <Route exact path="/subscriptionslist" component={subscriptionsList} />
    </Switch>
  </div>
)

export default Routes
