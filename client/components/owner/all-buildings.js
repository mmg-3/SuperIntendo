import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {createBuilding, getBuildings} from '../../store/owner'
import '../css/owner/building.scss'
import {BuildingForm} from './building-form'
export const AllBuildings = props => {
  useEffect(() => {
    props.getBuildings()
  }, [])

  if (!props.buildings.length) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <BuildingForm handleSubmit={props.createBuilding} />
      <div className="columns is-three-quarters-mobile building-container">
        {props.buildings.map(building => (
          <div className="column building-tile">
            <BuildingListItem key={building.id} {...building} />
          </div>
        ))}
      </div>
    </div>
  )
}

const BuildingListItem = props => {
  return (
    <Link to={`/buildings/${props.id}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.buildingUrl} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">{props.address}</p>
              <p className="subtitle is-6">
                {props.city} {props.state} {props.zipcode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
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
