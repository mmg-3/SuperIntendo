import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const SingleBuildingVacancy = props => {
  return (
    <div>
      <div className="page-tab">
        <div className="tabs is-small">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fas fa-exclamation-circle" aria-hidden="true" />
                </span>
                <span>Vacancy</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-users" aria-hidden="true" />
                </span>
                <span>Residents</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-clipboard-check" aria-hidden="true" />
                </span>
                <span>Tickets</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="far fa-newspaper" aria-hidden="true" />
                </span>
                <span>News</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="body">
        {props.address} has {props.numVacant} vacant apartment(s):
      </div>
    </div>
  )
}

export default SingleBuildingVacancy
