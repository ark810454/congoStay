const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { type } = require('os');

const userSchema = mongoose.Schema({
  fisrtName: {type: String, required : true},
  lastName: {type: String, required : true},
  email: { type: String, required: true, unique: true },
  gender: {type: String, required : true},
  password: { type: String, required: true },
  location: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);