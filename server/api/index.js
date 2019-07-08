const router = require('express').Router()

const {router: workerRouter, setIO: setWorkerIO} = require('./worker')
const {router: ownerRouter, setIO: setOwnerIO} = require('./owner')

router.use('/users', require('./users'))
router.use('/owner', ownerRouter)
router.use('/resident', require('./resident'))
router.use('/buildings', require('./buildings'))
router.use('/workers', workerRouter)

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

const setIO = io => {
  setWorkerIO(io)
  setOwnerIO(io)
}

module.exports = {router, setIO}
