const Sequelize = require('sequelize')
const db = require('../db')

const Resident = db.define('resident', {
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
  mailingAddressAddress1: {
    type: Sequelize.STRING
  },
  mailingAddressAddress2: {
    type: Sequelize.STRING
  },
  mailingAddressCity: {
    type: Sequelize.STRING
  },
  mailingAddressState: {
    type: Sequelize.STRING
  },
  mailingAddressZipcode: {
    type: Sequelize.STRING
  }
})

module.exports = Resident
