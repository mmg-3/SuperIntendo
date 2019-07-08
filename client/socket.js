import io from 'socket.io-client'
import {onBlur, onFocus} from './focus'
import {canNotify, makeNotification} from './notify'
import store from './store'
import {getTickets} from './store/worker'
const socket = io(window.location.origin)
const isWorker = store => {
  const user = store.getState().user
  return user.isWorker && user.isWorkerVerified
}

let outOfFocus = false
const originalTitle = document.title
onFocus(() => {
  outOfFocus = false
  document.title = originalTitle
})
onBlur(() => {
  outOfFocus = true
})

socket.on('connect', () => {
  console.log('Connected!')

  socket.on('job_open', () => {
    if (isWorker(store)) {
      // fetch new data regardless
      store.dispatch(getTickets())
      if (canNotify()) {
        makeNotification('a new job just opened, be sure to check it out')
      }
      if (outOfFocus) {
        document.title = `!!  ${originalTitle}`
      }
    }
  })
})

export default socket
