import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {createBuilding, getBuildings} from '../../store/owner'
import {BuildingForm} from './building-form'

export const AllBuildings = props => {
  useEffect(() => {
    props.getBuildings()
  }, [])

  return (
    <div>
      <BuildingForm handleSubmit={props.createBuilding} />
      <ul>
        {props.buildings.map(building => (
          <BuildingListItem key={building.id} {...building} />
        ))}
      </ul>
    </div>
  )
}

const BuildingListItem = props => {
  return (
    <li>
      <Link to={`/buildings/${props.id}`}>{props.address}</Link>
    </li>
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
