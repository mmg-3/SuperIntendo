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

function makeBuildings(ownerId) {
  return Promise.all([
    Building.create({
      address: '30 Morningside Drive',
      city: 'New York',
      state: 'NY',
      zipcode: '10025',
      buildingUrl:
        'https://cdn-img-feed.streeteasy.com/nyc/image/41/368675841.jpg',
      ownerId
    }),
    Building.create({
      address: '30-02 39th Avenue',
      city: 'Long Island City',
      state: 'NY',
      zipcode: '11101',
      buildingUrl:
        'https://newconstructionmanhattan.com/sites/default/files/images/arc-lic-02.jpg',
      ownerId
    }),
    Building.create({
      address: '420 Kent Avenue',
      city: 'Brooklyn',
      state: 'NY',
      zipcode: '11249',
      buildingUrl:
        'https://ds1.cityrealty.com/img/0c04cd0b287ac342223e23f3f3570ffa9cc5e294+1004++0+60/420-kent-avenue.jpg',
      ownerId
    }),
    Building.create({
      address: '134-37 35th Avenue',
      city: 'Flushing',
      state: 'NY',
      zipcode: '11354',
      buildingUrl: 'https://cdn-img0.streeteasy.com/nyc/image/32/362124832.jpg',
      ownerId
    }),
    Building.create({
      address: '130 William Street',
      city: 'New York',
      state: 'NY',
      zipcode: '10038',
      buildingUrl:
        'http://claudiasaezfromm.com/wp-content/uploads/2019/01/130-william-corcoran-sunshine-claudia-saez-fromm-1.jpg',
      ownerId
    }),
    Building.create({
      address: '520 Park Avenue',
      city: 'New York',
      state: 'NY',
      zipcode: '10022',
      buildingUrl: 'https://cdn-img3.streeteasy.com/nyc/image/95/119648695.jpg',
      ownerId
    }),
    Building.create({
      address: '199 Beekman Ave',
      city: 'Sleepy Hollow',
      state: 'NY',
      zipcode: '10591',
      buildingUrl:
        'https://cdn.tollbrothers.com/communities/13077/images/c1-HIGH_1920.jpg',
      ownerId
    }),
    Building.create({
      address: '98 Carriage Trail',
      city: 'Tarrytown',
      state: 'NY',
      zipcode: '10591',
      buildingUrl:
        'https://dzv9cgq735oi4.cloudfront.net/pics/development/2013/19783//crop/1280,575',
      ownerId
    })
  ])
}

function makeUsers() {
  return Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      email: 'murphy@email.com',
      password: '123'
    }),
    User.create({
      email: 'viviantong@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'noahschefer@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'michaelsiciliano@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'mashaobaturova@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'daphneclyne@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'alvintang@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'rickylau@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'haridoshi@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'danielrivera@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'zacharydroge@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'alexandermann@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'dantracy@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'thomasluo@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'kevinlam@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'erickreiter@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'kylebirns@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'williamgolden@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'tristanwatanabe@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'xavierolivares@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'fengjiang@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'alyonarodina@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'jingcao.yale@gmail.com',
      password: '123'
    }),
    User.create({
      email: 'talluigi@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'billytan@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'annamai@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'ericloucks@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'matthewberman@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'sofiabenitez@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'jasoncho@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'bienvenidorodriguez@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'nikitagirko@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'jackdwyer@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'justinkichler@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'davidpatlut@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'wendysung@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'trentrhodes@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'manny@sadpanda.moe',
      password: ':('
    }),
    User.create({
      email: 'dakotablair@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'danielwasserman@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'coinstance@coins.com',
      password: '$$$$'
    }),
    User.create({
      email: 'jenniferscheinhorn@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'nickbalestrieri@fullstack.com',
      password: '123'
    }),
    User.create({
      email: 'ricardopineda@fullstack.com',
      password: '123'
    })
  ])
}

function makeOwner(userId) {
  // users[1].id
  return Promise.all([Owner.create({userId})])
}

