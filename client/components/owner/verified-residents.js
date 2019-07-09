import React, {useEffect} from 'react'
import {getABuilding} from '../../store/owner'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const VerifiedResidents = props => {
  useEffect(() => {
    props.getABuilding(props.match.params.id)
  }, {})
  if (!props.selectedBuilding.id) {
    return <div>Loading...</div>
  }
  const residents = props.selectedBuilding.apartments
    .map(apartment =>
      apartment.residents.map(resident => ({
        ...resident,
        unit: apartment.unitNumber
      }))
    )
    .flat()
    .filter(resident => resident.isVerified)

  return (
    <div>
      <h3>Current Residents</h3>
      <ul>
        {residents.map(resident => {
          return (
            <Link
              key={resident.id}
              to={`/buildings/${props.selectedBuilding.id}/residents/${
                resident.id
              }`}
            >
              <li>
                {resident.firstName} {resident.lastName} - {resident.unit}
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  selectedBuilding: state.owner.selectedBuilding
})

const mapDispatchToProps = dispatch => ({
  getABuilding: id => dispatch(getABuilding(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifiedResidents)
