import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getABuilding} from '../../store/owner'

export const SingleResident = props => {
  useEffect(() => {
    props.getABuilding(props.match.params.id)
  }, [])
  if (!props.selectedBuilding.id) {
    return <div>Loading...</div>
  }
  const resident = props.selectedBuilding.apartments
    .map(apartment =>
      apartment.residents.map(res => ({...res, unit: apartment.unitNumber}))
    )
    .flat()
    .filter(res => +res.id === +props.match.params.residentId)[0]

  const phoneNumber = phoneStr =>
    phoneStr.slice(0, 3) + '-' + phoneStr.slice(3, 6) + '-' + phoneStr.slice(6)

  const alternativeAddress = address => {
    if (address.length > 0) {
      return (
        address +
        ', ' +
        resident.city +
        ', ' +
        resident.state +
        ', ' +
        resident.zipcode
      )
    }
    return ''
  }
  return (
    <div>
      <h3>
        {resident.firstName} {resident.lastName}'s Profile
      </h3>
      <h4>
        {props.selectedBuilding.address} - Apartment {resident.unit}
      </h4>
      <img src={resident.photoUrl} />
      <div>
        <ul>
          <li>First Name: {resident.firstName}</li>
          <li>Last Name: {resident.lastName}</li>
          <li>Phone Number: {phoneNumber(resident.phoneNumber)}</li>
          <li>Email Address: {resident.user.email}</li>
          <li>Alternative Address: {alternativeAddress(resident.address1)}</li>
          <li>Alternative Address: {alternativeAddress(resident.address2)}</li>
          <li />
        </ul>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  selectedBuilding: state.owner.selectedBuilding
})

const mapDispatchToProps = dispatch => ({
  getABuilding: id => dispatch(getABuilding(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleResident)
