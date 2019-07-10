const express = require('express')
const router = express.Router()
const {Worker, Ticket} = require('../db/models')
const {uploader, imgurUpload} = require('../file_upload')

const setIO = () => {}
module.exports = {router, setIO}
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

//worker can sign up
router.post(
  '/',
  isLoggedIn,
  uploader.single('file'),
  async (req, res, next) => {
    try {
      console.log(req.body)
      let worker = Worker.findOne({
        where: {
          userId: req.user.id
        }
      })
      console.log('finding worker')
      if (worker && worker.id) {
        return res.sendStatus(409)
      }
      if (!req.file) {
        return res.status(400).send('Image is required to become a worker')
      }
      console.log('has file')

      const imageUrl = await imgurUpload(req.file)
      console.log('uploaded file', imageUrl)
      const {
        firstName,
        lastName,
        phoneNumber,
        mailingAddress1,
        mailingAddress2,
        city,
        state,
        zipcode,
        skills
      } = req.body

      worker = await Worker.create({
        firstName,
        lastName,
        phoneNumber,
        imageUrl,
        mailingAddress1,
        mailingAddress2,
        city,
        state,
        zipcode,
        skills: skills.split(','),
        userId: req.user.id
      })
      res.status(201).json(worker)
    } catch (err) {
      next(err)
    }
  }
)

router.use(isLoggedIn)
router.use(isWorker)

//get all tickets assigned to worker
router.get('/tickets', async (req, res, next) => {
  if (req.user.id) {
    try {
      const tickets = await Ticket.findAll({
        where: {
          status: 'approved'
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

//worker can see all in-progress tickets
router.get('/tickets/my-tickets', async (req, res, next) => {
  try {
    const tickets = await Ticket.findAll({
      where: {
        workerId: req.user.workerId
      }
    })
    res.json(tickets)
  } catch (err) {
    next(err)
  }
})
//worker can update status of ticket from assigned to in-progress
router.put('/tickets/select/:ticketId', async (req, res, next) => {
  try {
    const assignedTicket = await Ticket.update(
      {
        status: 'in-progress',
        workerId: req.user.workerId
      },
      {
        where: {
          id: req.params.ticketId,
          status: 'approved'
        }
      }
    )
    res.status(204).json(assignedTicket)
  } catch (err) {
    next(err)
  }
})

//worker can change status of ticket from in-progress to finished
router.put('/tickets/my-tickets/:ticketId', async (req, res, next) => {
  try {
    const inProgTicket = await Ticket.update(
      {
        status: 'finished'
      },
      {
        where: {
          workerId: req.user.workerId,
          id: req.params.ticketId,
          status: 'in-progress'
        }
      }
    )
    res.status(204).json(inProgTicket)
  } catch (err) {
    next(err)
  }
})
