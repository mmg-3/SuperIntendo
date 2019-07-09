const router = require('express').Router()
const {
  Resident,
  Ticket,
  News,
  Building,
  Apartment,
  Owner,
  Worker,
  User
} = require('../db/models')

let io

const isLoggedIn = (req, res, next) => {
  if (req.user && req.user.id) {
    next()
  } else {
    res.sendStatus(401)
  }
}

const isOwner = async (req, res, next) => {
  try {
    const owner = await Owner.findOne({
      where: {
        userId: req.user.id
      },
      include: [Building]
    })
    if (owner) {
      req.user.ownerId = owner.id
      req.user.buildingIds = owner.buildings.map(building => building.id)
      next()
    } else {
      res.sendStatus(401)
    }
  } catch (err) {
    next(err)
  }
}

const buildingBelongsTo = (req, res, next) => {
  try {
    const buildingId = req.params.buildingId
    if (req.user.buildingIds.includes(+buildingId)) {
      next()
    } else {
      res.sendStatus(401)
    }
  } catch (err) {
    next(err)
  }
}
const setIO = IO => (io = IO)
module.exports = {router, setIO}

router.use(isLoggedIn)
router.use(isOwner)

//get buildings
router.get('/buildings', async (req, res, next) => {
  try {
    res.json(
      await Building.findAll({
        where: {ownerId: req.user.ownerId}
      })
    )
  } catch (err) {
    next(err)
  }
})
//add new building
router.post('/buildings', async (req, res, next) => {
  try {
    res.status(201).json(
      await Building.create({
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        ownerId: req.user.ownerId
      })
    )
  } catch (err) {
    next(err)
  }
})

router.get('/residents/:residentId', async (req, res, next) => {
  try {
    const residentInfo = await Building.findOne({
      include: {
        model: Apartment,
        include: {
          model: Resident,
          where: {
            id: req.params.residentId
          }
        }
      }
    })
    if (residentInfo) {
      res.json(residentInfo)
    } else {
      res.sendStatus(418)
    }
  } catch (err) {
    next(err)
  }
})

// changes a resident to verified
router.put('/:residentId/approve', async (req, res, next) => {
  try {
    const building = await Building.findOne({
      include: {
        model: Apartment,
        include: {
          model: Resident,
          where: {
            id: req.params.residentId
          }
        }
      }
    })
    if (req.user.buildingIds.includes(building.id)) {
      await Resident.update(
        {isVerified: true},
        {where: {id: req.params.residentId}}
      )
      res.sendStatus(204)
    } else {
      res.sendStatus(401)
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:residentId/reject', async (req, res, next) => {
  try {
    const building = await Building.findOne({
      include: {
        model: Apartment,
        include: {
          model: Resident,
          where: {
            id: req.params.residentId
          }
        }
      }
    })
    if (req.user.buildingIds.includes(building.id)) {
      await Resident.destroy({where: {id: req.params.residentId}})
      res.sendStatus(204)
    } else {
      res.sendStatus(401)
    }
  } catch (err) {
    next(err)
  }
})

//get all apartments && news in building
router.get(
  '/buildings/:buildingId',
  buildingBelongsTo,
  async (req, res, next) => {
    try {
      res.json(
        await Building.findByPk(req.params.buildingId, {
          include: [
            {model: News, include: Resident},
            {
              model: Apartment,
              include: [{model: Resident, include: User}, {model: Ticket}]
            }
          ]
        })
      )
    } catch (err) {
      next(err)
    }
  }
)

//see available workers for assignment
router.get('/tickets/:ticketId/assign', async (req, res, next) => {
  try {
    res.json(await Worker.findAll())
  } catch (err) {
    next(err)
  }
})

//approve tickets - change status from pending to approve
router.put('/tickets/:ticketId/approve', async (req, res, next) => {
  try {
    await Ticket.update(
      {
        status: 'approved'
      },
      {
        where: {
          id: req.params.ticketId,
          ownerId: req.user.ownerId,
          status: 'pending'
        }
      }
    )
    // we only care about emitting if we have an io instance
    if (io) {
      io.emit('job_open')
    }
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

//reject tickets - change status from pending to rejected
router.put('/tickets/:ticketId/reject', async (req, res, next) => {
  try {
    await Ticket.update(
      {
        status: 'rejected'
      },
      {
        where: {
          id: req.params.ticketId,
          ownerId: req.user.ownerId,
          status: 'pending'
        }
      }
    )
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

//owner can close confirmed tickets
router.put('/tickets/:ticketId/close', async (req, res, next) => {
  try {
    await Ticket.update(
      {
        status: 'closed'
      },
      {
        where: {
          id: req.params.ticketId,
          ownerId: req.user.ownerId,
          status: 'confirmed'
        }
      }
    )
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

//create a news
router.post(
  '/buildings/:buildingId/news',
  buildingBelongsTo,
  async (req, res, next) => {
    try {
      res.status(201).json(
        await News.create(
          {
            title: req.body.title,
            body: req.body.body,
            photoUrl: req.body.photoUrl,
            expDay: req.body.expDay,
            ownerId: req.user.ownerId,
            status: 'approved',
            buildingId: req.params.buildingId
          },
          {
            include: [{model: Owner}]
          }
        )
      )
    } catch (err) {
      next(err)
    }
  }
)

const updateNews = (id, ownerId, buildingId, oldStatus, status) => {
  return News.update(
    {status},
    {
      where: {
        status: oldStatus,
        ownerId,
        id,
        buildingId
      }
    }
  )
}

// approve a pending news
router.put(
  '/buildings/:buildingId/news/:newsId/approve',
  buildingBelongsTo,
  async (req, res, next) => {
    try {
      const updatedNews = await updateNews(
        req.params.newsId,
        req.user.ownerId,
        req.params.buildingId,
        'pending',
        'approved'
      )
      if (updatedNews[0] >= 1) {
        res.sendStatus(204)
      } else {
        res.sendStatus(401)
      }
    } catch (err) {
      next(err)
    }
  }
)

// deny a pending news
router.put(
  '/buildings/:buildingId/news/:newsId/deny',
  buildingBelongsTo,
  async (req, res, next) => {
    try {
      const updatedNews = await updateNews(
        req.params.newsId,
        req.user.ownerId,
        req.params.buildingId,
        'pending',
        'denied'
      )
      if (updatedNews[0] >= 1) {
        res.sendStatus(204)
      } else {
        res.sendStatus(401)
      }
    } catch (err) {
      next(err)
    }
  }
)

// get all workers
router.get('/workers', async (req, res, next) => {
  try {
    const workers = await Worker.findAll()
    res.json(workers)
  } catch (err) {
    next(err)
  }
})

router.put('/workers/:workerId/verify', async (req, res, next) => {
  try {
    const worker = await Worker.findByPk(req.params.workerId)
    if (worker) {
      await Worker.update(
        {
          isVerified: true
        },
        {
          where: {
            id: req.params.workerId
          }
        }
      )
      res.sendStatus(204)
    } else {
      res.sendStatus(418)
    }
  } catch (err) {
    next(err)
  }
})

router.put('/workers/:workerId/reject', async (req, res, next) => {
  try {
    const worker = await Worker.findByPk(req.params.workerId)
    if (worker) {
      await Worker.destroy({
        where: {
          id: req.params.workerId
        }
      })
      res.sendStatus(204)
    } else {
      res.sendStatus(418)
    }
  } catch (err) {
    next(err)
  }
})
