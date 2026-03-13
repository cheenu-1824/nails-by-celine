const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const serviceRoutes = require('../routes/serviceRoutes');
const Service = require('../models/service');

let mongoServer;
const app = express();
app.use(express.json());
app.use('/api/services', serviceRoutes);

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri);

  await Service.create({ name: 'Test Service', price: 50 });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe('GET /api/services', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/api/services');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('name', 'Test Service');
  }, 10000);
});

describe('POST /api/services', () => {
  it('should create a new service', async () => {
    const res = await request(app)
      .post('/api/services')
      .send({ name: 'New Service', price: 75 });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'New Service');
    expect(res.body).toHaveProperty('price', 75);
  }, 10000);
});