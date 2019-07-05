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

const seedBuildings = [
  {
    id: 1,
    address: '30 Morningside Drive',
    city: 'New York',
    state: 'NY',
    zipcode: '10025',
    buildingUrl:
      'https://cdn-img-feed.streeteasy.com/nyc/image/41/368675841.jpg',
    ownerId: 1
  },
  {
    id: 2,
    address: '30-02 39th Avenue',
    city: 'Long Island City',
    state: 'NY',
    zipcode: '11101',
    buildingUrl:
      'https://newconstructionmanhattan.com/sites/default/files/images/arc-lic-02.jpg',
    ownerId: 1
  },
  {
    id: 3,
    address: '420 Kent Avenue',
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11249',
    buildingUrl:
      'https://cdn.vox-cdn.com/thumbor/JMYvte1yBjbETc92fWaAuYTyZi0=/0x0:2200x1238/1200x800/filters:focal(924x443:1276x795)/cdn.vox-cdn.com/uploads/chorus_image/image/60047829/CURBED_420_Kent___3_towers_from_East_River.0.jpg',
    ownerId: 1
  },
  {
    id: 4,
    address: '134-37 35th Avenue',
    city: 'Flushing',
    state: 'NY',
    zipcode: '11354',
    buildingUrl: 'https://cdn-img0.streeteasy.com/nyc/image/32/362124832.jpg',
    ownerId: 1
  }
]

const seedUsers = [
  {
    id: 1,
    email: 'cody@email.com',
    password: '123'
  },
  {
    id: 2,
    email: 'murphy@email.com',
    password: '123'
  },
  {
    id: 3,
    email: 'viviantong@fullstack.com',
    password: '123'
  },
  {
    id: 4,
    email: 'noahschefer@fullstack.com',
    password: '123'
  },
  {
    id: 5,
    email: 'michaelsiciliano@fullstack.com',
    password: '123'
  },
  {
    id: 6,
    email: 'mashaobaturova@fullstack.com',
    password: '123'
  },
  {
    id: 7,
    email: 'daphneclyne@fullstack.com',
    password: '123'
  },
  {
    id: 8,
    email: 'alvintang@fullstack.com',
    password: '123'
  },
  {
    id: 9,
    email: 'rickylau@fullstack.com',
    password: '123'
  },
  {
    id: 10,
    email: 'haridoshi@fullstack.com',
    password: '123'
  },
  {
    id: 11,
    email: 'danielrivera@fullstack.com',
    password: '123'
  },
  {
    id: 12,
    email: 'zacharydroge@fullstack.com',
    password: '123'
  },
  {
    id: 13,
    email: 'alexandermann@fullstack.com',
    password: '123'
  },
  {
    id: 14,
    email: 'dantracy@fullstack.com',
    password: '123'
  },
  {
    id: 15,
    email: 'thomasluo@fullstack.com',
    password: '123'
  },
  {
    id: 16,
    email: 'kevinlam@fullstack.com',
    password: '123'
  },
  {
    id: 17,
    email: 'erickreiter@fullstack.com',
    password: '123'
  },
  {
    id: 18,
    email: 'kylebirns@fullstack.com',
    password: '123'
  },
  {
    id: 19,
    email: 'williamgolden@fullstack.com',
    password: '123'
  },
  {
    id: 20,
    email: 'tristanwatanabe@fullstack.com',
    password: '123'
  },
  {
    id: 21,
    email: 'xavierolivares@fullstack.com',
    password: '123'
  },
  {
    id: 22,
    email: 'fengjiang@fullstack.com',
    password: '123'
  },
  {
    id: 23,
    email: 'alyonarodina@fullstack.com',
    password: '123'
  },
  {
    id: 24,
    email: 'jingcao.yale@gmail.com',
    password: '123'
  },
  {
    id: 25,
    email: 'talluigi@fullstack.com',
    password: '123'
  },
  {
    id: 26,
    email: 'billytan@fullstack.com',
    password: '123'
  },
  {
    id: 27,
    email: 'annamai@fullstack.com',
    password: '123'
  },
  {
    id: 28,
    email: 'ericloucks@fullstack.com',
    password: '123'
  },
  {
    id: 29,
    email: 'matthewberman@fullstack.com',
    password: '123'
  },
  {
    id: 30,
    email: 'sofiabenitez@fullstack.com',
    password: '123'
  },
  {
    id: 31,
    email: 'jasoncho@fullstack.com',
    password: '123'
  },
  {
    id: 32,
    email: 'bienvenidorodriguez@fullstack.com',
    password: '123'
  },
  {
    id: 33,
    email: 'nikitagirko@fullstack.com',
    password: '123'
  },
  {
    id: 42,
    email: 'jackdwyer@fullstack.com',
    password: '123'
  },
  {
    id: 34,
    email: 'justinkichler@fullstack.com',
    password: '123'
  },
  {
    id: 35,
    email: 'davidpatlut@fullstack.com',
    password: '123'
  },
  {
    id: 36,
    email: 'wendysung@fullstack.com',
    password: '123'
  },
  {
    id: 37,
    email: 'trentrhodes@fullstack.com',
    password: '123'
  },
  {
    id: 38,
    email: 'manny@sadpanda.moe',
    password: ':('
  },
  {
    id: 39,
    email: 'dakotablair@fullstack.com',
    password: '123'
  },
  {
    id: 40,
    email: 'danielwasserman@fullstack.com',
    password: '123'
  },
  {
    id: 41,
    email: 'coinstance@coins.com',
    password: '$$$$'
  },
  {
    id: 43,
    email: 'jenniferscheinhorn@fullstack.com',
    password: '123'
  },
  {
    id: 44,
    email: 'nickbalestrieri@fullstack.com',
    password: '123'
  },
  {
    id: 45,
    email: 'ricardopineda@fullstack.com',
    password: '123'
  }
]

