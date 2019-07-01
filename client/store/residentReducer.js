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

export const updateProfileData = updatedProfile => ({
  type: UPDATE_PROFILE_DATA,
  updatedProfile
})

//thunk
export const getResidentProfileThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/resident')
    dispatch(getProfileData(data))
  } catch (err) {
    console.log(err)
  }
}

export const updateResidentProfileThunk = updatedProfile => async dispatch => {
  try {
    const {data} = await axios.put('/api/resident', updatedProfile)
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
    default:
      return state
  }
}
