const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema(
  {
    item: { type: String, required: true },
    category: { type: String, required: false },
    description: { type: String, required: true },
    cost: { type: Number, required: true }
  },
  { timestamps: true }
)
module.exports = Item
