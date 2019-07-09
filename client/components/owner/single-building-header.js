import React from 'react'
const SingleBuildingHeader = () => (
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
)

export default SingleBuildingHeader
