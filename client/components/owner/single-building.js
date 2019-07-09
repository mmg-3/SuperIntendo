import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getABuilding, rejectUser, verifyUser} from '../../store/owner'
import SingleBuildingResidents from './single-building-residents'
import SingleBuildingVacancy from './single-building-vacancy'

export const SingleBuilding = props => {
  useEffect(() => {
    props.getABuilding(props.match.params.id)
  }, [])

  if (!props.id) {
    return <div>Loading...</div>
  }
  const tickets = props.apartments
    .flatMap(apartment => apartment.tickets)
    .filter(ticket => ['pending', 'confirmed'].includes(ticket.status))
  const residents = props.apartments
    .map(apartment =>
      apartment.residents.map(resident => ({
        ...resident,
        number: apartment.unitNumber
      }))
    )
    .flat()
  const verifiedResidents = residents.filter(res => res.isVerified).sort()
  const unverifiedResidents = residents.filter(res => !res.isVerified).sort()
  const numVacant = props.apartments.filter(apt => apt.residents.length > 0)
    .length
  return (
    <div>
      <SingleBuildingVacancy
        address={props.address}
        numVacant={numVacant}
        apartments={props.apartments}
      />
      <SingleBuildingResidents
        verifiedResidents={verifiedResidents}
        unverifiedResidents={unverifiedResidents}
        verifyUser={props.verifyUser}
        rejectUser={props.rejectUser}
        getABuilding={props.getABuilding}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.owner.selectedBuilding
})

const mapDispatchToProps = dispatch => ({
  getABuilding: id => dispatch(getABuilding(id)),
  verifyUser: (bId, rId) => dispatch(verifyUser(bId, rId)),
  rejectUser: (bId, rId) => dispatch(rejectUser(bId, rId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleBuilding)
