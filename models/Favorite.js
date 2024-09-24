const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  country: { type: String, required: true },  // Country name or currency code
}, { timestamps: true });

module.exports = mongoose.model('Favorite', favoriteSchema);
