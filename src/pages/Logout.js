
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

@inject('store') @observer
class Logout extends Component {
  
    static propTypes = {
        store: PropTypes.any
    }

    componentDidMount() {
        this.props.store.AccountStore.logout()
    }

    render() {
        if(!this.props.store.AccountStore.isLoggedIn)
            return <Redirect to='/login' />
        else
            return <p>Logging you out.</p>
    }
}

export default withRouter(Logout)
