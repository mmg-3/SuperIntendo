import io from 'socket.io-client'
import {canNotify, makeNotification} from './notify'
import store from './store'
import {getTickets} from './store/worker'
const socket = io(window.location.origin)
const isWorker = store => {
  const user = store.getState().user
  return user.isWorker && user.isWorkerVerified
}

socket.on('connect', () => {
  console.log('Connected!')

  socket.on('job_open', () => {
    if (isWorker(store) && canNotify()) {
      makeNotification('a new job just opened, be sure to check it out')
      store.dispatch(getTickets())
    }
  })
})

export default socket
