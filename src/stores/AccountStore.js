
import validator from 'validator'
import { observable, toJS } from 'mobx'
import promosdata from '../data/promos'

class AccountStore {
    @observable username = null
    @observable isLoggedIn = false
    @observable promos = []
    @observable error = null

    constructor(rootStore) {
        this.store = rootStore
    }

    isValid() {
        return validator.isAlphanumeric(this.username)
    }

    setUsername(username) {
        this.username = username.toLowerCase()
    }

    login() {
        if(this.isValid(this.username)) 
            this.isLoggedIn = true
        
        this.initializeUserPromo()
    }

    logout() {
        this.username = null
        this.isLoggedIn = false
        this.store.CartStore.resetCart()
        this.store.AccountStore.promos.clear()
    }

    initializeUserPromo() {
        promosdata.forEach(promo => {
            if(promo.username === toJS(this.username))
                this.promos.push(promo)
        })
    }

}

export default AccountStore
