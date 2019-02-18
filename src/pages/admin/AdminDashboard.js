
import React, { Component } from 'react'

// Layouts
import Layout from '../../layout/Layout'

// Components
import Card from '../../components/Card'
import Badge from '../../components/Badge'
import AdminAuthGuard from '../../components/AdminAuthGuard'

// Data
import ads from '../../data/ads'
import promos from '../../data/promos'

// Helpers
import { capitalize } from '../../helpers/stringTransform'

export default class AdminDashboard extends Component {

  renderJobAds = ads => (
    <div className='adtypes'>
      <h2>Job Ads by Type</h2>
      {
        ads.map((ad, index) => (
          <Card key={index}>
            <div className='price'>
              <Badge>${ ad.price }</Badge>
            </div>
            <h3><p>{ ad.name }</p></h3>
            <p className='description'>{ad.description}</p>
          </Card>
        ))
      }
    </div>
  )

  renderPromos = promos => (
    <div className='promos'>
      <h2>Active Promos</h2>
      {
        promos.map((promo, index) => {
          return (
            <Card key={index}>
              <div className='promo-type'>
                <Badge>{ promo.promo_type }</Badge>
              </div>
              <p className='promo-name'>{ capitalize(promo.username) }</p>
              <div className='payload'>
                {
                  Object.keys(promo.payload).map((key, index) => (
                    <p key={`${key}-${index}`}>{key}: {promo.payload[key]}</p>
                  ))
                }
              </div>
          </Card>)
        })
      }    
    </div>
  )

  render() {
    return (
      <div>
        <AdminAuthGuard>
          <Layout>
            <div className='admin-dashboard'>
              { this.renderJobAds(ads) }
              { this.renderPromos(promos) }
            </div>
          </Layout>
        </AdminAuthGuard>
      </div>
    )
  }
}
