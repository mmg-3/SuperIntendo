const Sequelize = require('sequelize')
const db = require('../db')

const News = db.define('news', {
  title: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.TEXT
  },
  photoUrl: {
    type: Sequelize.STRING
  },
  expDay: {
    type: Sequelize.DATE
  },
  author: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.ENUM('approved', 'pending', 'denied', 'deleted')
  }
})

module.exports = News
