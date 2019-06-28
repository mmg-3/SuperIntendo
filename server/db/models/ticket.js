const Sequelize = require('sequelize')
const db = require('../db')

const Ticket = db.define('ticket', {
  location: {
    type: Sequelize.STRING
  },
  formDate: {
    type: Sequelize.DATE
  },
  issue: {
    type: Sequelize.TEXT
  },
  neighbor: {
    type: Sequelize.BOOLEAN
  },
  photoUrl: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.ENUM(
      'pending',
      'assigned',
      'in-progress',
      'finished',
      'confirmed',
      'closed'
    ),
    defaultValue: 'pending'
  },
  assignment: {
    type: Sequelize.STRING
  }
})

module.exports = Ticket
