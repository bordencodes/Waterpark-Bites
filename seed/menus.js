const db = require('../db')
const Menu = require('../models/menu')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const menu = [
    {
      MenuCategory: ['Food', 'Drink', 'Desert'],
      Descriptions:
        'Come checkout our delicious food options at Waterpark Bites!',
      Items: [_id]
    }
  ]
  await Menu.insertMany(menu)
  console.log('created menu!')
}
const run = async () => {
  await main()
  db.close()
}
run()
