const axios = require('axios');

exports.getCountryByCurrency = async (req, res) => {
  const { currencyCode } = req.params;
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/currency/${currencyCode}`);
    const countries = response.data.map(country => ({
      name: country.name.common,
      capital: country.capital ? country.capital[0] : 'N/A',
      languages: Object.values(country.languages).join(', '),
      flag: `https://flagsapi.com/${country.cca2}/shiny/64.png`,
      currency: currencyCode
    }));
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
