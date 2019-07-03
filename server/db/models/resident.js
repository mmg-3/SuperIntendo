const Sequelize = require('sequelize')
const db = require('../db')

const Resident = db.define('resident', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  photoUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:
      'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/fa/10/7c/fa107c00-d330-ce43-f581-74a8fc4a18be/AppIcon-0-1x_U007emarketing-0-85-220-7.png/246x0w.jpg'
  },
  address1: {
    type: Sequelize.STRING
  },
  address2: {
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
  },
  isVerified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Resident
