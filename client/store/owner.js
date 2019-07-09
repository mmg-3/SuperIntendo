/* eslint-disable complexity */
import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_BUILDINGS = 'GOT_BUILDINGS'
const GOT_NEWS = 'GOT_NEWS'
const GOT_TICKETS = 'GOT_TICKETS'
const APPEND_BUILDING = 'APPEND_BUILDING'
const GOT_A_BUILDING = 'GOT_A_BUILDING'
const CREATE_NEWS = 'CREATE_NEWS'
const GOT_WORKERS = 'GOT_WORKERS'

/**
 * INITIAL STATE
 */
const initialState = {
  buildings: [],
  news: [],
  tickets: [],
  selectedBuilding: {},
  workers: [],
  resident: {}
}

const BASE_BUILDINGS_URL = '/api/owner/buildings/'

/**
 * ACTION CREATORS
 */

const gotBuildings = buildings => ({type: GOT_BUILDINGS, buildings})
const appendBuilding = building => ({type: APPEND_BUILDING, building})
const gotNews = news => ({type: GOT_NEWS, news})
const gotTickets = tickets => ({type: GOT_TICKETS, tickets})
const gotABuilding = building => ({type: GOT_A_BUILDING, building})
const createNews = news => ({type: CREATE_NEWS, news})
const gotWorkers = workers => ({type: GOT_WORKERS, workers})

/**
 * THUNK CREATORS
 */

export const getABuilding = id => async dispatch => {
  try {
    const res = await axios.get(BASE_BUILDINGS_URL + id)
    dispatch(gotABuilding(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const verifyUser = (buildingId, residentId) => async dispatch => {
  try {
    await axios.put(`/api/owner/${residentId}/approve`)
    // TODO smart reload it
    // don't need to refresh whole thing, but simple for now
    dispatch(getABuilding(buildingId))
  } catch (err) {
    console.error(err)
  }
}

export const rejectUser = (buildingId, residentId) => async dispatch => {
  try {
    await axios.put(`/api/owner/${residentId}/reject`)
    // TODO smart reload it
    // don't need to refresh whole thing, but simple for now
    dispatch(getABuilding(buildingId))
  } catch (err) {
    console.error(err)
  }
}

export const createBuilding = data => async dispatch => {
  try {
    const res = await axios.post(BASE_BUILDINGS_URL, data)
    dispatch(appendBuilding(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const getBuildings = () => async dispatch => {
  try {
    const res = await axios.get(BASE_BUILDINGS_URL)
    dispatch(gotBuildings(res.data || []))
  } catch (err) {
    console.error(err)
  }
}

export const getNews = id => async dispatch => {
  try {
    const res = await axios.get(BASE_BUILDINGS_URL + id + '/news')
    dispatch(gotNews(res.data || []))
  } catch (err) {
    console.error(err)
  }
}

export const createNewsThunk = (buildingId, news) => async dispatch => {
  try {
    const {data} = await axios.post(
      BASE_BUILDINGS_URL + buildingId + '/news',
      news
    )
    dispatch(getABuilding(buildingId))
    // history.push(BASE_BUILDINGS_URL + buildingId + '/news')
  } catch (err) {
    console.error(err)
  }
}

export const getTickets = () => async dispatch => {
  try {
    const res = await axios.get(BASE_BUILDINGS_URL + 'tickets')
    dispatch(gotTickets(res.data || []))
  } catch (err) {
    console.error(err)
  }
}

export const getWorkers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/owner/workers')
    dispatch(gotWorkers(data))
  } catch (err) {
    console.error(err)
  }
}

export const verifyWorker = workerId => async dispatch => {
  try {
    await axios.put(`/api/owner/workers/${workerId}/verify`)
    dispatch(getWorkers())
  } catch (err) {
    console.error(err)
  }
}

export const rejectWorker = workerId => async dispatch => {
  try {
    await axios.put(`api/owner/workers/${workerId}/reject`)
    dispatch(getWorkers())
  } catch (err) {
    console.error(err)
  }
}

export const closeTicket = (tixId, buildId) => async dispatch => {
  try {
    await axios.put(`/api/owner/tickets/${tixId}/close`)
    dispatch(getABuilding(buildId))
  } catch (err) {
    console.error(err)
  }
}

export const approveTicket = (ticketId, buildId) => async dispatch => {
  try {
    await axios.put(`/api/owner/tickets/${ticketId}/approve`)
    dispatch(getABuilding(buildId))
  } catch (err) {
    console.error(err)
  }
}

export const rejectTicket = (ticketId, buildId) => async dispatch => {
  try {
    await axios.put(`/api/owner/tickets/${ticketId}/reject`)
    dispatch(getABuilding(buildId))
  } catch (err) {
    console.error(err)
  }
}

export const updateNews = (newsId, buildId, action) => async dispatch => {
  try {
    await axios.put(`${BASE_BUILDINGS_URL}${buildId}/news/${newsId}/${action}`)
    dispatch(getABuilding(buildId))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case APPEND_BUILDING:
      return {...state, buildings: [...state.buildings, action.building]}
    case GOT_NEWS:
      return {...state, news: action.news}
    case GOT_TICKETS:
      return {...state, tickets: action.tickets}
    case GOT_BUILDINGS:
      return {...state, buildings: action.buildings}
    case GOT_A_BUILDING:
      return {...state, selectedBuilding: action.building}
    case CREATE_NEWS:
      return {...state, news: [action.news, ...state.news]}
    case GOT_WORKERS:
      return {...state, workers: action.workers}
    default:
      return state
  }
}
