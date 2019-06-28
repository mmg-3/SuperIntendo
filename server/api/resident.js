const router = require('express').Router()
const {Resident, Ticket, News, Building} = require('../db/models')
module.exports = router

//profile
router.get('/', async (req, res, next) => {
  try {
    res.json(await Resident.findById(req.user.id))
  } catch (err) {
    next(err)
  }
})

//update profile
router.put('/', async (req, res, next) => {
  try {
    res.status(204)
    await Resident.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        mailingAddress: req.body.mailingAddress
      },
      {
        where: {
          id: req.user.id
        }
      }
    )
  } catch (err) {
    next(err)
  }
})

//get all tickets
router.get('/tickets', async (req, res, next) => {
  try {
    res.json(
      await Ticket.findAll({
        include: [Resident],
        where: {
          residentId: req.user.id
        }
      })
    )
  } catch (err) {
    next(err)
  }
})

//create new ticket
//TODO remember to make the middleware
router.post('/tickets', async (req, res, next) => {
  try {
    res.status(201).json(
      await Ticket.create({
        location: req.body.location,
        formDate: req.body.formDate,
        issue: req.body.issue,
        neighbor: req.body.neighbor,
        photoUrl: req.body.photoUrl,
        residentId: req.user.residentId
      })
    )
  } catch (err) {
    next(err)
  }
})

//get all news
//TODO middleware req.user.buildingId
router.get('/news', async (req, res, next) => {
  try {
    res.json(
      await News.findAll({
        include: [Resident],
        where: {
          buildingId: req.building.id
        }
      })
    )
  } catch (err) {
    next(err)
  }
})

//create news
router.post('/news', async (req, res, next) => {
  try {
    res.status(201).json(
      await News.create(
        {
          title: req.body.title,
          body: req.body.body,
          photoUrl: req.body.photoUrl,
          expDay: req.body.expDay,
          residentId: req.user.residentId
        },
        {
          include: [Resident]
        }
      )
    )
  } catch (err) {
    next(err)
  }
})
