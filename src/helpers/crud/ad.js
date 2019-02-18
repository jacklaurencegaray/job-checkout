
import jobPricesData from '../../data/ads'

const getAdPrice = ad_id => getAd(ad_id).price

const getAd = ad_id => jobPricesData.find(jobAd => jobAd.id === ad_id)

export default { getAdPrice, getAd }
