//buildings
const seedBuildings = [
  {
    id: 1,
    address: '30 Morningside Drive',
    city: 'New York',
    state: 'NY',
    zipcode: '10025',
    ownerId: 1,
    buildingUrl:
      'https://cdn-img-feed.streeteasy.com/nyc/image/41/368675841.jpg'
  },
  {
    id: 2,
    address: '30-02 39th Avenue',
    city: 'Long Island City',
    state: 'NY',
    zipcode: '11101',
    ownerId: 1,
    buildingUrl:
      'https://newconstructionmanhattan.com/sites/default/files/images/arc-lic-02.jpg'
  },
  {
    id: 3,
    address: '420 Kent Avenue',
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11249',
    ownerId: 1,
    buildingUrl:
      'https://cdn.vox-cdn.com/thumbor/JMYvte1yBjbETc92fWaAuYTyZi0=/0x0:2200x1238/1200x800/filters:focal(924x443:1276x795)/cdn.vox-cdn.com/uploads/chorus_image/image/60047829/CURBED_420_Kent___3_towers_from_East_River.0.jpg'
  },
  {
    id: 4,
    address: '134-37 35th Avenue',
    city: 'Flushing',
    state: 'NY',
    zipcode: '11354',
    ownerId: 1,
    buildingUrl: 'https://cdn-img0.streeteasy.com/nyc/image/32/362124832.jpg'
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
    id: 33,
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
  }
]

const seedOwner = [
  {
    id: 1,
    userId: 41
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
    isVertified: true,
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
    isVertified: true,
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
    isVertified: true,
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
    isVertified: true,
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
    isVertified: true,
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
    isVertified: true,
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
    isVertified: true,
    userId: 11,
    apartmentId: 7
  },
  {
    id: 8,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 8
  },
  {
    id: 9,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 9
  },
  {
    id: 10,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 10
  },
  {
    id: 11,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 11
  },
  {
    id: 12,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 12
  },
  {
    id: 13,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 13
  },
  {
    id: 14,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 14
  },
  {
    id: 15,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 15
  },
  {
    id: 16,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 16
  },
  {
    id: 17,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 17
  },
  {
    id: 18,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 18
  },
  {
    id: 19,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 19
  },
  {
    id: 20,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 20
  },
  {
    id: 21,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 21
  },
  {
    id: 22,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 22
  },
  {
    id: 23,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 23
  },
  {
    id: 24,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 24
  },
  {
    id: 25,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 25
  },
  {
    id: 26,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 26
  },
  {
    id: 27,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 27
  },
  {
    id: 28,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 28
  },
  {
    id: 29,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 29
  },
  {
    id: 30,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    photoUrl: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    isVertified: true,
    userId: 2,
    apartmentId: 30
  }
]
