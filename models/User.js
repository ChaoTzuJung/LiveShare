const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema;


const UserSchema = new Schema ({
  fullname: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String},
  company: {
    name: {type: String, default: ''},
    image: {type: String, default: ''}
  },
  passwordResetToken: {type: String, default: ''},
  passwordResetExpires: {type: Date, default: Date.now},
  facebook: {type: String, default: ''},
  tokens: Array,
	googleId: String,
	credits: { type: Number, default: 0 }

});
UserSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);  
}
module.exports = mongoose.model('users', UserSchema);