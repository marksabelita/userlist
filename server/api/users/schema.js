const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
  id: String,
  first_name: String,
  last_name: String,
  contact_number: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;