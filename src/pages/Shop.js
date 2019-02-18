
import React, { Component } from 'react'
import AuthGuard from '../components/AuthGuard'
import Layout from '../layout/Layout'
import { inject, observer } from 'mobx-react'
import ShopCard from '../components/ShopCard'
import PropTypes from 'prop-types'

@inject('store') @observer
class Shop extends Component {

    static propTypes = {
        store: PropTypes.any
    }

    placeOrder = () => {
        if(this.props.store.CartStore.totalDetails.total) 
            this.props.history.push('/checkout')
    }

    render() {
        return (
            <AuthGuard>
                <div className='shop'>
                    <Layout>
                        <h1>Checkout Shop</h1>
                        <div className='shop-select'>
                            {
                                this.props.store.AdStore.jobAds.map(ad =>
                                    <ShopCard key={ad.id} ad={ad} />
                            )}
                        </div>
                        <div className='bottom-content'>
                            <div className='total'>
                                <h3>Total</h3>
                                <h2>${this.props.store.CartStore.totalDetails.total || '0.00'}</h2>
                            </div>
                            <button onClick={this.placeOrder} className={`place-order-button ${!this.props.store.CartStore.totalDetails.total? 'disabled': ''}`}>Place Order</button>
                        </div>
                    </Layout>
                </div>
            </AuthGuard>
        )
  }
}

export default Shop
