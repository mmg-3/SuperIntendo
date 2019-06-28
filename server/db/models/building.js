const Sequelize = require('sequelize')
const db = require('../db')

const Building = db.define('building', {
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  zipcode: {
    type: Sequelize.STRING
  }
})

module.exports = Building
