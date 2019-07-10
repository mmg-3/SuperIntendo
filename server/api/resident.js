const router = require('express').Router()
const {
  Resident,
  Ticket,
  News,
  Apartment,
  Building,
  Owner,
  Worker
} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {uploader, imgurUpload} = require('../file_upload')
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

const getOwner = async (req, res, next) => {
  try {
    const building = await Building.findByPk(req.user.buildingId)
    req.user.ownerId = building.ownerId
    next()
  } catch (err) {
    next(err)
  }
}
// associate a user with a residency
// they only need to be logged in
// they must NOT have another residence somewhere
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    let resident = await Resident.findOne({
      where: {userId: req.user.id}
    })
    // if the resident exists, just stop
    if (resident && resident.id) {
      return res.sendStatus(409)
    }
    const {
      firstName,
      lastName,
      phoneNumber,
      imageUrl,
      mailingAddress,
      apartmentId
    } = req.body

    resident = await Resident.create({
      firstName,
      lastName,
      phoneNumber,
      imageUrl,
      mailingAddress,
      apartmentId,
      userId: req.user.id
    })

    res.status(201).json(resident)
  } catch (err) {
    next(err)
  }
})

router.use(isLoggedIn)
router.use(isResident)
router.use(getBuilding)
router.use(getOwner)
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
    res.sendStatus(204)
    await Resident.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode
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
        include: [Resident, Worker],
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
router.post('/tickets', uploader.single('file'), async (req, res, next) => {
  try {
    let photoUrl = undefined
    if (req.file) {
      photoUrl = await imgurUpload(req.file)
    }
    const ticket = await Ticket.create({
      location: req.body.location,
      formDate: req.body.formDate,
      issue: req.body.issue,
      neighbor: req.body.neighbor,
      photoUrl,
      residentId: req.user.residentId,
      ownerId: req.user.ownerId,
      apartmentId: req.user.apartmentId
    })
    res.status(201).json(ticket)
  } catch (err) {
    next(err)
  }
})

//update status from finished to confirmed
router.put('/tickets/:ticketId/confirm', async (req, res, next) => {
  try {
    await Ticket.update(
      {
        status: 'confirmed'
      },
      {
        where: {
          id: req.params.ticketId
        }
      }
    )
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

//update status from finished to rejected
router.put('/tickets/:ticketId/reject', async (req, res, next) => {
  try {
    await Ticket.update(
      {
        status: 'rejected'
      },
      {
        where: {
          id: req.params.ticketId
        }
      }
    )
    res.sendStatus(204)
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
          buildingId: req.user.buildingId,
          status: 'approved',
          expDay: {
            [Op.gte]: new Date()
          }
        }
      })
    )
  } catch (err) {
    next(err)
  }
})

//create news
router.post('/news', uploader.single('file'), async (req, res, next) => {
  try {
    let photoUrl = undefined
    if (req.file) {
      photoUrl = await imgurUpload(req.file)
    }
    const news = await News.create(
      {
        title: req.body.title,
        body: req.body.body,
        photoUrl,
        expDay: req.body.expDay,
        buildingId: req.user.buildingId,
        ownerId: req.user.ownerId,
        status: 'pending',
        residentId: req.user.residentId
      },
      {
        include: [Resident]
      }
    )
    res.status(201).json(news)
  } catch (err) {
    next(err)
  }
})

router.get('/my-building', async (req, res, next) => {
  try {
    const building = await Building.findByPk(req.user.buildingId)
    res.json(building)
  } catch (err) {
    next(err)
  }
})

router.get('/my-apartment', async (req, res, next) => {
  try {
    const apartment = await Apartment.findByPk(req.user.apartmentId)
    res.send(apartment)
  } catch (err) {
    next(err)
  }
})
