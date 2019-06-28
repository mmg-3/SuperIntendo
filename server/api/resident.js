const router = require('express').Router()
const {Resident, Ticket, News, Apartment} = require('../db/models')
module.exports = router

const isLoggedIn = (req, res, next) => {
  if (req.user && req.user.id) {
    next()
  } else {
    res.sendStatus(401)
  }
}
const isResident = async (req, res, next) => {
  try {
    const resident = await Resident.findOne({
      where: {
        userId: req.user.id
      }
    })
    if (resident) {
      req.user.residentId = resident.id
      req.user.apartmentId = resident.apartmentId
      next()
    } else {
      res.sendStatus(401)
    }
  } catch (err) {
    next(err)
  }
}

const getBuilding = async (req, res, next) => {
  try {
    const apartment = await Apartment.findOne({
      where: {
        id: req.user.apartmentId
      }
    })
    if (apartment) {
      req.user.buildingId = apartment.buildingId
      next()
    } else {
      res.status(401).send('YOU ARE HOMELESS, GET OUT')
    }
  } catch (err) {
    next(err)
  }
}
router.use(isLoggedIn)
router.use(isResident)
router.use(getBuilding)
//profile
router.get('/', async (req, res, next) => {
  try {
    res.json(await Resident.findByPk(req.user.residentId))
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
          id: req.user.residentId
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
          residentId: req.user.residentId
        }
      })
    )
  } catch (err) {
    next(err)
  }
})

//create new ticket
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
router.get('/news', async (req, res, next) => {
  try {
    res.json(
      await News.findAll({
        include: [Resident],
        where: {
          buildingId: req.user.buildingId
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
          buildingId: req.user.buildingId,
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
