import React from 'react'

export const SingleBuildingVacancy = props => {
  return (
    <div>
      <div className="body">
        {props.address} has {props.numVacant} vacant apartment(s):
      </div>
    </div>
  )
}

export default SingleBuildingVacancy
