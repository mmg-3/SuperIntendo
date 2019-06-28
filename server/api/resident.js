const router = require('express').Router()
const {Resident} = require('../db/models')
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
