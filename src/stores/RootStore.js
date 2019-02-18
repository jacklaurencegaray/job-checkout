
import AdStore from './AdStore'
import AccountStore from './AccountStore'
import CartStore from './CartStore'

class GlobalStore {
    constructor() {
        this.AdStore = new AdStore(this)
        this.AccountStore = new AccountStore(this)
        this.CartStore = new CartStore(this)
    }
}

export default new GlobalStore()
