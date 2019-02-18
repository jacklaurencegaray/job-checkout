import { observable, computed, action, toJS } from "mobx";
import pricing from '../helpers/pricing'

class Cart {
    @observable cart = []

    constructor(rootStore) {
        this.store = rootStore
    }

    @computed
    get totalDetails() {
        const promos = this.store.AccountStore.promos
        const totalDetails = pricing.processPricing(toJS(this.cart), toJS(promos))
        return totalDetails
    }

    populateCartWithPrices() {
        const promos = this.store.AccountStore.promos
        const totalDetails = pricing.processPricing(toJS(this.cart), toJS(promos))
        this.cart = totalDetails.cartWithPrices
    }

    @action
    updateCart = (ad_id, qty) => {
        const index = this.cart.findIndex(placedAd => {
            return placedAd.ad_id === ad_id
        })

        if(index !== -1)
            this.cart[index] = { ad_id, qty }
        else
            this.cart.push({ ad_id, qty })
    }

    @action
    resetCart = () => {
        this.cart.clear()
    }

    @action
    checkoutCart = () => {
        this.cart.clear()
    }


}

export default Cart
