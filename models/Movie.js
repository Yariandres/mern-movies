const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    desc: { type: String, required: false },
    rating: { type: Number, required: false }
  }
)

module.exports = mongoose.model('movies', Movie);