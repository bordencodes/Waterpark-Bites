const { Items, Menus } = require('../models')
const Menu = require('../models/menu')

const findFood = async (req, res) => {
  try {
    let list = await Items.find({ category: 'Food' })
    res.send(list)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findDrink = async (req, res) => {
  try {
    let list = await Items.find({ category: 'Drink' })
    res.send(list)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findDessert = async (req, res) => {
  try {
    let list = await Items.find({ category: 'Dessert' })
    res.send(list)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteItems = async (req, res) => {
  try {
    let list = await Items.findByIdAndDelete(req.params.id)
    res.send(list)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const findAllItems = async (req, res) => {
  try {
    let list = await Items.find()
    res.send(list)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createOrder = async (req, res) => {
  try {
    let list = await Items.create(req.body)
    console.log('Here is your order')
    res.send(list)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const findMenu = async (req, res) => {
  let list = await Menus.find()
  res.send(list)
}

module.exports = {
  findFood,
  findDrink,
  findDessert,
  deleteItems,
  findAllItems,
  createOrder,
  findMenu
}
