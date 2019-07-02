const express = require('express')
const router = express.Router()
const {Worker} = require('../db/models')
module.exports = router

const isLoggedIn = (req, res, next) => {
  if (req.user && req.user.id) {
    next()
  } else {
    res.sendStatus(401)
  }
}

const isWorker = async (req, res, next) => {
  try {
    const worker = await Worker.findOne({
      where: {
        userId: req.user.id
      }
    })
    if (worker) {
      req.user.workerId = worker.id
      next()
    } else {
      res.sendStatus(401)
    }
  } catch (err) {
    next(err)
  }
}

router.use(isLoggedIn)
router.use(isWorker)

router.get('/:workerId', async (req, res, next) => {
  try {
    const workerId = req.params.workerId
    const worker = await Worker.findOne({
      where: {
        userId: workerId
      }
    })
    res.json(worker)
  } catch (err) {
    next(err)
  }
})
