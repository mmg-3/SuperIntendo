/* eslint-disable complexity */
import axios from 'axios'
import history from '../history'
import {me} from './user'
import {objToFormData} from './utils'

/**
 * ACTION TYPES
 */
const GOT_BUILDINGS = 'GOT_BUILDINGS'
const GOT_SELF = 'GOT_SELF'
const GOT_TICKETS = 'GOT_TICKETS'
const CREATE_TICKET = 'CREATE_TICKET'
const GOT_NEWS = 'GOT_NEWS'
const CREATED_NEWS = 'CREATED_NEWS'
const GOT_MY_BUILDING = 'GOT_MY_BUILDING'
const GOT_MY_APARTMENT = 'GOT_MY_APARTMENT'
/**
 * INITIAL STATE
 */
const defaultResident = {
  buildings: [],
  self: {},
  tickets: [],
  news: [],
  newsMessage: '',
  myBuilding: {},
  myApartment: {}
}

/**
 * ACTION CREATORS
 */
const gotBuildings = buildings => ({type: GOT_BUILDINGS, buildings})
const gotSelf = self => ({type: GOT_SELF, self})
const gotTickets = tickets => ({type: GOT_TICKETS, tickets})
const createTicket = ticket => ({type: CREATE_TICKET, ticket})
const gotNews = news => ({type: GOT_NEWS, news})
const createdNews = news => ({type: CREATED_NEWS, news})
const gotMyBuilding = building => ({type: GOT_MY_BUILDING, building})
const gotMyApartment = apartment => ({type: GOT_MY_APARTMENT, apartment})
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

export const getMyBuilding = () => async dispatch => {
  try {
    const {data} = await axios.get('api/resident/my-building')
    dispatch(gotMyBuilding(data))
  } catch (err) {
    console.error(err)
  }
}

export const getMyApartment = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/resident/my-apartment')
    dispatch(gotMyApartment(data))
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

export const createTicketThunk = ticket => async dispatch => {
  try {
    const formData = objToFormData(ticket)

    const {data} = await axios.post('/api/resident/tickets', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    dispatch(createTicket(data || {}))
    history.push('/tickets')
  } catch (err) {
    console.error(err)
  }
}

export const getNewsThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/resident/news')
    dispatch(gotNews(res.data || []))
  } catch (err) {
    console.error(err)
  }
}

export const createNewsThunk = news => async dispatch => {
  try {
    const formData = objToFormData(news)

    const {data} = await axios.post('/api/resident/news', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    dispatch(createdNews(data || {}))
  } catch (err) {
    console.error(err)
  }
}

export const createResident = data => async dispatch => {
  try {
    const formData = objToFormData(data)
    console.log(data)
    console.log(formData)
    const res = await axios.post('/api/resident/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    dispatch(gotSelf(res.data || {}))
    dispatch(me())
    history.push('/home')
  } catch (err) {
    console.error(err)
  }
}

export const getSelf = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/resident')
    dispatch(gotSelf(data || {}))
  } catch (err) {
    console.error(err)
  }
}

export const confirmTicket = ticketId => async dispatch => {
  try {
    await axios.put(`/api/resident/tickets/${ticketId}/confirm`)
    dispatch(getTickets())
  } catch (err) {
    console.error(err)
  }
}

export const rejectTicket = ticketId => async dispatch => {
  try {
    await axios.put(`/api/resident/tickets/${ticketId}/reject`)
    dispatch(getTickets())
  } catch (err) {
    console.error(err)
  }
}

export const updateProfile = updatedSelf => async dispatch => {
  try {
    await axios.put('/api/resident', updatedSelf)
    dispatch(getSelf())
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
    case GOT_MY_BUILDING:
      return {...state, myBuilding: action.building}
    case GOT_MY_APARTMENT:
      return {...state, myApartment: action.apartment}
    case GOT_SELF:
      return {...state, self: action.self}
    case GOT_TICKETS:
      return {...state, tickets: action.tickets}
    case GOT_NEWS:
      return {...state, news: action.news}
    case CREATED_NEWS:
      return {...state, newsMessage: 'Your post will be reviewed by an admin.'}
    case CREATE_TICKET:
      return {...state, tickets: [action.ticket, ...state.tickets]}
    default:
      return state
  }
}
