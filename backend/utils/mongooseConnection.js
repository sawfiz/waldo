const mongoose = require('mongoose');
const CustomError = require('./CustomError');

// Disable strict mode for queries
mongoose.set('strictQuery', false);

async function connectToMongoDB() {
  try {
    console.log("🚀 ~ file: mongooseConnection.js:10 ~ connectToMongoDB ~ process.env.MONGODB_URI:", process.env.MONGODB_URI)
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error:', error);
    throw new CustomError(500, 'Database connection error');
  }
}

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
  throw new CustomError(500, 'Database connection error');
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
  throw new CustomError(500, 'Database disconnected');
});

module.exports = { connectToMongoDB };