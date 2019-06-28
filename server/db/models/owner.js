const Sequelize = require('sequelize')
const db = require('../db')

const Owner = db.define('owner', {})

module.exports = Owner
