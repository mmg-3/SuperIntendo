import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'

const SingleBuildingHeader = props => {
  const pathname = props.history.location.pathname

  const residentsClass = pathname.includes('residents') ? 'is-active' : '',
    newsClass = pathname.includes('news') ? 'is-active' : '',
    ticketsClass = pathname.includes('tickets') ? 'is-active' : ''

  return (
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
          <li className={residentsClass}>
            <Link to={`/buildings/${props.id}/residents`}>
              <span className="icon is-small">
                <i className="fas fa-users" aria-hidden="true" />
              </span>
              <span>Residents</span>
            </Link>
          </li>
          <li className={ticketsClass}>
            <Link to={`/buildings/${props.id}/tickets`}>
              <span className="icon is-small">
                <i className="fas fa-clipboard-check" aria-hidden="true" />
              </span>
              <span>Tickets</span>
            </Link>
          </li>
          <li className={newsClass}>
            <Link to={`buildings/${props.id}/news`}>
              <span className="icon is-small">
                <i className="far fa-newspaper" aria-hidden="true" />
              </span>
              <span>News</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

SingleBuildingHeader.propTypes = {
  id: PropTypes.number.isRequired
}
export default SingleBuildingHeader
