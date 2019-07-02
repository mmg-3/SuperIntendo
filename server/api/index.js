const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/owner', require('./owner'))
router.use('/resident', require('./resident'))
router.use('/workers', require('./worker'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
