import axios from 'axios'
import history from '../history'
import {me} from './user'
import {objToFormData} from './utils'

/**
 * INITIAL STATE
 */
const initialState = {
  tickets: [],
  myTickets: [],
  self: {}
}

/**
 * BASE_URL
 */
const BASE_URL = '/api/workers/'

/**
 * ACTION TYPES
 */
const GOT_TICKETS = 'GOT_TICKETS'
const GOT_SELF = 'GOT_SELF'
const GOT_MY_TICKETS = 'GOT_MY_TICKETS'

/**
 * ACTION CREATORS
 */
const gotTickets = tickets => ({type: GOT_TICKETS, tickets})
const gotSelf = self => ({type: GOT_SELF, self})
const gotMyTickets = tickets => ({type: GOT_MY_TICKETS, tickets})

/**
 * THUNK CREATORS
 */
export const getTickets = () => async dispatch => {
  try {
    const {data} = await axios.get(BASE_URL + 'tickets')
    dispatch(gotTickets(data || []))
  } catch (err) {
    console.error(err)
  }
}

export const getMyTickets = () => async dispatch => {
  try {
    const {data} = await axios.get(BASE_URL + `tickets/my-tickets`)
    dispatch(gotMyTickets(data || []))
  } catch (err) {
    console.error(err)
  }
}

export const createWorker = worker => async dispatch => {
  try {
    const formData = objToFormData(worker)

    const {data} = await axios.post('/api/workers/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    dispatch(gotSelf(data))
    dispatch(me())
    history.push('/home')
  } catch (err) {
    console.error(err)
  }
}

export const getSelf = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/workers/worker')
    dispatch(gotSelf(data || {}))
  } catch (err) {
    console.error(err)
  }
}

export const updateProfile = updatedSelf => async dispatch => {
  try {
    await axios.put('/api/workers', updatedSelf)
    dispatch(getSelf())
  } catch (err) {
    console.error(err)
  }
}

export const updateSelectedTicket = ticketId => async dispatch => {
  try {
    await axios.put(BASE_URL + `tickets/${ticketId}/select`)
    dispatch(getMyTickets())
    dispatch(getTickets())
  } catch (err) {
    console.error(err)
  }
}

export const updateInProgTicket = ticketId => async dispatch => {
  try {
    await axios.put(BASE_URL + `tickets/${ticketId}/finish`)
    dispatch(getMyTickets())
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_TICKETS:
      return {...state, tickets: action.tickets}
    case GOT_SELF:
      return {...state, self: action.self}
    case GOT_MY_TICKETS:
      return {...state, myTickets: action.tickets}
    default:
      return state
  }
}
