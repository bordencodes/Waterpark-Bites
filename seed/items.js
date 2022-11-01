const db = require('../db')
const { Items } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const item = [
    {
      item: 'Burgers',
      category: 'Food',
      description: 'A fat, juicy burger that overloads your senses.',
      cost: 9.99
    },
    {
      item: 'French Fries',
      category: 'Food',
      description:
        'Cripsy, prefectly salty fries dusted with sea salt and double fried.',
      cost: 5.99
    },
    {
      item: 'Corn Dogs',
      category: 'Food',
      description:
        'Juicy hotdog coated in our special batter and served with our secret house sauce.',
      cost: 3.99
    },
    {
      item: 'Onion Rings',
      category: 'Food',
      description:
        'Fresh cruncy onions dipped generously in our special batter and lightly dusted with sea salt, also served with our secret house sauce.',
      cost: 2.99
    },
    {
      item: 'Vanilla Milkshake',
      category: 'Drink',
      description: 'Creamy, smooth vanilla milkshake.',
      cost: 3.99
    },
    {
      item: 'Water',
      category: 'Drink',
      description: 'Refreshing, thirst-quenching water served with ice.',
      cost: 0.99
    },
    {
      item: 'Lemonade',
      category: 'Drink',
      description:
        'A sweet and sour drink that quenches your left, but leaves you wanting more.',
      cost: 1.99
    },
    {
      item: 'Sprite',
      category: 'Drink',
      description: 'A classic carbonated lemon-lime beverage.',
      cost: 3.99
    },
    {
      item: 'Funnel Cake',
      category: 'Dessert',
      description: 'Fried sweet batter dusted with powedered sugar.',
      cost: 3.99
    },
    {
      item: 'Fried Oreos',
      category: 'Dessert',
      description:
        'A dessert of delicious oreos coated in a sweet batter and dusted with powdered sugar.',
      cost: 4.99
    },
    {
      item: 'Cheesecake Bites',
      category: 'Dessert',
      description:
        'Small bite-sized pieces of New York style cheescake drizzled in chocolate syrup.',
      cost: 5.99
    },
    {
      item: 'Parfait',
      category: 'Desert',
      description:
        'A cool desert perfect for a hot day with vanila yogurt, fresh berries, and a drizzle of strawberry sauce',
      cost: 2.99
    }
  ]
  await Items.insertMany(item)
  console.log('Created menu items')
}
const run = async () => {
  await main()
  db.close()
}
run()
