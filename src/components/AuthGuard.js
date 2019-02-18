
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Redirect } from 'react-router'
import PropTypes from 'proptypes'

@inject('store') @observer
export default class AuthGuard extends Component {

  static propTypes = {
    children: PropTypes.node,
    store: PropTypes.any
  }

  render() {
    if(this.props.store.AccountStore.isLoggedIn)
        return this.props.children
    else
        return <Redirect to='/login' />
  }
}
