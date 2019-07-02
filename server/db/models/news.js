const Sequelize = require('sequelize')
const db = require('../db')

const News = db.define('news', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT
    // allowNull: false
  },
  photoUrl: {
    type: Sequelize.STRING
  },
  expDay: {
    type: Sequelize.DATE
  },
  status: {
    type: Sequelize.ENUM('approved', 'pending', 'denied', 'deleted'),
    defaultValue: 'pending'
  }
})

module.exports = News
