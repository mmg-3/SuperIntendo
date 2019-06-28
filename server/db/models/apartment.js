const Sequelize = require('sequelize')
const db = require('../db')

const Apartment = db.define('apartment', {
  unitNumber: {
    type: Sequelize.STRING
  },
  occupied: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Apartment
