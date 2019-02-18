
export default [
    {
        promo_type: 'x_for_y',
        username: 'unilever',
        payload: {
            ad_id: 'classic',
            from_n: 3,
            to_n: 2,
        }
    },
    {
        promo_type: 'drop_price_if_at_least',
        username: 'apple',
        payload: {
            ad_id: 'standout',
            qty_at_least: 1,
            price_per_ad_to: 299.99
        }
    },
    {
        promo_type: 'drop_price_if_at_least',
        username: 'nike',
        payload: {
            ad_id: 'premium',
            qty_at_least: 4,
            price_per_ad_to: 379.99
        }
    },
    {
        promo_type: 'x_for_y',
        username: 'ford',
        payload: {
            ad_id: 'classic',
            from_n: 5,
            to_n: 4,
        }
    },
    {
        promo_type: 'drop_price_if_at_least',
        username: 'ford',
        payload: {
            ad_id: 'standout',
            qty_at_least: 1,
            price_per_ad_to: 309.99
        }
    },
    {
        promo_type: 'drop_price_if_at_least',
        username: 'ford',
        payload: {
            ad_id: 'premium',
            qty_at_least: 3,
            price_per_ad_to: 389.99
        }
    },
]
