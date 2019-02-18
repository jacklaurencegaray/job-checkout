
import { observable } from 'mobx'
import ads from '../data/ads'

class AdStore {
    @observable jobAds = ads
}

export default AdStore
