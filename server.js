const express = require('express')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')
const controllers = require('.//controllers')

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(logger('dev'))
app.use(cors())
app.use('/api', routes)

app.get('/hi', (req, res) => res.send('hello'))
app.get('/food', controllers.findFood)
app.get('/drink', controllers.findDrink)
app.get('/dessert', controllers.findDessert)
app.delete('/allItems/:id', controllers.deleteItems)
app.get('/allItems', controllers.findAllItems)
app.post('/order', controllers.createOrder)
app.get('/menu', controllers.findMenu)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
