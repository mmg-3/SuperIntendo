import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getBuildings} from '../../store/owner'
import {Link} from 'react-router-dom'

export const AllResidents = props => {
  useEffect(() => {
    props.getBuildings()
  }, [])
  const residents = props.buildings
    .map(building =>
      building.apartments.map(apartment =>
        apartment.residents.map(resident => ({
          ...resident,
          number: apartment.unitNumber,
          buildAddress: building.address,
          bId: building.id
        }))
      )
    )
    .flat(2)

  return (
    <div className="body">
      <h3 className="title is-6">
        All Residents {`  `}
        <span className="tag is-success">verified</span>
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Building Address</th>
            <th>Apartment No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {residents.filter(resident => resident.isVerified).map(resident => (
            <tr key={resident.id}>
              <td>{resident.buildAddress}</td>
              <td>{resident.number}</td>
              <td>{resident.firstName}</td>
              <td>{resident.lastName}</td>
              <td>
                <Link
                  to={`/buildings/${resident.bId}/residents/${resident.id}`}
                >
                  details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({
  buildings: state.owner.buildings
})
const mapDispatchToProps = dispatch => ({
  getBuildings: () => dispatch(getBuildings())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllResidents)
