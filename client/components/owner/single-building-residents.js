import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'
export const SingleBuildingResidents = props => {
  return (
    <div>
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

              <tbody>
                {props.verifiedResidents.map(resident => (
                  <tr key={resident.id}>
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
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

SingleBuildingResidents.propTypes = {
  unverifiedResidents: PropTypes.array.isRequired,
  verifiedResidents: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  verifyUser: PropTypes.func.isRequired,
  rejectUser: PropTypes.func.isRequired
}

export default SingleBuildingResidents
