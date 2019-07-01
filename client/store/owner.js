import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_BUILDINGS = 'GOT_BUILDINGS'
const GOT_NEWS = 'GOT_NEWS'
const GOT_TICKETS = 'GOT_TICKETS'
const APPEND_BUILDING = 'APPEND_BUILDING'

/**
 * INITIAL STATE
 */
const initialState = {
  buildings: [],
  news: [],
  tickets: []
}

const BASE_BUILDINGS_URL = '/api/owner/buildings/'

/**
 * ACTION CREATORS
 */

const gotBuildings = buildings => ({type: GOT_BUILDINGS, buildings})
const appendBuilding = building => ({type: APPEND_BUILDING, building})
const gotNews = news => ({type: GOT_NEWS, news})
const gotTickets = tickets => ({type: GOT_TICKETS, tickets})

/**
 * THUNK CREATORS
 */

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

export const getTickets = () => async dispatch => {
  try {
    const res = await axios.get(BASE_BUILDINGS_URL + 'tickets')
    dispatch(gotTickets(res.data || []))
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
    default:
      return state
  }
}