function makeApartments(buildings) {
  return Promise.all([
    Apartment.create({
      unitNumber: '1A',
      buildingId: buildings[0].id
    }),
    Apartment.create({
      unitNumber: '1B',
      buildingId: buildings[0].id
    }),
    Apartment.create({
      unitNumber: '1C',
      buildingId: buildings[0].id
    }),
    Apartment.create({
      unitNumber: '2A',
      buildingId: buildings[0].id
    }),
    Apartment.create({
      unitNumber: '2B',
      buildingId: buildings[0].id
    }),
    Apartment.create({
      unitNumber: '3A',
      buildingId: buildings[0].id
    }),
    Apartment.create({
      unitNumber: '3B',
      buildingId: buildings[0].id
    }),
    Apartment.create({
      unitNumber: '3C',
      buildingId: buildings[0].id
    }),
    Apartment.create({
      unitNumber: '3D',
      buildingId: buildings[0].id
    }),
    Apartment.create({
      unitNumber: '4A',
      buildingId: buildings[0].id
    }),
    Apartment.create({
      unitNumber: '5A',
      buildingId: buildings[0].id
    }),
    Apartment.create({
      unitNumber: '1A',
      buildingId: buildings[1].id
    }),
    Apartment.create({
      unitNumber: '1B',
      buildingId: buildings[1].id
    }),
    Apartment.create({
      unitNumber: '1C',
      buildingId: buildings[1].id
    }),
    Apartment.create({
      unitNumber: '2B',
      buildingId: buildings[1].id
    }),
    Apartment.create({
      unitNumber: '3B',
      buildingId: buildings[1].id
    }),
    Apartment.create({
      unitNumber: '4A',
      buildingId: buildings[1].id
    }),
    Apartment.create({
      unitNumber: '4B',
      buildingId: buildings[1].id
    }),
    Apartment.create({
      unitNumber: '4C',
      buildingId: buildings[1].id
    }),
    Apartment.create({
      unitNumber: '4D',
      buildingId: buildings[1].id
    }),
    Apartment.create({
      unitNumber: '1A',
      buildingId: buildings[2].id
    }),
    Apartment.create({
      unitNumber: '1B',
      buildingId: buildings[2].id
    }),
    Apartment.create({
      unitNumber: '2C',
      buildingId: buildings[2].id
    }),
    Apartment.create({
      unitNumber: '3D',
      buildingId: buildings[2].id
    }),
    Apartment.create({
      unitNumber: '4F',
      buildingId: buildings[2].id
    }),
    Apartment.create({
      unitNumber: '1B',
      buildingId: buildings[3].id
    }),
    Apartment.create({
      unitNumber: '1C',
      buildingId: buildings[3].id
    }),
    Apartment.create({
      unitNumber: '2A',
      buildingId: buildings[3].id
    }),
    Apartment.create({
      unitNumber: '2B',
      buildingId: buildings[3].id
    }),
    Apartment.create({
      unitNumber: '3A',
      buildingId: buildings[3].id
    })
  ])
}

function makeWorker(users) {
  // shift users over by 1 to fix off-by-one error
  const adjustedUsers = [{}, ...users]
  return Promise.all([
    Worker.create({
      firstName: 'Jing',
      lastName: 'Cao',
      phoneNumber: '2729283372',
      photoUrl:
        'https://media.licdn.com/dms/image/C5603AQGD8pM4F3egsg/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=_LQaNLYfz2neMmq5B0hIIGvWCwfNFuyUM4RjyPgpFTE',
      address1: '829 12th Street',
      address2: '44B',
      city: 'Brooklyn',
      state: 'New York',
      zipcode: '11277',
      isVerified: true,
      userId: adjustedUsers[22].id
    }),
    Worker.create({
      firstName: 'David',
      lastName: 'Patlut',
      phoneNumber: '2122643077',
      photoUrl:
        'https://media.licdn.com/dms/image/C5603AQELDeaSxYnkAQ/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=MPzXJWRzMC6hMrk0ss5ZhutZVlnUdqdR2Eg68e1ptz4',
      address1: '10 Hanover Square',
      address2: '11',
      city: 'New York',
      state: 'New York',
      zipcode: '10005',
      isVerified: true,
      userId: adjustedUsers[34].id
    })
  ])
}

