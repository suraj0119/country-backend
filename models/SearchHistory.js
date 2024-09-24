const mongoose = require('mongoose');

const searchHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  searches: [{ type: String, unique: true }],  // Store currency codes (limit to 5 unique)
}, { timestamps: true });

module.exports = mongoose.model('SearchHistory', searchHistorySchema);
