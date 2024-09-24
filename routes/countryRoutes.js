const express = require('express');
const { getCountryByCurrency } = require('../controllers/countryController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/:currencyCode', authMiddleware, getCountryByCurrency);

module.exports = router;
