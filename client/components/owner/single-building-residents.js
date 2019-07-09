import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const SingleBuildingResidents = props => {
  return (
    <div>
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
      <div className="body">
        {props.unverifiedResidents.length > 0 && (
          <div>
            <h3 className="title is-6">
              Unverified Residents <span className="tag is-warning">take</span>
            </h3>

            <table className="table">
              <thead>
                <tr>
                  <th>Apartment No.</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Profile</th>
                  <th>Action</th>
                </tr>
              </thead>
              {props.unverifiedResidents.map(resident => (
                <tbody key={resident.id}>
                  <Link
                    to={`/buildings/${props.id}/residents/${resident.id}`}
                  />
                  <tr>
                    <th>{resident.number}</th>
                    <td>{resident.firstName}</td>
                    <td>{resident.lastName}</td>
                    <td>
                      <Link
                        to={`/buildings/${props.id}/residents/${resident.id}`}
                      >
                        details
                      </Link>
                    </td>
                    <td>
                      <a
                        className="button is-success"
                        onClick={() => props.verifyUser(props.id, resident.id)}
                      >
                        <span className="icon is-small">
                          <i className="fas fa-check" />
                        </span>
                        <span>Approve</span>
                      </a>

                      <a
                        className="button is-danger is-outlined"
                        onClick={() => props.rejectUser(props.id, resident.id)}
                      >
                        <span>Reject</span>
                        <span className="icon is-small">
                          <i className="fas fa-times" />
                        </span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
        <br />
        {props.verifiedResidents.length > 0 && (
          <div>
            <h3 className="title is-6">
              Verified Residents <span className="tag is-success">Ok</span>
            </h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Apartment No.</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th />
                </tr>
              </thead>

              {props.verifiedResidents.map(resident => (
                <tbody key={resident.id}>
                  <Link
                    to={`/buildings/${props.id}/residents/${resident.id}`}
                  />
                  <tr>
                    <th>{resident.number}</th>
                    <td>{resident.firstName}</td>
                    <td>{resident.lastName}</td>
                    <td>
                      <Link
                        to={`/buildings/${props.id}/residents/${resident.id}`}
                      >
                        details
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default SingleBuildingResidents
