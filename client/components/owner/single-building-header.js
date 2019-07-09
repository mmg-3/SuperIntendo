import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'

const SingleBuildingHeader = props => (
  <div className="page-tab">
    <div className="tabs is-small">
      <ul>
        <li>
          <a>
            <span className="icon is-small">
              <i className="fas fa-exclamation-circle" aria-hidden="true" />
            </span>
            <span>Vacancy</span>
          </a>
        </li>
        <li className="is-active">
          <Link to={`/buildings/${props.id}/residents`}>
            <span className="icon is-small">
              <i className="fas fa-users" aria-hidden="true" />
            </span>
            <span>Residents</span>
          </Link>
        </li>
        <li>
          <Link to={`/buildings/${props.id}/tickets`}>
            <span className="icon is-small">
              <i className="fas fa-clipboard-check" aria-hidden="true" />
            </span>
            <span>Tickets</span>
          </Link>
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
)

SingleBuildingHeader.propTypes = {
  id: PropTypes.number.isRequired
}
export default SingleBuildingHeader
