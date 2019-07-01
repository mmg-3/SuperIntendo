import axios from 'axios'

//initial state -> from combineReucer
//TODO: combineReducer

//action type
const GET_PROFILE_DATA = 'GET_PROFILE_DATA'
const UPDATE_PROFILE_DATA = 'UPDATE_PROFILE_DATA'

//action creator
export const getProfileData = resident => ({
  type: GET_PROFILE_DATA,
  resident
})

export const updateProfileData = updatedResident => ({
  type: UPDATE_PROFILE_DATA,
  updatedResident
})

//thunk
export const getResidentProfileThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/resident/profile')
    dispatch(getProfileData(data))
  } catch (err) {
    console.log(err)
  }
}

export const updateResidentProfileThunk = updatedResident => async dispatch => {
  try {
    const {data} = await axios.put('/api/resident/profile', updatedResident)
    dispatch(updateProfileData(data))
  } catch (err) {
    console.log(err)
  }
}

//reducer
export const residentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PROFILE_DATA:
      return action.resident
    case UPDATE_PROFILE_DATA:
      return action.updatedResident
    default:
      return state
  }
}
