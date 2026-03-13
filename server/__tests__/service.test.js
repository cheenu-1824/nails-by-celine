const request = require('supertest');
const express = require('express');
const serviceRoutes = require('../routes/serviceRoutes');
const Service = require('../models/service');

const app = express();
app.use(express.json());
app.use('/api/services', serviceRoutes);

beforeAll(async () => {
});
