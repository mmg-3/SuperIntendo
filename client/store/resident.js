import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_BUILDINGS = 'GOT_BUILDINGS'

/**
 * INITIAL STATE
 */
const defaultResident = {
  buildings: []
}

/**
 * ACTION CREATORS
 */
const gotBuildings = buildings => ({type: GOT_BUILDINGS, buildings})

/**
 * THUNK CREATORS
 */
export const getBuildings = () => async dispatch => {
  try {
    const res = await axios.get('/api/buildings')
    dispatch(gotBuildings(res.data || {}))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultResident, action) {
  switch (action.type) {
    case GOT_BUILDINGS:
      return {...defaultResident, buildings: action.buildings}
    default:
      return state
  }
}