const seedOwner = [
  {
    id: 1,
    userId: 2
  }
]

const seedApartment = [
  {
    id: 1,
    unitNumber: '1A',
    buildingId: 1
  },
  {
    id: 2,
    unitNumber: '1B',
    buildingId: 1
  },
  {
    id: 3,
    unitNumber: '1C',
    buildingId: 1
  },
  {
    id: 4,
    unitNumber: '2A',
    buildingId: 1
  },
  {
    id: 5,
    unitNumber: '2B',
    buildingId: 1
  },
  {
    id: 6,
    unitNumber: '3A',
    buildingId: 1
  },
  {
    id: 7,
    unitNumber: '3B',
    buildingId: 1
  },
  {
    id: 8,
    unitNumber: '3C',
    buildingId: 1
  },
  {
    id: 9,
    unitNumber: '3D',
    buildingId: 1
  },
  {
    id: 10,
    unitNumber: '4A',
    buildingId: 1
  },
  {
    id: 11,
    unitNumber: '5A',
    buildingId: 1
  },
  {
    id: 12,
    unitNumber: '1A',
    buildingId: 2
  },
  {
    id: 13,
    unitNumber: '1B',
    buildingId: 2
  },
  {
    id: 14,
    unitNumber: '1C',
    buildingId: 2
  },
  {
    id: 15,
    unitNumber: '2B',
    buildingId: 2
  },
  {
    id: 16,
    unitNumber: '3B',
    buildingId: 2
  },
  {
    id: 17,
    unitNumber: '4A',
    buildingId: 2
  },
  {
    id: 18,
    unitNumber: '4B',
    buildingId: 2
  },
  {
    id: 19,
    unitNumber: '4C',
    buildingId: 2
  },
  {
    id: 20,
    unitNumber: '4D',
    buildingId: 2
  },
  {
    id: 21,
    unitNumber: '1A',
    buildingId: 3
  },
  {
    id: 22,
    unitNumber: '1B',
    buildingId: 3
  },
  {
    id: 23,
    unitNumber: '2C',
    buildingId: 3
  },
  {
    id: 24,
    unitNumber: '3D',
    buildingId: 3
  },
  {
    id: 25,
    unitNumber: '4F',
    buildingId: 3
  },
  {
    id: 26,
    unitNumber: '1B',
    buildingId: 4
  },
  {
    id: 27,
    unitNumber: '1C',
    buildingId: 4
  },
  {
    id: 28,
    unitNumber: '2A',
    buildingId: 4
  },
  {
    id: 29,
    unitNumber: '2B',
    buildingId: 4
  },
  {
    id: 30,
    unitNumber: '3A',
    buildingId: 4
  }
]

