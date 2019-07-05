import axios from 'axios'
import history from '../history'
import {me} from './user'

/**
 * INITIAL STATE
 */
const initialState = {
  tickets: [],
  me: {}
  // assignedTix: [],
  // inProgTix: [],
  // selectedAssignedTix: {},
  // selectedInProgTix: {}
}

/**
 * BASE_URL
 */
const BASE_URL = '/api/workers/'

/**
 * ACTION TYPES
 */
const GOT_ALL_TICKETS = 'GOT_ALL_TICKETS'
const GOT_SELF = 'GOT_SELF'
// const GOT_ASSIGNED_TICKETS = 'GOT_ASSIGNED_TICKETS'
// const GOT_IN_PROGRESS_TICKETS = 'GOT_IN_PROGRESS_TICKETS'
// const GOT_ASSIGNED_TICKET = 'GOT_ASSIGNED_TICKET'
// const GOT_IN_PROGRESS_TICKET = 'GOT_IN_PROGRESS_TICKET'

/**
 * ACTION CREATORS
 */
const gotAllTickets = tickets => ({type: GOT_ALL_TICKETS, tickets})
const gotSelf = self => ({type: GOT_SELF, self})
// const gotAssignedTickets = tickets => ({type: GOT_ASSIGNED_TICKETS, tickets})
// const gotInProgressTickets = tickets => ({
//   type: GOT_IN_PROGRESS_TICKETS,
//   tickets
// })
// const gotAssignedTicket = ticket => ({type: GOT_ASSIGNED_TICKET, ticket})
// const gotInProgressTicket = ticket => ({type: GOT_IN_PROGRESS_TICKET, ticket})

/**
 * THUNK CREATORS
 */
export const getAllTickets = () => async dispatch => {
  try {
    const {data} = await axios.get(BASE_URL + 'tickets')
    dispatch(gotAllTickets(data || []))
  } catch (err) {
    console.error(err)
  }
}

export const createWorker = worker => async dispatch => {
  try {
    const {data} = await axios.post('/api/workers', worker)
    dispatch(gotSelf(data))
    dispatch(me())
    history.push('/home')
  } catch (err) {
    console.error(err)
  }
}
export const getSelf = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/workers')
    dispatch(gotSelf(data || {}))
  } catch (err) {
    console.error(err)
  }
}
// export const getAssignedTickets = workerId => async dispatch => {
//   try {
//     const {data} = await axios.get(BASE_URL + workerId + '/tickets/assigned')
//     dispatch(gotAssignedTickets(data))
//   } catch (err) {
//     console.error(err)
//   }
// }

// export const getInProgressTickets = workerId => async dispatch => {
//   try {
//     const {data} = await axios.get(BASE_URL + workerId + '/tickets/in-progress')
//     dispatch(gotInProgressTickets(data))
//   } catch (err) {
//     console.error(err)
//   }
// }

// export const getAssignedTicket = (workerId, ticketId) => async dispatch => {
//   try {
//     const {data} = await axios.get(
//       BASE_URL + workerId + '/tickets/assigned/' + ticketId
//     )
//     dispatch(gotAssignedTicket(data))
//   } catch (err) {
//     console.error(err)
//   }
// }

// export const getInProgressTicket = (workerId, ticketId) => async dispatch => {
//   try {
//     const {data} = await axios.get(
//       BASE_URL + workerId + '/tickets/in-progress/' + ticketId
//     )
//     dispatch(gotInProgressTicket(data))
//   } catch (err) {
//     console.error(err)
//   }
// }

/**
 * REDUCER
 */

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_TICKETS:
      return {...state, tickets: action.tickets}
    case GOT_SELF:
      return {...state, self: action.self}
    // case GOT_ASSIGNED_TICKETS:
    //   return {...state, assignedTix: [...state.assignedTix, action.tickets]}
    // case GOT_IN_PROGRESS_TICKETS:
    //   return {...state, inProgTix: [...state.inProgTix, action.tickets]}
    // case GOT_ASSIGNED_TICKET:
    //   return {...state, selectedAssignedTix: action.ticket}
    // case GOT_IN_PROGRESS_TICKET:
    //   return {...state, selectedInProgTix: action.ticket}
    default:
      return state
  }
}
