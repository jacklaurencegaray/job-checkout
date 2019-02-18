import React, { Component } from 'react'
import PropTypes from 'proptypes'

export default class SelectableCard extends Component {

  static propTypes = {
    selected: PropTypes.boolean,
    children: PropTypes.node
  }

  constructor() {
    super()
    this.state = {
      selected: false
    }
  }

  selectThisCard = () => {
    this.setState({ selected: !this.state.selected })
  }

  render() { 
    return (
      <div
          className={
              `card 
              selectable 
              ${this.props.selected || this.state.selected? 'selected': ''}`
          }>
          { this.props.children }
      </div>
    )
  }
}
