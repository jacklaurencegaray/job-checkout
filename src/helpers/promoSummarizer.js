
/**
 * 
 * This file is intended to summarize every promo for the user's
 * convenience.
 */

 export default promo => {
    switch(promo.promo_type) {
        case 'x_for_y':
            return `Buy ${promo.payload.from_n} get ${promo.payload.to_n}`
        case 'drop_price_if_at_least':
            if(promo.payload.qty_at_least === 1)
                return `Discounted price $${promo.payload.price_per_ad_to}`
            else
                return `Price per ad $${promo.payload.price_per_ad_to} for at least ${promo.payload.qty_at_least} slots`
        default:
            throw Error('The promo type you entered in the dataset is invalid.')
    }
 }
