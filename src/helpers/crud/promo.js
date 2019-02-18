
const getPromoForItem = (promos, cartItem) => {
    return promos.find(promo => promo.payload.ad_id === cartItem.ad_id)
}

export default {
    getPromoForItem
}
