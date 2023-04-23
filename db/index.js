const mongoose = require('mongoose')
require('dotenv').config()

let MONGODB_URI =
  'mongodb+srv://marie:xMPPKvGKVb3aGBDg@cluster0.spvm1i8.mongodb.net/?retryWrites=true&w=majority' ||
  'mongodb://127.0.0.1:27017/menuDatabase'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
