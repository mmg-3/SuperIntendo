const Sequelize = require('sequelize')
const db = require('../db')

const Worker = db.define('worker', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  phoneNumber: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  mailingAddress: {
    type: Sequelize.STRING
  },
  skills: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Worker
