const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  googleId: String,
  facebookId: String
	// credits: { type: Number, default: 0 }
});

//(name of collection, schema for collection)
module.exports = mongoose.model('users', UserSchema);