const User = require('./user')
const Building = require('./building')
const Apartment = require('./apartment')
const Owner = require('./owner')
const Resident = require('./resident')

Owner.belongsTo(User)
User.hasOne(Owner)

Resident.belongsTo(User)
User.hasOne(Resident)

Building.hasMany(Apartment)
Apartment.belongsTo(Building)

Building.belongsTo(Owner)
Owner.hasMany(Building)

Apartment.hasMany(Resident)
Resident.belongsTo(Apartment)
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
  User
}
