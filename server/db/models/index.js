const User = require('./user')
const Building = require('./building')
const Apartment = require('./apartment')
const Owner = require('./owner')
const Resident = require('./resident')
const Ticket = require('./ticket')
const News = require('./news')
const Worker = require('./worker')

Owner.belongsTo(User)
User.hasOne(Owner)

Resident.belongsTo(User)
User.hasOne(Resident)

Worker.belongsTo(User)
User.hasOne(Worker)

Building.hasMany(Apartment)
Apartment.belongsTo(Building)

Building.belongsTo(Owner)
Owner.hasMany(Building)

Apartment.hasMany(Resident)
Resident.belongsTo(Apartment)

Ticket.belongsTo(Resident)
Ticket.belongsTo(Owner)
Ticket.belongsTo(Worker)
Ticket.belongsTo(Apartment)
Resident.hasMany(Ticket)
Owner.hasMany(Ticket)
Worker.hasMany(Ticket)
Apartment.hasMany(Ticket)

News.belongsTo(Resident)
News.belongsTo(Owner)
News.belongsTo(Building)
Building.hasMany(News)
Owner.hasMany(News)
Resident.hasMany(News)

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Building,
  Apartment,
  Owner,
  Resident,
  Ticket,
  News,
  Worker
}
