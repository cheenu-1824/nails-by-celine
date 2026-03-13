require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;
const mongoUri = process.env.MONGO_URI;

if (mongoUri && mongoUri.startsWith('mongodb')) {
  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
} else {
 
  console.log('No valid MongoDB URI provided. Skipping database connection.');
}

// Test route
app.get('/', (req, res) => {
  res.send('Hello! Server is running without a database.');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));