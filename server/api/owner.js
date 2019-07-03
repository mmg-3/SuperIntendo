const router = require('express').Router()
const {
  Resident,
  Ticket,
  News,
  Building,
  Apartment,
  Owner,
  Worker
} = require('../db/models')

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
module.exports = router

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
            News,
            {
              model: Apartment,
              include: [{model: Resident}, {model: Ticket}]
            }
          ]
        })
      )
    } catch (err) {
      next(err)
    }
  }
)

//get all tickets for building
router.get('/tickets', async (req, res, next) => {
  try {
    res.json(
      await Ticket.findAll({
        include: {
          model: Apartment,
          include: {
            model: Building,
            where: {
              ownerId: req.user.ownerId
            }
          }
        }
      })
    )
  } catch (err) {
    next(err)
  }
})

//get a ticket
router.get('/tickets/:ticketId', async (req, res, next) => {
  try {
    res.json(await Ticket.findByPk(req.params.ticketId))
  } catch (err) {
    next(err)
  }
})
//update a ticket
router.put('/tickets/:ticketId', async (req, res, next) => {
  try {
    await Ticket.update(
      {
        status: req.body.status
      },
      {where: {id: req.params.ticketId}}
    )
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
//see available workers for assignment
router.get('/tickets/:ticketId/assign', async (req, res, next) => {
  try {
    res.json(await Worker.findAll())
  } catch (err) {
    next(err)
  }
})

//update tickets - assign workers for pending tickets - status change from pending to assigned
router.put('/tickets/:ticketId/assign/:workerId', async (req, res, next) => {
  if (req.params.workerId > 0) {
    try {
      await Ticket.update(
        {
          workerId: req.params.workerId,
          status: 'assigned'
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
  } else {
    res.sendStatus(418)
  }
})

//user can close confirmed tickets
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
            status: req.body.status,
            buildingId: req.params.buildingId
          },
          {
            include: [Owner]
          }
        )
      )
    } catch (err) {
      next(err)
    }
  }
)

//update status of a pending news
router.put(
  '/buildings/:buildingId/news/:newsId',
  buildingBelongsTo,
  async (req, res, next) => {
    try {
      const updateNews = await News.update(
        {
          status: req.body.status
        },
        {
          where: {
            ownerId: req.user.ownerId,
            id: req.params.newsId,
            buildingId: req.params.buildingId
          }
        }
      )
      if (updateNews[0] >= 1) {
        res.sendStatus(204)
      } else {
        res.sendStatus(401)
      }
    } catch (err) {
      next(err)
    }
  }
)

//get all workers
router.get('/workers', async (req, res, next) => {
  try {
    const workers = await Worker.findAll()
    res.json(workers)
    console.log(workers)
  } catch (err) {
    next(err)
  }
})

//get single worker
router.get('/workers/:workerId', async (req, res, next) => {
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
