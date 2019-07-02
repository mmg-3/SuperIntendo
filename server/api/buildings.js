const router = require('express').Router()
const {Resident, Ticket, News, Apartment, Building} = require('../db/models')
module.exports = router

// grab all buildings and apartments and send them
router.get('/', async (req, res, next) => {
  try {
    const buildings = await Building.findAll({
      include: [Apartment]
    })
    res.json(buildings)
  } catch (err) {
    next(err)
  }
})
