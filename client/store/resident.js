import axios from 'axios'
import history from '../history'
import {me} from './user'

/**
 * ACTION TYPES
 */
const GOT_BUILDINGS = 'GOT_BUILDINGS'
const GOT_SELF = 'GOT_SELF'
const GOT_TICKETS = 'GOT_TICKETS'
/**
 * INITIAL STATE
 */
const defaultResident = {
  buildings: [],
  self: {},
  tickets: []
}

/**
 * ACTION CREATORS
 */
const gotBuildings = buildings => ({type: GOT_BUILDINGS, buildings})
const gotSelf = self => ({type: GOT_SELF, self})
const gotTickets = tickets => ({type: GOT_TICKETS, tickets})
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

export const getTickets = () => async dispatch => {
  try {
    const res = await axios.get('/api/resident/tickets')
    dispatch(gotTickets(res.data || []))
  } catch (err) {
    console.error(err)
  }
}

export const createResident = data => async dispatch => {
  try {
    const res = await axios.post('/api/resident', data)
    dispatch(gotSelf(res.data || {}))
    dispatch(me())
    history.push('/home')
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
    case GOT_TICKETS:
      return {...state, tickets: action.tickets}
    default:
      return state
  }
}
