import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {createBuilding, getBuildings} from '../../store/owner'
import {BuildingForm} from './building-form'

export const AllBuildings = props => {
  useEffect(() => {
    ;(function() {
      props.getBuildings()
    })()
  }, [])

  return (
    <div>
      <BuildingForm handleSubmit={props.createBuilding} />
      <ul>
        {props.buildings.map(building => {
          return <li key={building.id}>{building.address}</li>
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  buildings: state.owner.buildings
})

const mapDispatchToProps = dispatch => ({
  getBuildings: () => dispatch(getBuildings()),
  createBuilding: data => dispatch(createBuilding(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllBuildings)