const seedResident = [
  {
    id: 1,
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
    userId: 4,
    apartmentId: 1
  },
  {
    id: 2,
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
    userId: 5,
    apartmentId: 2
  },
  {
    id: 3,
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
    userId: 6,
    apartmentId: 3
  },
  {
    id: 4,
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
    userId: 7,
    apartmentId: 4
  },
  {
    id: 5,
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
    userId: 9,
    apartmentId: 5
  },
  {
    id: 6,
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
    userId: 10,
    apartmentId: 6
  },
  {
    id: 7,
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
    userId: 11,
    apartmentId: 7
  },
  {
    id: 8,
    firstName: 'Zachary',
    lastName: 'Droge',
    phoneNumber: '9172831320',
    photoUrl:
      'https://media.licdn.com/dms/image/C5603AQGBchSRLFF8IA/profile-displayphoto-shrink_800_800/0?e=1567641600&v=beta&t=zCnYUwDEFzs9415bQfgA1p3hnRlrK5PpgH3z1X-B82Q',
    address1: '1774 74th Street ',
    address2: '',
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11204',
    isVerified: true,
    userId: 12,
    apartmentId: 8
  },
  {
    id: 9,
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
    userId: 13,
    apartmentId: 9
  },
  {
    id: 10,
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
    userId: 14,
    apartmentId: 10
  },
  {
    id: 11,
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
    userId: 15,
    apartmentId: 11
  },
  {
    id: 12,
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
    userId: 16,
    apartmentId: 12
  },
  {
    id: 13,
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
    userId: 17,
    apartmentId: 13
  },
  {
    id: 14,
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
    userId: 19,
    apartmentId: 14
  },
  {
    id: 15,
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
    userId: 20,
    apartmentId: 15
  },
  {
    id: 16,
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
    userId: 21,
    apartmentId: 16
  },
  {
    id: 17,
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
    userId: 22,
    apartmentId: 17
  },
  {
    id: 18,
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
    userId: 23,
    apartmentId: 18
  },
  {
    id: 19,
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
    userId: 28,
    apartmentId: 19
  },
  {
    id: 20,
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
    userId: 30,
    apartmentId: 20
  },
  {
    id: 21,
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
    userId: 31,
    apartmentId: 21
  },
  {
    id: 22,
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
    userId: 33,
    apartmentId: 22
  },
  {
    id: 23,
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
    userId: 42,
    apartmentId: 23
  },
  {
    id: 24,
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
    userId: 34,
    apartmentId: 24
  },
  {
    id: 25,
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
    userId: 38,
    apartmentId: 25
  },
  {
    id: 26,
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
    userId: 41,
    apartmentId: 26
  },
  {
    id: 27,
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
    userId: 40,
    apartmentId: 27
  },
  {
    id: 28,
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
    userId: 43,
    apartmentId: 28
  },
  {
    id: 29,
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
    userId: 44,
    apartmentId: 29
  },
  {
    id: 30,
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
    userId: 45,
    apartmentId: 30
  }
]

