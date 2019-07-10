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

function makeResidents(users, apartments) {
  // shift users over by 1 to fix off-by-one error
  const adjustedUsers = [{}, ...users]
  const adjustedApartments = [{}, ...apartments]
  return Promise.all([
    Resident.create({
      firstName: 'Noah',
      lastName: 'Schefer',
      phoneNumber: '6462738272',
      photoUrl:
        'https://media.licdn.com/dms/image/C5603AQH5abIAlQHgrw/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=POaHMdNl4-_sY_98Dyee1prjXo9rFD-BJmmx_A9ZBKQ',
      address1: '67-03 8th Ave',
      address2: 'Apt 12G',
      city: 'Brooklyn',
      state: 'New York',
      zipcode: '11372',
      isVerified: true,
      userId: adjustedUsers[4].id,
      apartmentId: adjustedApartments[1].id
    }),
    Resident.create({
      firstName: 'Michael',
      lastName: 'Siciliano',
      phoneNumber: '9172836625',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQFtbF_ywr4QWA/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=j_ddoS3NjPqm9dWxZ_pvGNkyBKmTutNY2PJ_pv7Wvpk',
      address1: '89 34th Street',
      address2: '',
      city: 'New York',
      state: 'NY',
      zipcode: '10016',
      isVerified: true,
      userId: adjustedUsers[5].id,
      apartmentId: adjustedApartments[2].id
    }),
    Resident.create({
      firstName: 'Masha',
      lastName: 'Obaturova',
      phoneNumber: '2126377726',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQHzWeTXL_O66A/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=gc0aTg6C1wrKWtAjr8f7XwY9hr6A3Lzjn_D1T3dx2Dw',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[6].id,
      apartmentId: adjustedApartments[3].id
    }),
    Resident.create({
      firstName: 'Daphne',
      lastName: 'Clyne',
      phoneNumber: '3432726610',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQHjGNRJktniyg/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=mjTeU1KucKIFzCsxzmucRv1-00-yixiTA6BPKeXQc-I',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[7].id,
      apartmentId: adjustedApartments[4].id
    }),
    Resident.create({
      firstName: 'Ricky',
      lastName: 'Lau',
      phoneNumber: '9173420926',
      photoUrl:
        'https://media.licdn.com/dms/image/C4E03AQFzInf6VWScPg/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=7351X4upO4XLm8_FKOeiTBve4U-xZP8i2_2sdIJxQWk',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[9].id,
      apartmentId: adjustedApartments[5].id
    }),
    Resident.create({
      firstName: 'Hari',
      lastName: 'Doshi',
      phoneNumber: '9170028352',
      photoUrl:
        'https://media.licdn.com/dms/image/C4E03AQFuvF45otw-Lw/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=KMToHtH5Sa6wF0DK2d8lwHxEBisicv55R1h6dyrDV0Q',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[10].id,
      apartmentId: adjustedApartments[6].id
    }),
    Resident.create({
      firstName: 'Daniel',
      lastName: 'Rivera',
      phoneNumber: '6462510265',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQGQ1-tT74D4nQ/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=cNBOMA345W5ds_Iy1BLJxUdnHFL2KxVRDRiktaDXmlU',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[11].id,
      apartmentId: adjustedApartments[7].id
    }),
    Resident.create({
      firstName: 'Zachary',
      lastName: 'Droge',
      phoneNumber: '9172831320',
      photoUrl:
        'https://media.licdn.com/dms/image/C5603AQGBchSRLFF8IA/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=zCnYUwDEFzs9415bQfgA1p3hnRlrK5PpgH3z1X-B82Q',
      address1: '1774 74th Street',
      address2: '',
      city: 'Brooklyn',
      state: 'NY',
      zipcode: '11204',
      isVerified: true,
      userId: adjustedUsers[12].id,
      apartmentId: adjustedApartments[8].id
    }),
    Resident.create({
      firstName: 'Alexander',
      lastName: 'Mann',
      phoneNumber: '2128830090',
      photoUrl:
        'https://media.licdn.com/dms/image/C4E03AQFVi0gNUdYzzg/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=lZbzTGP0EpCRBGw3gfXN_EPZtNHqugkNLJqYkTR5Qu4',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[13].id,
      apartmentId: adjustedApartments[9].id
    }),
    Resident.create({
      firstName: 'Dan',
      lastName: 'Tracy',
      phoneNumber: '9172827162',
      photoUrl:
        'https://media.licdn.com/dms/image/C5603AQEBsMeh7eiDKw/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=MCBaLjXcCWwWkVqhmWaGNLbtkY9GdwsV6ZCvdLrzCio',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[14].id,
      apartmentId: adjustedApartments[10].id
    }),
    Resident.create({
      firstName: 'Thomas',
      lastName: 'Luo',
      phoneNumber: '6462019382',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQGl9DeqcOv1pQ/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=vOHrv9dV-UF0_CyjVW44tjHBwT1l8Q6dy5giCoO4xTM',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[15].id,
      apartmentId: adjustedApartments[11].id
    }),
    Resident.create({
      firstName: 'Kevin',
      lastName: 'Lam',
      phoneNumber: '3470913625',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQFt5YfAeok3VQ/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=t57MJ_duc-Cd5e1fWCuDCgkYLrg_KGjWDQyY0DfdDsU',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[16].id,
      apartmentId: adjustedApartments[12].id
    }),
    Resident.create({
      firstName: 'Eric',
      lastName: 'Kreiter',
      phoneNumber: '9172883043',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQGjnu7rToDaJQ/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=Bddg_yoOxnhsuJxzndLttSZVtqxmMBjVmPOG1lSY5tA',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[17].id,
      apartmentId: adjustedApartments[13].id
    }),
    Resident.create({
      firstName: 'William',
      lastName: 'Golden',
      phoneNumber: '9172034273',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQGt71QsxEVg3w/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=r1WQZ6Zxgt1HIEzOoprV7Ijd3Al7G9npeRBCD3ZrPIo',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[19].id,
      apartmentId: adjustedApartments[14].id
    }),
    Resident.create({
      firstName: 'Tristan',
      lastName: 'Watanabe',
      phoneNumber: '2120092771',
      photoUrl:
        'https://media.licdn.com/dms/image/C4E03AQEUpwaH68cmsA/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=eb7YHnZKDF5N15DdgjU-1nDrKsY9IvbJgeucCThV4vE',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[20].id,
      apartmentId: adjustedApartments[15].id
    }),
    Resident.create({
      firstName: 'Xavier',
      lastName: 'Olivares',
      phoneNumber: '3472993528',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQEn6XFiu1je6Q/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=qj5Xq10y2ue1nm2eqiIK9rTK_S9fGwse0GQf6_zdMrQ',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: false,
      userId: adjustedUsers[21].id,
      apartmentId: adjustedApartments[16].id
    }),
    Resident.create({
      firstName: 'Feng',
      lastName: 'Jiang',
      phoneNumber: '9170342843',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQEGNIRwpxE4AQ/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=m20GGlCdgjGYAif8DN5f7ZQ1rL-CNN1XGdTNnNhIsa4',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[22].id,
      apartmentId: adjustedApartments[17].id
    }),
    Resident.create({
      firstName: 'Alyona',
      lastName: 'Rodina',
      phoneNumber: '2120382699',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQF0bfhNPnGsqQ/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=nlZvKV0YdOZG8MmVAL6qScX4MIVatMcNbKgj_QgCAag',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: false,
      userId: adjustedUsers[23].id,
      apartmentId: adjustedApartments[18].id
    }),
    Resident.create({
      firstName: 'Eric',
      lastName: 'Loucks',
      phoneNumber: '2129388827',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQH0iIEm7i9LrA/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=Of-jvKvQvMUhftfPvkuogZx2rvWx3wAfskAmc61ZmLA',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[28].id,
      apartmentId: adjustedApartments[19].id
    }),
    Resident.create({
      firstName: 'Sofia',
      lastName: 'Benitez',
      phoneNumber: '9172998376',
      photoUrl:
        'https://media.licdn.com/dms/image/C4E03AQHZga0vOb4ZUQ/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=I6Y4xRdKLXKnQ-4YLzMagqBGsZ8h-yUMHUgwdaSDz9o',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: false,
      userId: adjustedUsers[30].id,
      apartmentId: adjustedApartments[20].id
    }),
    Resident.create({
      firstName: 'Jason',
      lastName: 'Cho',
      phoneNumber: '3472091008',
      photoUrl:
        'https://media.licdn.com/dms/image/C4E03AQHaUfJ4IQNwGg/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=W9dO89ZJeLTUb3FIxcY_tw6KAlrixag0lBsW3iYYDew',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[31].id,
      apartmentId: adjustedApartments[21].id
    }),
    Resident.create({
      firstName: 'Nikita',
      lastName: 'Girko',
      phoneNumber: '2129934526',
      photoUrl:
        'https://media.licdn.com/dms/image/C5603AQFXyDPtfQZiHA/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=Aq7NXyJyPFCjkoSBmpSZ2LMRbeHeRk14DQgk8bcm1M4',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[33].id,
      apartmentId: adjustedApartments[22].id
    }),
    Resident.create({
      firstName: 'Jack',
      lastName: 'Dwyer',
      phoneNumber: '6462879933',
      photoUrl:
        'https://media.licdn.com/dms/image/C4E03AQEU7Pos2IlcWw/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=vy6cewAeFp4WRjiGky1a3jM-yCib9tNbVVLM1e3_BJc',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: false,
      userId: adjustedUsers[42].id,
      apartmentId: adjustedApartments[23].id
    }),
    Resident.create({
      firstName: 'Justin',
      lastName: 'Kichler',
      phoneNumber: '6462930012',
      photoUrl:
        'https://media.licdn.com/dms/image/C4E03AQGIjBGck5rIlA/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=h5bh8YgZuik0TMzZqiQGDwvF_xWeMba9hV8FUq5OTNA',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[34].id,
      apartmentId: adjustedApartments[24].id
    }),
    Resident.create({
      firstName: 'Manuel',
      lastName: 'Bugallo',
      phoneNumber: '9172887829',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQGkhD1zOz60Kw/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=jKjGa152l9bwNPtGbY08aqlMtzz7ubP-NOQ0FwovWuI',
      address1: '349 Lakeville Rd',
      address2: '',
      city: 'Great Neck',
      state: 'NY',
      zipcode: '11020',
      isVerified: true,
      userId: adjustedUsers[38].id,
      apartmentId: adjustedApartments[25].id
    }),
    Resident.create({
      firstName: 'Constance',
      lastName: 'Kang',
      phoneNumber: '9175185800',
      photoUrl:
        'https://media.licdn.com/dms/image/C5603AQHmHAcBEZYuQw/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=6wiNTQkjAM_k8Po07-DD2EJcPA479r0lA5Jaw2a65ZU',
      address1: '33 Liberty St',
      address2: '',
      city: 'New York',
      state: 'NY',
      zipcode: '10045',
      isVerified: true,
      userId: adjustedUsers[41].id,
      apartmentId: adjustedApartments[26].id
    }),
    Resident.create({
      firstName: 'Daniel',
      lastName: 'Wasserman',
      phoneNumber: '9172889344',
      photoUrl:
        'https://media.licdn.com/dms/image/C4E03AQEuHdBw4OYRQw/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=dAewg4b1HBLpriz36yLiBK-TrsJYAfGuEIyt4_EbOPw',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: false,
      userId: adjustedUsers[40].id,
      apartmentId: adjustedApartments[27].id
    }),
    Resident.create({
      firstName: 'Jennifer',
      lastName: 'Scheinhorn',
      phoneNumber: '3474444444',
      photoUrl:
        'https://media.licdn.com/dms/image/C4E03AQHuFYA6LqIXMQ/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=sk44xZcAFLvNBcw0jGrhvZs6Oz9qR8AoR50dY-V3Bz8',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: false,
      userId: adjustedUsers[43].id,
      apartmentId: adjustedApartments[28].id
    }),
    Resident.create({
      firstName: 'Nick',
      lastName: 'Balestrieri',
      phoneNumber: '9172132413',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQEUuv33Ahvnqg/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=yoaMDikheW613hA13ZAdjH4qaTL4hITQglew5i6Xt74',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[44].id,
      apartmentId: adjustedApartments[29].id
    }),
    Resident.create({
      firstName: 'Ricargo',
      lastName: 'Pineda',
      phoneNumber: '6460896755',
      photoUrl:
        'https://media.licdn.com/dms/image/C4D03AQEcWJi126wSfA/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=nw2qIPrV83r2RBWsHh6vjcwyjDfd5p35tkeSzZ2h3Q4',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      isVerified: true,
      userId: adjustedUsers[45].id,
      apartmentId: adjustedApartments[30].id
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
