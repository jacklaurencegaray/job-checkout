
import React, { Component } from 'react'
import logo from '../assets/svg/logo.svg'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react';
import { capitalize } from '../helpers/stringTransform'
import PropTypes from 'proptypes'

@inject('store') @observer
export default class Header extends Component {

  static propTypes = {
    store: PropTypes.any
  }

  render() {
    return (
      <div className='header'>
        <div className='header-content'>
            <img src={logo} alt='logo' className='logo'/>
            <div className='actions'>
              <h2>{ capitalize(this.props.store.AccountStore.username) || '' }</h2>
              <Link to='/logout'><h2>Logout</h2></Link>
            </div>
        </div>
      </div>
    )
  }
}
