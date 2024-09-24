const SearchHistory = require('../models/SearchHistory');

exports.getSearchHistory = async (req, res) => {
  try {
    const history = await SearchHistory.findOne({ userId: req.user });
    if (!history) return res.json([]);

    res.json(history.searches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addToSearchHistory = async (req, res) => {
  const { currencyCode } = req.body;

  try {
    let history = await SearchHistory.findOne({ userId: req.user });

    if (!history) {
      history = new SearchHistory({ userId: req.user, searches: [currencyCode] });
    } else {
      // Remove duplicates and push new currency code
      const updatedSearches = [...new Set([currencyCode, ...history.searches])];
      history.searches = updatedSearches.slice(0, 5);  // Keep only last 5 unique searches
    }

    await history.save();
    res.json(history.searches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
