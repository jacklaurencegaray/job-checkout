import React, { Component, Fragment } from 'react'
import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'
import AuthGuard from '../components/AuthGuard'
import Layout from '../layout/Layout'
import adCRUD from '../helpers/crud/ad'
import promoSummarizer from '../helpers/promoSummarizer'
import Badge from '../components/Badge'
import PropTypes from 'proptypes'

@inject('store') @observer
export default class Checkout extends Component {

  static propTypes = {
    store: PropTypes.any
  }

  constructor() {
    super()
    this.state = {
      cart: [],
      totalDetails: {}
    }
  }

  componentDidMount() {
    this.props.store.CartStore.populateCartWithPrices()
    const cart = toJS(this.props.store.CartStore.cart)
    const totalDetails = toJS(this.props.store.CartStore.totalDetails)
    if(!cart || cart.length === 0)
      this.props.history.push('/')
    this.props.store.CartStore.checkoutCart()
    this.setState({ cart, totalDetails })
  }

  render() {
    return (
      <AuthGuard>
        <div className='checkout'>
          <Layout>
            <div className='content'>
              <div className='summary'>
                {
                  this.state.cart.map((cartItem, index) => {
                    const ad = adCRUD.getAd(cartItem.ad_id)
                    return (
                      <div className='order' key={index}>
                        <div className='item-detail'>
                          <div>
                            { cartItem.qty }<span className='small'>x</span>
                          </div> 
                          {
                            cartItem.promo? 
                              <Badge>{ promoSummarizer(cartItem.promo) }</Badge>
                              : ''
                          }
                        </div>
                        <div>{ ad.name } (${ cartItem.finalPricePer })</div>
                        <div>${ cartItem.finalPrice }</div>
                      </div>
                    )
                  })
                }
              </div>
              <div className='total-price'>
                <h1>Order Summary</h1>
                {
                  this.state.totalDetails.totalDiscount?
                  ( 
                    <Fragment>
                        <p>Privilege Discount: <br /><span className='big'>${this.state.totalDetails.totalDiscount}</span></p> 
                        <p>Normal Total Price: <br /><span className='big'>${this.state.totalDetails.totalNormalPrice}</span></p>
                      </Fragment>
                    ): ''
                  }
                <p>Total: <br /><span className='big'>${this.state.totalDetails.total}</span></p>
              </div>
            </div>
          </Layout>
        </div>
      </AuthGuard>
    )
  }
}
