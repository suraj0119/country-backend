const Favorite = require('../models/Favorite');

exports.addFavorite = async (req, res) => {
  const { country } = req.body;

  try {
    const favorite = new Favorite({ userId: req.user, country });
    await favorite.save();
    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeFavorite = async (req, res) => {
  const { country } = req.body;

  try {
    const favorite = await Favorite.findOneAndDelete({ userId: req.user, country });
    if (!favorite) return res.status(404).json({ message: 'Favorite not found' });
    
    res.json({ message: 'Favorite removed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.user });
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
