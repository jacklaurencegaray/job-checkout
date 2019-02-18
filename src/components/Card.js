
import React, { Component } from 'react'
import PropTypes from 'proptypes'

export default class Card extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div className='card' {...this.props}>
        { this.props.children }
      </div>
    )
  }
}
