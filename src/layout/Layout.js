

import React, { Component } from 'react'
import Header from '../components/Header'

export default class Layout extends Component {
  render() {
    return (
        <div className='layout'>
            <Header />
            <div className='content'>
                { this.props.children }
            </div>
        </div>
    )
  }
}
