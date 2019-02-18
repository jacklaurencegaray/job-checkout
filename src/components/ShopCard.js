
import React, { Component } from 'react'
import SelectableCard from './SelectableCard';
import Badge from './Badge';
import PropTypes from 'proptypes'
import { inject, observer} from 'mobx-react'
import Promo from './Promo'

@inject('store') @observer
export default class ShopCard extends Component {

  static propTypes = {
    ad: PropTypes.object.isRequired,
    store: PropTypes.any
  }
  
  constructor() {
    super()
    this.state = { selected: false }
  }

  removeDefaultValue = e => e.target.value = ''

  onQtyChange = e => {
    if(e.target.value > 0) 
      this.setState({ selected: true })
    else
      this.setState({ selected: false })
    
    this.props.store.CartStore.updateCart(this.props.ad.id, e.target.value)
  }

  getPromos = () => {
    return this.props.store.AccountStore.promos.filter(
      promo => 
        promo.payload.ad_id === this.props.ad.id
    )
  }

  render() {
    const promos = this.getPromos()
    return (  
        <SelectableCard selected={this.state.selected}>
          <div className='price'>
            <Badge>${this.props.ad.price}</Badge>
          </div>
          <h2>{this.props.ad.name}</h2>
          <br />
          <p>{this.props.ad.description}</p>
          <br />
          <input 
            name={this.props.ad.id}
            onChange={this.onQtyChange} 
            placeholder='0' 
            max='100' 
            pattern='[0-9]*' 
            inputMode='numeric' 
            type='number' />
          { promos? <Promo promos={promos} />: '' }
        </SelectableCard>
    )
  }
}
