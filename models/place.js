const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: { type: String, required: true }, // remember the type has to be capitalized.
  description: { type: String, required: true },
  image: { type: String, required: true }, // a url will be passed into this field. not best practice to have images in your database. better to bring them in through a url for performance. The database needs to be high performance.
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  creator: { type: String, required: true },
});

module.exports = mongoose.model('Place', placeSchema) // first argument, starts with uppercase letter and the singular version. second argument is the schema that was just created.