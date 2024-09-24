const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  searchHistory: [{ type: String }],
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Favorite' }]
});

module.exports = mongoose.model('User', userSchema);
