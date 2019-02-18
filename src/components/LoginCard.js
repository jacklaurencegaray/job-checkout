
import React, { Component } from 'react'
import PropTypes from 'proptypes'

export default class LoginCard extends Component {
  
  static propTypes = {
      children: PropTypes.any
  }

  render() {
    return (
        <div className='logincard'>
            { this.props.children }
        </div>
    )
  }
}