const seedNews = [
  {
    id: 1,
    title: 'New Recycle Rule',
    body:
      'Recyclable items include glass, metal, rigid plastic, and beverage cartons (blue decal); and paper and cardboard (green decal). You must place recyclable materials curbside in clear bags or labeled recycling bins between 4 PM and midnight the evening before your scheduled recycling collection day.',
    photoUrl:
      'https://www.portlandmaine.gov/ImageRepository/Document?documentID=21973',
    expDay: '07/30/2020',
    status: 'approved',
    residentId: null,
    ownerId: null,
    buildingId: 1
  },
  {
    id: 2,
    title: 'Late Fee Charge',
    body:
      'Starting July 1st, 2019, we will charge a $25 late fee if your monthly maintainance fee is not recieved by the 1st of each month. Please pay your maintainance fee on time to avoid the charge. You could pay your fee online or via check. If you are paying via check, please make sure your check is post stamped at least 5 days before the due date.',
    photoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU79DJiiihVKtv9a9bLlWfCMlZl7Szz1qL3Pkvo3vHFO3nBmM',
    expDay: '07/30/2020',
    status: 'approved',
    residentId: null,
    ownerId: null,
    buildingId: 1
  },
  {
    id: 3,
    title: 'Free Sofa',
    body: `I'm giving away a used 2 seats sofa. I got it from Westelm 2 years ago. Please come to pick it up in Apartment 3B. I'm usually home after 7pm.`,
    photoUrl:
      'https://www.westelm.com/weimgs/rk/images/wcm/products/201922/0173/crosby-mid-century-sofa-80-c.jpg',
    expDay: '07/30/2019',
    status: 'approved',
    residentId: 11,
    ownerId: 1,
    buildingId: 1
  },
  {
    id: 4,
    title: 'Looking for Paid Pet Sitter',
    body: `I'm looking for a pet sitter for my French Bulldog Pork. Ideally you will come to my apartment and feed him twice daily and take him out for walk 1-2 times a day. If you are avalible next Wednesday to Sunday, please conact me, I live in 4A.`,
    photoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmMLtxtwajiZaz0EPSrJ1cxvI4x6iJV-0rEs-PmVrezdHZ0YS_g',
    expDay: '08/12/2021',
    status: 'pending',
    residentId: 22,
    ownerId: 1,
    buildingId: 2
  },
  {
    id: 5,
    title: 'New Recycle Rule',
    body:
      'Recyclable items include glass, metal, rigid plastic, and beverage cartons (blue decal); and paper and cardboard (green decal). You must place recyclable materials curbside in clear bags or labeled recycling bins between 4 PM and midnight the evening before your scheduled recycling collection day.',
    photoUrl:
      'https://www.portlandmaine.gov/ImageRepository/Document?documentID=21973',
    expDay: '07/30/2020',
    status: 'approved',
    residentId: null,
    ownerId: 1,
    buildingId: 2
  },
  {
    id: 6,
    title: 'New Recycle Rule',
    body:
      'Recyclable items include glass, metal, rigid plastic, and beverage cartons (blue decal); and paper and cardboard (green decal). You must place recyclable materials curbside in clear bags or labeled recycling bins between 4 PM and midnight the evening before your scheduled recycling collection day.',
    photoUrl:
      'https://www.portlandmaine.gov/ImageRepository/Document?documentID=21973',
    expDay: '07/30/2020',
    status: 'approved',
    residentId: null,
    ownerId: 1,
    buildingId: 3
  },
  {
    id: 7,
    title: 'New Recycle Rule',
    body:
      'Recyclable items include glass, metal, rigid plastic, and beverage cartons (blue decal); and paper and cardboard (green decal). You must place recyclable materials curbside in clear bags or labeled recycling bins between 4 PM and midnight the evening before your scheduled recycling collection day.',
    photoUrl:
      'https://www.portlandmaine.gov/ImageRepository/Document?documentID=21973',
    expDay: '07/30/2020',
    status: 'approved',
    residentId: null,
    ownerId: 1,
    buildingId: 4
  },
  {
    id: 8,
    title: 'Late Fee Charge',
    body:
      'Starting July 1st, 2019, we will charge a $25 late fee if your monthly maintainance fee is not recieved by the 1st of each month. Please pay your maintainance fee on time to avoid the charge. You could pay your fee online or via check. If you are paying via check, please make sure your check is post stamped at least 5 days before the due date.',
    photoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU79DJiiihVKtv9a9bLlWfCMlZl7Szz1qL3Pkvo3vHFO3nBmM',
    expDay: '07/30/2020',
    status: 'approved',
    residentId: null,
    ownerId: 1,
    buildingId: 2
  },
  {
    id: 9,
    title: 'Late Fee Charge',
    body:
      'Starting July 1st, 2019, we will charge a $25 late fee if your monthly maintainance fee is not recieved by the 1st of each month. Please pay your maintainance fee on time to avoid the charge. You could pay your fee online or via check. If you are paying via check, please make sure your check is post stamped at least 5 days before the due date.',
    photoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU79DJiiihVKtv9a9bLlWfCMlZl7Szz1qL3Pkvo3vHFO3nBmM',
    expDay: '07/30/2020',
    status: 'approved',
    residentId: null,
    ownerId: 1,
    buildingId: 3
  },
  {
    id: 10,
    title: 'Late Fee Charge',
    body:
      'Starting July 1st, 2019, we will charge a $25 late fee if your monthly maintainance fee is not recieved by the 1st of each month. Please pay your maintainance fee on time to avoid the charge. You could pay your fee online or via check. If you are paying via check, please make sure your check is post stamped at least 5 days before the due date.',
    photoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU79DJiiihVKtv9a9bLlWfCMlZl7Szz1qL3Pkvo3vHFO3nBmM',
    expDay: '07/30/2020',
    status: 'approved',
    residentId: null,
    ownerId: 1,
    buildingId: 4
  },
  {
    id: 11,
    title: 'Manny Fell Down',
    body:
      'Unfortuantely I fell down in shower yesterday. I am in a lot of pain and have very limited mobility. I would really appreciate if someone could help me with errands. --Manny, 4F',
    photoUrl: 'http://seniors100.com/wp-content/uploads/2016/09/download.jpg',
    expDay: '12/30/2019',
    status: 'pending',
    residentId: 25,
    ownerId: 1,
    buildingId: 3
  }
]

