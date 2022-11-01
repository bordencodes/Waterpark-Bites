const { ObjectID } = require('bson')
const db = require('../db')
const { Menus, Items } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const Burger = await Items.find({ item: 'Burgers' })
  const menu = [
    {
      MenuCategory: ['Food', 'Drink', 'Desert'],
      Descriptions:
        'Come checkout our delicious food options at Waterpark Bites!',
      Items: Burger._id
    }
  ]
  await Menus.insertMany(menu)
  console.log('created menu!')
}
const run = async () => {
  await main()
  db.close()
}
run()
