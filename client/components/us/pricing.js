import React from 'react'
import {connect} from 'react-redux'

export const Pricing = props => {
  return (
    <div>
      <div className="pricing-table is-horizontal">
        <div className="pricing-plan">
          <div className="plan-header">Starter</div>
          <div className="plan-items">
            <div className="plan-item">20GB Storage</div>
            <div className="plan-item">20 Users</div>
            <div className="plan-item">-</div>
            <div className="plan-item">-</div>
          </div>
          <div className="plan-footer">
            <div className="plan-price">
              <span className="plan-price-amount">
                <span className="plan-price-currency">$</span>20
              </span>/month
            </div>
            <button className="button is-fullwidth" disabled="disabled">
              Current plan
            </button>
          </div>
        </div>

        <div className="pricing-plan is-warning">
          <div className="plan-header">Startups</div>
          <div className="plan-items">
            <div className="plan-item">20GB Storage</div>
            <div className="plan-item">5 Buildings</div>
            <div className="plan-item">1TB Bandwidth</div>
            <div className="plan-item">-</div>
          </div>
          <div className="plan-footer">
            <div className="plan-price">
              <span className="plan-price-amount">
                <span className="plan-price-currency">$</span>40
              </span>/month
            </div>
            <button className="button is-fullwidth">Choose</button>
          </div>
        </div>

        <div className="pricing-plan is-active">
          <div className="plan-header">Growing Team</div>
          <div className="plan-items">
            <div className="plan-item">200GB Storage</div>
            <div className="plan-item">20 Buildings</div>
            <div className="plan-item">1TB Bandwidth</div>
            <div className="plan-item">200 Users</div>
          </div>
          <div className="plan-footer">
            <div className="plan-price">
              <span className="plan-price-amount">
                <span className="plan-price-currency">$</span>60
              </span>/month
            </div>
            <button className="button is-fullwidth">Choose</button>
          </div>
        </div>

        <div className="pricing-plan is-danger">
          <div className="plan-header">Enterprise</div>
          <div className="plan-items">
            <div className="plan-item">2TB Storage</div>
            <div className="plan-item">100 Buildings</div>
            <div className="plan-item">1TB Bandwidth</div>
            <div className="plan-item">1000 Users</div>
          </div>
          <div className="plan-footer">
            <div className="plan-price">
              <span className="plan-price-amount">
                <span className="plan-price-currency">$</span>100
              </span>/month
            </div>
            <button className="button is-fullwidth">Choose</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Pricing)