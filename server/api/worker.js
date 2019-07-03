const express = require('express')
const router = express.Router()
const {Worker, Ticket} = require('../db/models')
module.exports = router

const isLoggedIn = (req, res, next) => {
  if (req.user && req.user.id) {
    next()
  } else {
    res.sendStatus(401)
  }
}

const isWorker = async (req, res, next) => {
  console.log('the req.user.id ', req.user.id)
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

//getall tickets assigned to worker
router.get('/:workerId/tickets', async (req, res, next) => {
  if (req.user.id === +req.params.workerId) {
    try {
      const tickets = await Ticket.findAll({
        where: {
          workerId: req.user.id
        }
      })
      res.json(tickets)
    } catch (err) {
      next(err)
    }
  } else {
    res.sendStatus(401)
  }
})

//get all tickets assigned to worker
router.get('/:workerId/tickets/assigned', async (req, res, next) => {
  if (req.user.id === +req.params.workerId) {
    try {
      const ticket = await Ticket.findAll({
        where: {
          workerId: req.user.id,
          status: 'assigned'
        }
      })
      res.json(ticket)
    } catch (err) {
      next(err)
    }
  } else {
    res.sendStatus(401)
  }
})

//get all assigned in-progress tickets assigned to worker
router.get('/:workerId/tickets/in-progress', async (req, res, next) => {
  if (req.user.id === +req.params.workerId) {
    const iPTicket = await Ticket.findAll({
      where: {
        workerId: req.user.id,
        status: 'in-progress'
      }
    })
    res.json(iPTicket)
  } else {
    res.sendStatus(401)
  }
})

//worker can see specific assigned ticket
router.get('/:workerId/assigned/:ticketId', async (req, res, next) => {
  if (req.user.id === +req.params.workerId) {
    try {
      const assignedTicket = await Ticket.findOne({
        where: {
          workerId: req.params.workerId,
          id: req.params.ticketId,
          status: 'assigned'
        }
      })
      res.json(assignedTicket)
    } catch (err) {
      next(err)
    }
  } else {
    res.sendStatus(401)
  }
})

//worker can update specific assigned ticket to in-progress
router.put('/:workerId/assigned/:ticketId', async (req, res, next) => {
  if (req.user.id === +req.params.workerId) {
    try {
      const assignedTicket = await Ticket.update(
        {
          status: 'in-progress'
        },
        {
          where: {
            workerId: req.params.workerId,
            id: req.params.ticketId,
            status: 'assigned'
          }
        }
      )
      res.json(assignedTicket)
    } catch (err) {
      next(err)
    }
  } else {
    res.sendStatus(401)
  }
})

//worker can change status from in-progress to finished
router.put('/:workerId/assigned/:ticketId', async (req, res, next) => {
  if (req.user.id === +req.params.workerId) {
    try {
      const inProgTicket = await Ticket.update(
        {
          status: 'finished'
        },
        {
          where: {
            workerId: req.params.workerId,
            id: req.params.ticketId,
            status: 'in-progress'
          }
        }
      )
      res.json(inProgTicket)
    } catch (err) {
      next(err)
    }
  } else {
    res.sendStatus(401)
  }
})
