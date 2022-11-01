const mongoose = require('mongoose')
const menu = require('./menu')
const items = require('./item')

const Items = mongoose.model('Item', items)
const Menus = mongoose.model('Menu', menu)

module.exports = {
  Menus,
  Items
}
