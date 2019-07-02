/* eslint-disable max-nested-callbacks */
/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../index')
const {
  User,
  Resident,
  Ticket,
  News,
  Apartment,
  Building
} = require('../../db/models')

const login = async userInfo => {
  const agent = request.agent(app)
  await agent.post('/auth/login').send(userInfo)
  return agent
}

describe('Resident routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/resident/', () => {
    let user, resident, building, apartment, news1, news2, ticket1, ticket2
    let user2, resident2
    const userData = {
      email: 'cody@email.com',
      password: '123'
    }
    const otherData = {
      email: 'user@example.org',
      password: '123'
    }

    beforeEach(async () => {
      user = await User.create(userData)
      user2 = await User.create(otherData)
      resident = await Resident.create({
        firstName: 'Cody',
        lastName: 'daPug',
        userId: user.id,
        phoneNumber: '111-111-1111',
        imageUrl:
          'https://user-images.githubusercontent.com/12876798/38030875-d3166276-3267-11e8-96d9-309aa8cf008b.png'
      })
      resident2 = await Resident.create({
        firstName: 'user',
        lastName: 'coinstance',
        userId: user2.id,
        phoneNumber: '222-222-2222',
        imageUrl:
          'https://globalcoinreport.com/wp-content/uploads/2018/03/cropped-favicon.png'
      })
      building = await Building.create({
        address: '5 Hangover Square',
        city: 'New York',
        state: 'NY',
        zipcode: '10004'
      })
      apartment = await Apartment.create({
        unitNumber: '11A',
        occupied: true,
        buildingId: building.id
      })

      ticket1 = await Ticket.create({
        location: 'somewhere over the rainbow',
        issue: 'it doesnt seem to exist',
        neighbor: true,
        apartmentId: apartment.id,
        residentId: resident.id
      })

      ticket2 = await Ticket.create({
        location: 'kitchen',
        issue: 'Flood',
        neighbor: true,
        apartmentId: apartment.id,
        residentId: resident.id
      })

      news1 = await News.create({
        title: 'I am a sadpanda',
        body: 'nobody understands the panda',
        buildingId: building.id
      })

      news2 = await News.create({
        title: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
        body: 'too many projects, not enough time',
        buildingId: building.id
      })
    })

    describe('guest: /api/resident', () => {
      it('does not allow guests to access the page', async () => {
        const agent = request.agent(app)
        await agent.get('/api/resident').expect(401)
      })
      it('does not allow homeless people to access the page', async () => {
        const agent = await login(userData)
        await agent.get('/api/resident').expect(401)
      })
    })

    describe('logged-in: /api/resident', () => {
      beforeEach(async () => {
        await resident.setApartment(apartment)
      })
      describe('GET /api/resident', () => {
        it('should send back the resident object', async () => {
          const agent = await login(userData)
          const res = await agent.get('/api/resident').expect(200)

          expect(res.body).to.be.an('object')
          expect(res.body.firstName).to.equal(resident.firstName)
          expect(res.body.lastName).to.equal(resident.lastName)
        })
      })

      describe('PUT /api/resident', () => {
        it("should update a user's info", async () => {
          const agent = await login(userData)
          const newData = {firstName: 'Lola', lastName: 'daCat'}
          await agent
            .put('/api/resident')
            .send(newData)
            .expect(204)

          // now let's check the actual db to see if changed
          await resident.reload()
          expect(resident.firstName).to.equal(newData.firstName)
          expect(resident.lastName).to.equal(newData.lastName)
        })
        it('should not allow a user to change their image', async () => {
          const agent = await login(userData)
          const newData = {imageUrl: 'https://catbo.at/catboat.png'}
          await agent
            .put('/api/resident')
            .send(newData)
            .expect(204)

          await resident.reload()
          expect(resident.imageUrl).to.not.equal(newData.imageUrl)
        })
      })
      describe('/api/resident/tickets', () => {
        describe('GET /api/resident/tickets', () => {
          it('should fetch a users tickets', async () => {
            const agent = await login(userData)
            const res = await agent.get('/api/resident/tickets').expect(200)

            expect(res.body).to.be.instanceOf(Array)
            expect(res.body).have.lengthOf(2)
            const ticketIssues = res.body.map(t => t.issue)
            expect(ticketIssues).to.have.members([ticket1.issue, ticket2.issue])
          })
        })
        describe('POST /api/resident/tickets', () => {
          it('should create a new ticket', async () => {
            const agent = await login(userData)
            const ticketData = {
              location: 'test location',
              issue: 'does creating a ticket work',
              status: 'approved'
            }
            const res = await agent
              .post('/api/resident/tickets')
              .send(ticketData)
              .expect(201)
            expect(res.body).to.be.instanceOf(Object)
            expect(res.body.issue).to.equal(ticketData.issue)
            expect(res.body.status).to.equal('pending')

            expect(await Ticket.findAll()).to.have.lengthOf(3)
          })
        })
      })

      describe('/api/resident/news', () => {
        describe('GET /api/resident/news', () => {
          it("should fetch the building's news", async () => {
            const agent = await login(userData)
            const res = await agent.get('/api/resident/news').expect(200)

            expect(res.body).to.be.instanceOf(Array)
            expect(res.body).have.lengthOf(2)
            const newsTitles = res.body.map(t => t.title)
            expect(newsTitles).to.have.members([news1.title, news2.title])
          })
        })
        describe('POST /api/resident/news', () => {
          it('should create new news', async () => {
            const agent = await login(userData)
            const newsData = {
              title: 'test location',
              bidt: 'does creating news work',
              status: 'approved'
            }
            const res = await agent
              .post('/api/resident/news')
              .send(newsData)
              .expect(201)
            expect(res.body).to.be.instanceOf(Object)
            expect(res.body.title).to.equal(newsData.title)
            expect(res.body.status).to.equal('pending')

            expect(await News.findAll()).to.have.lengthOf(3)
          })
        })
      })
    })
  })
})
