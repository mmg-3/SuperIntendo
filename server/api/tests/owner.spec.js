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
  Owner
} = require('../../db/models')

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
    let fakeBuilding, fakeNews
    const userData = {
      email: 'cody@email.com',
      password: '123'
    }
    const otherData = {
      email: 'user@example.org',
      password: '123'
    }
    const ownerData = {
      email: 'lola@sadpanda.moe',
      password: '123'
    }

    beforeEach(async () => {
      user = await User.create(userData)
      user2 = await User.create(otherData)
      user3 = await User.create(ownerData)
      resident = await Resident.create({
        firstName: 'Cody',
        lastName: 'daPug',
        userId: user.id
      })
      resident2 = await Resident.create({
        firstName: 'user',
        lastName: 'coinstance',
        userId: user2.id
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
        occupied: true,
        buildingId: building.id
      })
      resident.setApartment(apartment)
      resident2.setApartment(apartment)

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
      describe('/api/owner/tickets', () => {
        describe('GET /api/owner/tickets', () => {
          it('should get all the tickets for owned buildings', async () => {
            const agent = await login(ownerData)
            const res = await agent.get('/api/owner/tickets').expect(200)

            expect(res.body).to.be.instanceOf(Array)
            expect(res.body).to.have.lengthOf(2)

            expect(res.body.map(t => t.issue)).to.have.members([
              ticket1.issue,
              ticket2.issue
            ])
          })
        })
        describe('PUT /api/owner/tickets', () => {
          it('should be able to update a ticket status', async () => {
            expect(ticket1.status).to.equal('pending') // sanity check
            const agent = await login(ownerData)
            await agent
              .put('/api/owner/tickets/' + ticket1.id)
              .send({status: 'closed'})
              .expect(204)

            await ticket1.reload()
            expect(ticket1.status).to.equal('closed')
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
