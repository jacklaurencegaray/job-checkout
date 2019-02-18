
// Dependencies
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Stylings
import './assets/scss/main.scss'

// Pages
import Login from './pages/Login'
import Shop from './pages/Shop'
import Checkout from './pages/Checkout'
import Logout from './pages/Logout'
import AdminDashboard from './pages/admin/AdminDashboard'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/admin' component={AdminDashboard} />
            <Route path='*' component={Shop} />
        </Switch>
    </BrowserRouter>
)

export default Routes
