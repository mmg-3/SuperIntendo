import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_BUILDINGS = 'GOT_BUILDINGS'
const GOT_SELF = 'GOT_SELF'
/**
 * INITIAL STATE
 */
const defaultResident = {
  buildings: [],
  self: {}
}

/**
 * ACTION CREATORS
 */
const gotBuildings = buildings => ({type: GOT_BUILDINGS, buildings})
const gotSelf = self => ({type: GOT_SELF, self})
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

export const createResident = data => async dispatch => {
  try {
    const res = await axios.post('/api/resident', data)
    dispatch(gotSelf(res.data || {}))
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
      return {...state, buildings: action.buildings}
    case GOT_SELF:
      return {...state, self: action.self}
    default:
      return state
  }
}
