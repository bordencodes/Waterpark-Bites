const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    cost: { type: Number, required: true }
  },
  { timestamps: true }
)
module.exports = Item
