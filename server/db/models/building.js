const Sequelize = require('sequelize')
const db = require('../db')

const Building = db.define('building', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING
    // allowNull: false
  },
  state: {
    type: Sequelize.STRING
    // allowNull: false
  },
  zipcode: {
    type: Sequelize.STRING
    // allowNull: false
  }
})

module.exports = Building
