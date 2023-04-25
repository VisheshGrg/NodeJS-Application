const mongoose = require('mongoose');

const User = mongoose.model('person', {
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  income: String,
  city: String,
  car: String,
  quote: String,
  phone_price: String
});

module.exports = User;