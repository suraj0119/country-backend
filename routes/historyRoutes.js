const express = require('express');
const { getSearchHistory, addToSearchHistory } = require('../controllers/historyController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getSearchHistory);
router.post('/', authMiddleware, addToSearchHistory);

module.exports = router;
