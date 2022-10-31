const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Menu = new Schema(
  {
    MenuCategory: { type: Array, required: true },
    Descriptions: { type: String },
    Items: { type: Schema.Types.ObjectId, ref: 'Item' }
  },
  { timestamps: true }
)
module.exports = Menu