const seedTickets = [
  {
    id: 1,
    location: 'bathroom',
    formDate: '07/03/2019',
    issue: 'The tiles are broken. Please fix them.',
    neighbor: false,
    photoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqJdOcy48s05E7aUT8R6URm4F5e7T17YMJdz1JiRi99EWBvDR',
    status: 'pending',
    createdAt: '07/04/2019',
    updatedAt: '07/04/2019',
    residentId: 25,
    ownerId: 1,
    workerId: null,
    apartmentId: 25
  },
  {
    id: 2,
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
    residentId: 25,
    ownerId: 1,
    workerId: null,
    apartmentId: 25
  },
  {
    id: 3,
    location: 'kitchen',
    formDate: '07/01/2019',
    issue: 'clogged sink drain, flooded kitchen',
    neighbor: true,
    photoUrl:
      'http://www.homeadvisorhomesource.com/wp-content/uploads/2013/12/Kitchen-Flooding.jpg',
    status: 'pending',
    createdAt: '07/05/2019',
    updatedAt: '07/05/2019',
    residentId: 26,
    ownerId: 1,
    workerId: null,
    apartmentId: 26
  },
  {
    id: 4,
    location: 'bathroom',
    formDate: '05/11/2019',
    issue: 'clogged toilet',
    neighbor: false,
    photoUrl: '',
    status: 'closed',
    createdAt: '05/11/2019',
    updatedAt: '05/11/2019',
    residentId: 26,
    ownerId: 1,
    workerId: null,
    apartmentId: 26
  },
  {
    id: 5,
    location: 'bathroom',
    formDate: '05/13/2019',
    issue: 'clogged shower drain',
    neighbor: false,
    photoUrl: '',
    status: 'closed',
    createdAt: '05/13/2019',
    updatedAt: '05/13/2019',
    residentId: 25,
    ownerId: 1,
    workerId: null,
    apartmentId: 25
  },
  {
    id: 6,
    location: 'bedroom',
    formDate: '03/02/2019',
    issue: 'bedbugs!!',
    neighbor: false,
    photoUrl: '',
    status: 'closed',
    createdAt: '03/03/2019',
    updatedAt: '03/03/2019',
    residentId: 17,
    ownerId: 1,
    workerId: null,
    apartmentId: 17
  },
  {
    id: 7,
    location: 'bedroom',
    formDate: '06/07/2019',
    issue:
      'cracked paint hanging, please come to remove it and repaint my bedroom.',
    neighbor: false,
    photoUrl: '',
    status: 'finished',
    createdAt: '06/09/2019',
    updatedAt: '07/04/2019',
    residentId: 25,
    ownerId: 1,
    workerId: null,
    apartmentId: 25
  },
  {
    id: 8,
    location: 'bedroom',
    formDate: '06/12/2019',
    issue: 'cannot close closet`s door and the door knob is broken',
    neighbor: false,
    photoUrl:
      'https://www.wikihow.com/images/thumb/9/9c/Interior_doorknob_4.JPG/687px-Interior_doorknob_4.JPG',
    status: 'confirmed',
    createdAt: '06/12/2019',
    updatedAt: '07/04/2019',
    residentId: 26,
    ownerId: 1,
    workerId: null,
    apartmentId: 26
  },
  {
    id: 9,
    location: 'kitchen',
    formDate: '07/01/2019',
    issue: 'refrigerator stopped working',
    neighbor: false,
    photoUrl: '',
    status: 'in-progress',
    createdAt: '07/01/2019',
    updatedAt: '07/05/2019',
    residentId: 25,
    ownerId: 1,
    workerId: null,
    apartmentId: 25
  },
  {
    id: 10,
    location: 'kitchen',
    formDate: '07/02/2018',
    issue: 'oven is not working',
    neighbor: false,
    photoUrl: '',
    status: 'closed',
    createdAt: '07/08/2018',
    updatedAt: '07/13/2018',
    residentId: 25,
    ownerId: 1,
    workerId: null,
    apartmentId: 25
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await User.bulkCreate(seedUsers)
  await Owner.bulkCreate(seedOwner)
  await Building.bulkCreate(seedBuildings)
  await Apartment.bulkCreate(seedApartment)
  await Resident.bulkCreate(seedResident)
  await News.bulkCreate(seedNews)
  await Ticket.bulkCreate(seedTickets)

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
