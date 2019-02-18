import React, { Component } from 'react'
import promoSummarizer from '../helpers/promoSummarizer'
import Badge from './Badge'
import PropTypes from 'proptypes'

export default class Promo extends Component {

    static propTypes = {
        promos: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className='promos'>
                { this.props.promos.map((promo, index) => (
                    <Badge key={`badge-${index}`}>{promoSummarizer(promo)}</Badge>
                )) }
            </div>
        )
    }
}
