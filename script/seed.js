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
    User.create({email: 'batmanuel@sadpanda.moe', password: '>:{0'}),
    User.create({email: 'drivera@driver.com', password: '<3amnt'})
  ])

  const residents = await Promise.all([
    Resident.create({
      firstName: 'Cody',
      lastName: 'DaPug',
      userId: users[0].id,
      phoneNumber: '111-111-1111',
      imageUrl:
        'https://user-images.githubusercontent.com/12876798/38030875-d3166276-3267-11e8-96d9-309aa8cf008b.png'
    }),
    Resident.create({
      firstName: 'Coinstance',
      lastName: 'Coin',
      userId: users[2].id,
      phoneNumber: '222-222-2222',
      imageUrl:
        'https://globalcoinreport.com/wp-content/uploads/2018/03/cropped-favicon.png'
    })
  ])

  const workers = await Promise.all([
    Worker.create({
      firstName: 'Manny',
      lastName: 'McBackend',
      userId: users[3].id,
      phoneNumber: '333-333-3333',
      imageUrl: 'https://sadpanda.moe/sadpanda.png',
      mailingAddress: '5 Hangover Square',
      skills: ['Maintain huge back-ends']
    }),
    Worker.create({
      firstName: 'Daniel',
      lastName: 'Rivera',
      userId: users[4].id,
      phoneNumber: '444-444-4444',
      imageUrl:
        'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/fa/10/7c/fa107c00-d330-ce43-f581-74a8fc4a18be/AppIcon-0-1x_U007emarketing-0-85-220-7.png/246x0w.jpg',
      mailingAddress: '123 Nintendo Way',
      skills: ['Plumbing, Heroku, Travis']
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
      occupied: true,
      buildingId: building.id
    }),
    Apartment.create({
      unitNumber: '25A',
      occupied: true,
      buildingId: building.id
    }),
    Apartment.create({
      unitNumber: '1A',
      occupied: false,
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
      apartmentId: apartments[0].id
    }),
    Ticket.create({
      location: 'bathroom',
      issue: 'Toilet clogged',
      neighbor: false,
      apartmentId: apartments[1].id,
      status: 'finished'
    }),
    Ticket.create({
      location: 'living room',
      issue: 'murder scene',
      neighbor: true,
      apartmentId: apartments[1].id,
      status: 'closed'
    }),
    Ticket.create({
      location: 'living room',
      issue: 'murder scene',
      neighbor: true,
      apartmentId: apartments[0].id,
      status: 'confirmed'
    })
  ])

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
