import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getBuildings} from '../../store/resident'

const NewResident = props => {
  useEffect(() => {
    console.log('HELLO')
    props.getBuildings()
  }, [])
  if (!props.buildings.length) {
    return <div>Loading buildings...</div>
  }
  return <div>{props.buildings}</div>
}

const mapStateToProps = state => ({
  buildings: state.resident.buildings
})
const mapDispatchToProps = dispatch => ({
  getBuildings: () => dispatch(getBuildings())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewResident)
