'use strict'

const db = require('../server/db')
const {
  User,
  Resident,
  Apartment,
  Owner,
  Worker,
  Building,
  News,
  Ticket
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'coinstance@coins.com', password: '$$$$'}),
    User.create({email: 'batmanuel@sadpanda.moe', password: '>:{0'})
  ])

  const residents = await Promise.all([
    Resident.create({
      firstName: 'Cody',
      lastName: 'DaPug',
      userId: users[0].id,
      phoneNumber: '111-111-1111',
      imageUrl:
        'https://user-images.githubusercontent.com/12876798/38030875-d3166276-3267-11e8-96d9-309aa8cf008b.png',
      isVerified: true
    }),
    Resident.create({
      firstName: 'Coinstance',
      lastName: 'Coin',
      userId: users[2].id,
      phoneNumber: '222-222-2222',
      imageUrl:
        'https://globalcoinreport.com/wp-content/uploads/2018/03/cropped-favicon.png',
      isVerified: true
    })
  ])

  const owner = await Owner.create({userId: users[1].id})

  const building = await Building.create({
    address: '5 Hangover Square',
    city: 'New York',
    state: 'NY',
    zipcode: '10004',
    ownerId: owner.id
  })

  const apartments = await Promise.all([
    Apartment.create({
      unitNumber: '11A',
      buildingId: building.id
    }),
    Apartment.create({
      unitNumber: '25A',
      buildingId: building.id
    }),
    Apartment.create({
      unitNumber: '1A',
      buildingId: building.id
    })
  ])
  await Promise.all(
    residents.map((resident, idx) => resident.setApartment(apartments[idx]))
  )

  const news = await News.create({
    title: `Manny just falls`,
    body: 'Manny loves huge backends',
    buildingId: building.id
  })

  const tickets = await Promise.all([
    Ticket.create({
      location: 'kitchen',
      issue: 'Flood',
      neighbor: true,
      apartmentId: apartments[0].id,
      residentId: residents[0].id
    }),
    Ticket.create({
      location: 'bathroom',
      issue: 'Toilet clogged',
      neighbor: false,
      apartmentId: apartments[1].id,
      residentId: residents[1].id,
      status: 'finished'
    }),
    Ticket.create({
      location: 'living room',
      issue: 'murder scene',
      neighbor: true,
      apartmentId: apartments[1].id,
      residentId: residents[1].id,
      status: 'closed'
    })
  ])

  // const worker = await Worker.create({})
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
