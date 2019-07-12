import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getBuildings, getWorkers} from '../../store/owner'
import {Link} from 'react-router-dom'

const AllUsers = props => {
  useEffect(() => {
    props.getBuildings()
    props.getWorkers()
  }, [])

  return (
    <div className="body">
      <h3 className="title is-5">
        All Users: Building Residents & Workers {`  `}
      </h3>
      <h3 className="title is-6">Residents {`  `}</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Building Address</th>
            <th>Number of Verified Residents</th>
            <th>Number of Residents Awaiting Approvals</th>
          </tr>
          {props.buildings.map(building => (
            <tr key={building.id}>
              <td>{building.address}</td>
              <td>
                {
                  building.apartments
                    .map(apartment =>
                      apartment.residents.filter(
                        resident => resident.isVerified
                      )
                    )
                    .flat().length
                }
              </td>
              <td>
                {building.apartments
                  .map(apartment =>
                    apartment.residents.filter(resident => !resident.isVerified)
                  )
                  .flat().length > 0 ? (
                  <Link to={`/buildings/${building.id}/residents`}>
                    {
                      building.apartments
                        .map(apartment =>
                          apartment.residents.filter(
                            resident => !resident.isVerified
                          )
                        )
                        .flat().length
                    }
                  </Link>
                ) : (
                  0
                )}
              </td>
            </tr>
          ))}
        </thead>
      </table>

      <h3 className="title is-6">Maintenance Workers {`  `}</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Number of Verified Workers</th>
            <th>Number of Workers Awaiting Approvals</th>
          </tr>
        </thead>
        <tr>
          <td>{props.workers.filter(worker => worker.isVerified).length}</td>
          <td>
            {props.workers.filter(worker => !worker.isVerified).length > 0 ? (
              <Link to="/workers">
                {props.workers.filter(worker => !worker.isVerified).length}
              </Link>
            ) : (
              0
            )}
          </td>
        </tr>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({
  buildings: state.owner.buildings,
  workers: state.owner.workers
})

const mapDispatchToProps = dispatch => ({
  getBuildings: () => dispatch(getBuildings()),
  getWorkers: () => dispatch(getWorkers())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)
