
/** The choice of making this as a helper is completely 
 * subjective and I chose to put the algorithms as helpers instead
 * since the discount ideally should be implemented
 * from the backend for security purposes anyway

 * There are two types of promo types
 * First is: xForY
 * Buy x for y price for a specific jobAdType and company
 * Second is: dropPriceIfAtLeast
 * Get price discount for buying at least x quantity of jobAdType
*/
import adCRUD from '../helpers/crud/ad'
import promoCRUD from '../helpers/crud/promo'
import { pricify } from '../helpers/numberTransform'

const processPricing = (cart, promos) => {
    let cartWithPrices = []
    let totalNormalPrice = 0.00
    let totalDiscount = 0.00
    let total = 0.00

    cart.forEach(cartItem => {
        const promo = promoCRUD.getPromoForItem(promos, cartItem)
        const normalPrice = getNormalPrice(cartItem)
        let discount = 0.00
        let newCartItem = {}

        if(promo) {
            discount = normalPrice - promoDiscountCaller(promo, cartItem)
            totalDiscount += discount
            newCartItem.promo = promo
        }
        
        totalNormalPrice += normalPrice
        
        newCartItem = Object.assign(newCartItem, { 
            ...cartItem, 
            normalPrice: pricify(normalPrice),
            finalPrice: pricify(normalPrice - discount),
            normalPricePer: pricify(adCRUD.getAdPrice(cartItem.ad_id) / cartItem.qty),
            finalPricePer: pricify((normalPrice - discount) / Number(cartItem.qty))
        })

        cartWithPrices.push(newCartItem)
    })

    total = totalNormalPrice - totalDiscount

    return { 
        totalNormalPrice: pricify(totalNormalPrice), 
        totalDiscount: pricify(totalDiscount), 
        total: pricify(total),
        cartWithPrices
    }
}

const getNormalPrice = cartItem => {
    const adPrice = adCRUD.getAdPrice(cartItem.ad_id)
    return cartItem.qty * adPrice
}

const promoDiscountCaller = (promo, cartItem) => {
    switch(promo.promo_type) {
        // case 'discount_if_at_least':
        //     return discountIfAtLeast(promo, cartItem)
        case 'x_for_y':
            return xForY(promo, cartItem)
        case 'drop_price_if_at_least':
            return dropPriceIfAtLeast(promo, cartItem)
        default:
            throw Error('The promo type provided is not a valid promo')
    }
}

// const discountIfAtLeast = (promo, cartItem) => {
//     if(cartItem.qty >= promo.payload.qty_at_least) {
//         return getNormalPrice(cartItem) * promo.payload.percent
//     } else {
//         return getNormalPrice(cartItem)
//     }
// }

const xForY = (promo, cartItem) => {
    if(Number(cartItem.qty) >= promo.payload.from_n) {
        const nDiscountable = cartItem.qty / promo.payload.from_n
        const nonDiscountableQty = cartItem.qty % promo.payload.from_n
        const nonDiscountablePrice = nonDiscountableQty * adCRUD.getAdPrice(cartItem.ad_id)
        const iteratedDiscountPrice = nDiscountable * (adCRUD.getAdPrice(cartItem.ad_id) * promo.payload.to_n)
        return iteratedDiscountPrice + nonDiscountablePrice
    } else
        return getNormalPrice(cartItem)
}

const dropPriceIfAtLeast = (promo, cartItem) => {
    if(Number(cartItem.qty) >= promo.payload.qty_at_least) 
        return promo.payload.price_per_ad_to * Number(cartItem.qty)   
    else
        return getNormalPrice(cartItem)
}


export default { 
    processPricing, 
    getNormalPrice,
}
