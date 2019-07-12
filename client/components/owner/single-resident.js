import React from 'react'
import {withRouter} from 'react-router-dom'
import UnverifiedResident from './unverified-resident'
import VerifiedResident from './verified-resident'

export const SingleResident = props => {
  if (!props.residents) {
    return <div>Loading...</div>
  }
  const resident = props.residents.find(
    res => +res.id === +props.match.params.residentId
  )

  if (resident.isVerified) {
    return (
      <VerifiedResident {...resident} buildingAddress={props.buildingAddress} />
    )
  }
  return (
    <UnverifiedResident
      {...resident}
      buildingAddress={props.buildingAddress}
      verifyUser={props.verifyUser}
      rejectUser={props.rejectUser}
      bId={props.match.params.id}
    />
  )
}

export default withRouter(SingleResident)