function makeNews(residents, owners, buildings) {
  const adjustedResidents = [{}, ...residents]
  const adjustedOwners = [{}, ...owners]
  const adjustedBuildings = [{}, ...buildings]
  return Promise.all([
    News.create({
      title: 'New Recycle Rule',
      body:
        'Recyclable items include glass, metal, rigid plastic, and beverage cartons (blue decal); and paper and cardboard (green decal). You must place recyclable materials curbside in clear bags or labeled recycling bins between 4 PM and midnight the evening before your scheduled recycling collection day.',
      photoUrl:
        'https://www.portlandmaine.gov/ImageRepository/Document?documentID=21973',
      expDay: '07/30/2020',
      status: 'approved',
      residentId: null,
      ownerId: adjustedOwners[1].id,
      buildingId: adjustedBuildings[1].id
    }),
    News.create({
      title: 'Late Fee Charge',
      body:
        'Starting July 1st, 2019, we will charge a $25 late fee if your monthly maintainance fee is not recieved by the 1st of each month. Please pay your maintainance fee on time to avoid the charge. You could pay your fee online or via check. If you are paying via check, please make sure your check is post stamped at least 5 days before the due date.',
      photoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU79DJiiihVKtv9a9bLlWfCMlZl7Szz1qL3Pkvo3vHFO3nBmM',
      expDay: '07/30/2020',
      status: 'approved',
      residentId: null,
      ownerId: adjustedOwners[1].id,
      buildingId: adjustedBuildings[1].id
    }),
    News.create({
      title: 'Free Sofa',
      body: `I'm giving away a used 2 seats sofa. I got it from Westelm 2 years ago. Please come to pick it up in Apartment 3B. I'm usually home after 7pm.`,
      photoUrl:
        'https://www.westelm.com/weimgs/rk/images/wcm/products/201922/0173/crosby-mid-century-sofa-80-c.jpg',
      expDay: '07/30/2019',
      status: 'approved',
      residentId: adjustedResidents[11].id,
      ownerId: adjustedOwners[1].id,
      buildingId: adjustedBuildings[1].id
    }),
    News.create({
      title: 'Looking for Paid Pet Sitter',
      body: `I'm looking for a pet sitter for my French Bulldog Pork. Ideally you will come to my apartment and feed him twice daily and take him out for walk 1-2 times a day. If you are avalible next Wednesday to Sunday, please conact me, I live in 4A.`,
      photoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmMLtxtwajiZaz0EPSrJ1cxvI4x6iJV-0rEs-PmVrezdHZ0YS_g',
      expDay: '08/12/2021',
      status: 'pending',
      residentId: adjustedResidents[22].id,
      ownerId: adjustedOwners[1].id,
      buildingId: adjustedBuildings[2].id
    }),
    News.create({
      title: 'New Recycle Rule',
      body:
        'Recyclable items include glass, metal, rigid plastic, and beverage cartons (blue decal); and paper and cardboard (green decal). You must place recyclable materials curbside in clear bags or labeled recycling bins between 4 PM and midnight the evening before your scheduled recycling collection day.',
      photoUrl:
        'https://www.portlandmaine.gov/ImageRepository/Document?documentID=21973',
      expDay: '07/30/2020',
      status: 'approved',
      residentId: null,
      ownerId: adjustedOwners[1].id,
      buildingId: adjustedBuildings[2].id
    }),
    News.create({
      title: 'New Recycle Rule',
      body:
        'Recyclable items include glass, metal, rigid plastic, and beverage cartons (blue decal); and paper and cardboard (green decal). You must place recyclable materials curbside in clear bags or labeled recycling bins between 4 PM and midnight the evening before your scheduled recycling collection day.',
      photoUrl:
        'https://www.portlandmaine.gov/ImageRepository/Document?documentID=21973',
      expDay: '07/30/2020',
      status: 'approved',
      residentId: null,
      ownerId: adjustedOwners[1].id,
      buildingId: adjustedBuildings[3].id
    }),
    News.create({
      title: 'New Recycle Rule',
      body:
        'Recyclable items include glass, metal, rigid plastic, and beverage cartons (blue decal); and paper and cardboard (green decal). You must place recyclable materials curbside in clear bags or labeled recycling bins between 4 PM and midnight the evening before your scheduled recycling collection day.',
      photoUrl:
        'https://www.portlandmaine.gov/ImageRepository/Document?documentID=21973',
      expDay: '07/30/2020',
      status: 'approved',
      residentId: null,
      ownerId: adjustedOwners[1].id,
      buildingId: adjustedBuildings[4].id
    }),
    News.create({
      title: 'Late Fee Charge',
      body:
        'Starting July 1st, 2019, we will charge a $25 late fee if your monthly maintainance fee is not recieved by the 1st of each month. Please pay your maintainance fee on time to avoid the charge. You could pay your fee online or via check. If you are paying via check, please make sure your check is post stamped at least 5 days before the due date.',
      photoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU79DJiiihVKtv9a9bLlWfCMlZl7Szz1qL3Pkvo3vHFO3nBmM',
      expDay: '07/30/2020',
      status: 'approved',
      residentId: null,
      ownerId: adjustedOwners[1].id,
      buildingId: adjustedBuildings[2].id
    }),
    News.create({
      title: 'Late Fee Charge',
      body:
        'Starting July 1st, 2019, we will charge a $25 late fee if your monthly maintainance fee is not recieved by the 1st of each month. Please pay your maintainance fee on time to avoid the charge. You could pay your fee online or via check. If you are paying via check, please make sure your check is post stamped at least 5 days before the due date.',
      photoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU79DJiiihVKtv9a9bLlWfCMlZl7Szz1qL3Pkvo3vHFO3nBmM',
      expDay: '07/30/2020',
      status: 'approved',
      residentId: null,
      ownerId: adjustedOwners[1].id,
      buildingId: adjustedBuildings[3].id
    }),
    News.create({
      title: 'Late Fee Charge',
      body:
        'Starting July 1st, 2019, we will charge a $25 late fee if your monthly maintainance fee is not recieved by the 1st of each month. Please pay your maintainance fee on time to avoid the charge. You could pay your fee online or via check. If you are paying via check, please make sure your check is post stamped at least 5 days before the due date.',
      photoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU79DJiiihVKtv9a9bLlWfCMlZl7Szz1qL3Pkvo3vHFO3nBmM',
      expDay: '07/30/2020',
      status: 'approved',
      residentId: null,
      ownerId: adjustedOwners[1].id,
      buildingId: adjustedBuildings[4].id
    }),
    News.create({
      title: 'Manny Fell Down',
      body:
        'Unfortuantely I fell down in shower yesterday. I am in a lot of pain and have very limited mobility. I would really appreciate if someone could help me with errands. --Manny, 4F',
      photoUrl: 'http://seniors100.com/wp-content/uploads/2016/09/download.jpg',
      expDay: '12/30/2019',
      status: 'pending',
      residentId: adjustedResidents[25].id,
      ownerId: adjustedOwners[1].id,
      buildingId: adjustedBuildings[3].id
    })
  ])
}
function makeTickets(residents, owners, apartments) {
  const adjustedResidents = [{}, ...residents]
  const adjustedOwners = [{}, ...owners]
  const adjustedApartments = [{}, ...apartments]
  return Promise.all([
    Ticket.create({
      location: 'bathroom',
      formDate: '07/03/2019',
      issue: 'The tiles are broken. Please fix them.',
      neighbor: false,
      photoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqJdOcy48s05E7aUT8R6URm4F5e7T17YMJdz1JiRi99EWBvDR',
      status: 'pending',
      createdAt: '07/04/2019',
      updatedAt: '07/04/2019',
      residentId: adjustedResidents[25].id,
      ownerId: adjustedOwners[1].id,
      workerId: null,
      apartmentId: adjustedApartments[25].id
    }),
    Ticket.create({
      location: 'bedroom',
      formDate: '07/01/2019',
      issue:
        'water leak from the ceiling. I think it`s from the apartment above me.',
      neighbor: true,
      photoUrl:
        'https://www.thespruce.com/thmb/HAVpjgOW8NzxJVzBdLYGL_zkU0o=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/WaterLeakingThroughCeilingLightFixture-5be0b050c9e77c0051e1436a.jpg',
      status: 'pending',
      createdAt: '07/05/2019',
      updatedAt: '07/05/2019',
      residentId: adjustedResidents[25].id,
      ownerId: adjustedOwners[1].id,
      workerId: null,
      apartmentId: adjustedApartments[25].id
    }),
    Ticket.create({
      location: 'kitchen',
      formDate: '07/01/2019',
      issue: 'clogged sink drain, flooded kitchen',
      neighbor: true,
      photoUrl:
        'http://www.homeadvisorhomesource.com/wp-content/uploads/2013/12/Kitchen-Flooding.jpg',
      status: 'pending',
      createdAt: '07/05/2019',
      updatedAt: '07/05/2019',
      residentId: adjustedResidents[26].id,
      ownerId: adjustedOwners[1].id,
      workerId: null,
      apartmentId: adjustedApartments[26].id
    }),
    Ticket.create({
      location: 'bathroom',
      formDate: '05/11/2019',
      issue: 'clogged toilet',
      neighbor: false,
      photoUrl: '',
      status: 'closed',
      createdAt: '05/11/2019',
      updatedAt: '05/11/2019',
      residentId: adjustedResidents[26].id,
      ownerId: adjustedOwners[1].id,
      workerId: null,
      apartmentId: adjustedApartments[26].id
    }),
    Ticket.create({
      location: 'bathroom',
      formDate: '05/13/2019',
      issue: 'clogged shower drain',
      neighbor: false,
      photoUrl: '',
      status: 'closed',
      createdAt: '05/13/2019',
      updatedAt: '05/13/2019',
      residentId: adjustedResidents[25].id,
      ownerId: adjustedOwners[1].id,
      workerId: null,
      apartmentId: adjustedApartments[25].id
    }),
    Ticket.create({
      location: 'bedroom',
      formDate: '03/02/2019',
      issue: 'bedbugs!!',
      neighbor: false,
      photoUrl: '',
      status: 'closed',
      createdAt: '03/03/2019',
      updatedAt: '03/03/2019',
      residentId: adjustedResidents[17].id,
      ownerId: adjustedOwners[1].id,
      workerId: null,
      apartmentId: adjustedApartments[17].id
    }),
    Ticket.create({
      location: 'bedroom',
      formDate: '06/07/2019',
      issue:
        'cracked paint hanging, please come to remove it and repaint my bedroom.',
      neighbor: false,
      photoUrl: '',
      status: 'finished',
      createdAt: '06/09/2019',
      updatedAt: '07/04/2019',
      residentId: adjustedResidents[25].id,
      ownerId: adjustedOwners[1].id,
      workerId: null,
      apartmentId: adjustedApartments[25].id
    }),
    Ticket.create({
      location: 'bedroom',
      formDate: '06/12/2019',
      issue: 'cannot close closet`s door and the door knob is broken',
      neighbor: false,
      photoUrl:
        'https://www.wikihow.com/images/thumb/9/9c/Interior_doorknob_4.JPG/687px-Interior_doorknob_4.JPG',
      status: 'confirmed',
      createdAt: '06/12/2019',
      updatedAt: '07/04/2019',
      residentId: adjustedResidents[26].id,
      ownerId: adjustedOwners[1].id,
      workerId: null,
      apartmentId: adjustedApartments[26].id
    }),
    Ticket.create({
      location: 'kitchen',
      formDate: '07/01/2019',
      issue: 'refrigerator stopped working',
      neighbor: false,
      photoUrl: '',
      status: 'in-progress',
      createdAt: '07/01/2019',
      updatedAt: '07/05/2019',
      residentId: adjustedResidents[25].id,
      ownerId: adjustedOwners[1].id,
      workerId: null,
      apartmentId: adjustedApartments[25].id
    }),
    Ticket.create({
      location: 'kitchen',
      formDate: '07/02/2018',
      issue: 'oven is not working',
      neighbor: false,
      photoUrl: '',
      status: 'closed',
      createdAt: '07/08/2018',
      updatedAt: '07/13/2018',
      residentId: adjustedResidents[25].id,
      ownerId: adjustedOwners[1].id,
      workerId: null,
      apartmentId: adjustedApartments[25].id
    })
  ])
}

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await makeUsers()
  const owners = await makeOwner(users[1].id)
  const buildings = await makeBuildings(owners[0].id)
  const apartments = await makeApartments(buildings)
  const residents = await makeResidents(users, apartments)
  const worker = await makeWorker(users)
  const news = await makeNews(residents, owners, buildings)
  const tickets = await makeTickets(residents, owners, apartments)
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
