const Sequelize = require('sequelize')
const db = require('../db')

const Building = db.define('building', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  buildingUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:
      'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i_KrmjObiK8k/v0/1200x-1.jpg'
  }
})

module.exports = Building
