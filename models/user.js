const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // adding the unique property and set it to true, it creates an index for the email. Speeds up the query process when the email is requested.
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  places: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = Schema("User", userSchema);
