
import React, { Component } from 'react'
import PropTypes from 'proptypes'

export default class Badge extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div className={`badge ${this.props.className || ''}`}>
        { this.props.children }
      </div>
    )
  }
}
