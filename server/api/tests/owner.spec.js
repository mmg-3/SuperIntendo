/* eslint-disable no-unused-expressions */
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
  Building,
  Owner,
  Worker
} = require('../../db/models')
const Sequelize = require('sequelize')

const login = async userInfo => {
  const agent = request.agent(app)
  await agent.post('/auth/login').send(userInfo)
  return agent
}

describe('Owner routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/owner/', () => {
    let user, resident, building, apartment, news1, news2, ticket1, ticket2
    let user2, resident2
    let user3, owner
    let fakeBuilding, fakeNews, fakeApt, fakeUser, fakeResident
    let user4, worker1
    let user5, worker2
    const password = '123'
    const userData = {
      email: 'cody@email.com',
      password
    }
    const otherData = {
      email: 'user@example.org',
      password
    }
    const ownerData = {
      email: 'lola@sadpanda.moe',
      password
    }
    const fakeUserData = {
      email: 'fake@mcfaker.org',
      password
    }
    const user4Data = {
      email: 'mario@email.com',
      password
    }
    const user5Data = {
      email: 'luigi@email.com',
      password
    }

    beforeEach(async () => {
      user = await User.create(userData)
      user2 = await User.create(otherData)
      user3 = await User.create(ownerData)
      user4 = await User.create(user4Data)
      user5 = await User.create(user5Data)
      fakeUser = await User.create(fakeUserData)
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
      fakeResident = await Resident.create({
        firstName: 'faker',
        lastName: 'mcFaker',
        userId: fakeUser.id,
        phoneNumber: '555-555-5555'
      })
      owner = await Owner.create({
        userId: user3.id
      })
      building = await Building.create({
        address: '5 Hangover Square',
        city: 'New York',
        state: 'NY',
        zipcode: '10004',
        ownerId: owner.id
      })
      fakeBuilding = await Building.create({
        address: 'fake building',
        city: 'New York',
        state: 'NY',
        zipcode: '10004'
      })
      apartment = await Apartment.create({
        unitNumber: '11A',
        buildingId: building.id
      })
      fakeApt = await Apartment.create({
        unitNumber: 'F1',
        buildingId: fakeBuilding.id
      })
      resident.setApartment(apartment)
      resident2.setApartment(apartment)
      fakeResident.setApartment(fakeApt)

      ticket1 = await Ticket.create({
        location: 'somewhere over the rainbow',
        issue: 'it doesnt seem to exist',
        neighbor: true,
        apartmentId: apartment.id,
        ownerId: owner.id,
        residentId: resident.id
      })

      ticket2 = await Ticket.create({
        location: 'kitchen',
        issue: 'Flood',
        neighbor: true,
        ownerId: owner.id,
        apartmentId: apartment.id,
        residentId: resident.id,
        status: 'confirmed'
      })

      news1 = await News.create({
        title: 'I am a sadpanda',
        body: 'nobody understands the panda',
        buildingId: building.id,
        ownerId: owner.id
      })

      news2 = await News.create({
        title: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
        body: 'too many projects, not enough time',
        buildingId: building.id,
        ownerId: owner.id
      })

      fakeNews = await News.create({
        title: 'FAKE NEWS',
        body: 'WHAT DOES THE FOX SAY?'
      })
      worker1 = await Worker.create({
        userId: user4.id,
        firstName: 'mario',
        lastName: 'bros',
        phoneNumber: '555-555-5555',
        mailingAddress: '111',
        imageUrl: 'a',
        skills: []
      })
      worker2 = await Worker.create({
        userId: user5.id,
        firstName: 'luigi',
        lastName: 'bros',
        phoneNumber: '555-555-5555',
        mailingAddress: '111',
        imageUrl: 'a',
        skills: []
      })
    })

    describe('guest:', () => {
      it('does not allow guests to access the page', async () => {
        const agent = request.agent(app)
        await agent.get('/api/owner').expect(401)
      })
      it('does not allow non owners to access the page', async () => {
        const agent = await login(userData)
        await agent.get('/api/owner').expect(401)
      })
    })
    describe('logged-in:', () => {
      describe('/api/owner/buildings/', () => {
        describe('GET /api/owner/buildings', () => {
          it('should send back a bunch of stuff', async () => {
            const agent = await login(ownerData)
            const res = await agent.get('/api/owner/buildings').expect(200)
            expect(res.body).to.be.instanceOf(Array)
            expect(res.body).to.have.lengthOf(1)
            expect(res.body[0].address).to.equal(building.address)
          })
        })
        describe('GET /api/owner/buildings/:buildingId', () => {
          it('should fetch a single building with lots of data', async () => {
            const agent = await login(ownerData)
            const res = await agent
              .get('/api/owner/buildings/' + building.id)
              .expect(200)

            expect(res.body).to.be.instanceOf(Object)
            const b = res.body
            expect(b.address).to.equal(building.address)

            expect(b.news).to.be.instanceOf(Array)
            expect(b.news).have.lengthOf(2)

            expect(b.apartments).to.be.instanceOf(Array)
            expect(b.apartments[0].residents).to.be.instanceOf(Array)
            expect(b.apartments[0].residents).have.lengthOf(2)
          })
        })
        describe('POST /api/owner/buildings', () => {
          it('should create a building', async () => {
            const agent = await login(ownerData)
            const buildingData = {
              address: '005 P-hub',
              city: 'Phoenix',
              state: 'AZ',
              zipcode: '85027'
            }
            const res = await agent
              .post('/api/owner/buildings')
              .send(buildingData)
              .expect(201)

            expect(res.body).be.instanceOf(Object)
            expect(res.body.address).to.equal(buildingData.address)
          })
        })
      })
      describe('/api/owner/:residentId', () => {
        describe('PUT /api/owner/:residentId/approve', () => {
          it('should send 401 if resident does not live in owned building', async () => {
            const agent = await login(ownerData)
            await agent.put(`/api/owner/${fakeResident.id}/approve`).expect(401)
          })
          it('should set the resident to verified', async () => {
            expect(resident.isVerified).to.be.false

            const agent = await login(ownerData)
            await agent.put(`/api/owner/${resident.id}/approve`)

            await resident.reload()
            expect(resident.isVerified).to.be.true
          })
        })
        describe('PUT /api/owner/:residentId/reject', () => {
          it('should send 401 if resident does not live in owned building', async () => {
            const agent = await login(ownerData)
            await agent.put(`/api/owner/${fakeResident.id}/reject`).expect(401)
          })
          it('should set the resident to verified', async () => {
            expect(resident.isVerified).to.be.false
            const id = resident.id
            const agent = await login(ownerData)
            await agent.put(`/api/owner/${resident.id}/reject`)
            const queryRes = await Resident.findByPk(id)
            expect(queryRes).to.be.null
          })
        })
      })
      describe('/api/owner/tickets', () => {
        describe('GET /api/owner/tickets/:ticketId/assign', () => {
          it('should get available workers for an assignment', async () => {
            const agent = await login(ownerData)
            const res = await agent
              .get(`/api/owner/tickets/${ticket1.id}/assign`)
              .expect(200)

            expect(res.body).to.be.instanceOf(Array)
            expect(res.body).to.have.lengthOf(2)

            expect(res.body.map(t => t.firstName)).to.have.members([
              worker1.firstName,
              worker2.firstName
            ])
          })
        })
        describe('PUT /tickets/:ticketId/close', () => {
          it('should close a ticket if status is confirmed', async () => {
            const agent = await login(ownerData)
            expect(ticket2.status).to.equal('confirmed')
            await agent
              .put(`/api/owner/tickets/${ticket2.id}/close/`)
              .expect(204)
            await ticket2.reload()
            expect(ticket2.status).to.equal('closed')
          })
        })
      })
      describe('/api/owner/buildings/buildingId/news', () => {
        describe('POST /api/owner/buildings/:buildingId/news', () => {
          it('should create a new news post', async () => {
            const newsUrl = `/api/owner/buildings/${building.id}/news`
            const agent = await login(ownerData)
            const newsData = {
              title: 'HELO WOLD',
              body: 'BLAH'.repeat(500)
            }

            const res = await agent
              .post(newsUrl)
              .send(newsData)
              .expect(201)
            expect(res.body.title).to.equal(newsData.title)
            expect(res.body.body).to.equal(newsData.body)

            expect(await News.findAll()).to.have.lengthOf(4)
          })
          it('should not allow you to write to another building', async () => {
            const newsUrl = `/api/owner/buildings/${fakeBuilding.id}/news`
            const agent = await login(ownerData)
            const newsData = {
              title: 'bad post',
              body: 'blah'
            }

            await agent
              .post(newsUrl)
              .send(newsData)
              .expect(401)
          })
        })
        describe('PUT /api/owner/buildings/:buildingId/news/:newsId', () => {
          it('should change the status for a given news', async () => {
            const newsUrl = `/api/owner/buildings/${building.id}/news/${
              news1.id
            }`
            expect(news1.status).to.equal('pending')

            const agent = await login(ownerData)
            await agent
              .put(newsUrl)
              .send({status: 'approved'})
              .expect(204)

            await news1.reload()
            expect(news1.status).to.equal('approved')
          })
          it('should not allow you to change another news status', async () => {
            const newsUrl = `/api/owner/buildings/${building.id}/news/${
              fakeNews.id
            }`
            const agent = await login(ownerData)
            await agent
              .put(newsUrl)
              .send({status: 'approved'})
              .expect(401)
          })
        })
      })
    })
  })
})
