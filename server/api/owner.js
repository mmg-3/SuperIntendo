const router = require('express').Router()
const {
  Resident,
  Ticket,
  News,
  Building,
  Apartment,
  Owner
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
      }
    })
    if (owner) {
      req.user.ownerId = owner.id
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

//get all apartments && news in building
router.get('/buildings/:buildingId', async (req, res, next) => {
  try {
    res.json(
      await Building.findById(req.params.buildingId, {
        include: [Apartment, Resident, News]
      })
    )
  } catch (err) {
    next(err)
  }
})

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

//update a ticket
router.put('/tickets/:ticketId', async (req, res, next) => {
  try {
    await Ticket.update(
      {
        status: req.body.status
      },
      {where: {id: req.params.ticketId}}
    )
    res.status(204)
  } catch (err) {
    next(err)
  }
})

//get a ticket
router.get('/tickets/:ticketId', async (req, res, next) => {
  try {
    res.json(await Ticket.findById(req.params.ticketId))
  } catch (err) {
    next(err)
  }
})

//create a news
router.post('/news', async (req, res, next) => {
  try {
    res.status(201).json(
      await News.create(
        {
          title: req.body.title,
          body: req.body.body,
          photoUrl: req.body.photoUrl,
          expDay: req.body.expDay,
          ownerId: req.user.ownerId,
          status: req.body.status
        },
        {
          include: [Owner]
        }
      )
    )
  } catch (err) {
    next(err)
  }
})

//update status of a pending news
router.put('/news/:newsId', async (req, res, next) => {
  try {
    res.status(204)
    await News.update(
      {
        status: req.body.status
      },
      {
        where: {id: req.params.newsId}
      }
    )
  } catch (err) {
    next(err)
  }
})

//TODO: profiles
// //get resident profile
// router.get('/residents', async (req, res, next) => {
//   try {
//     res.json(await Resident.findAll(

//     ))
//   } catch (err) {
//     next(err)
//   }
// })

// //update resident profile
// router.put('/residents', async (req, res, next) => {
//   try {
//     res.status(204)
//     await Resident.update(
//       {
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         phoneNumber: req.body.phoneNumber,
//         mailingAddress: req.body.mailingAddress
//       },
//       {
//         where: {
//           id: req.user.id
//         }
//       }
//     )
//   } catch (err) {
//     next(err)
//   }
// })
