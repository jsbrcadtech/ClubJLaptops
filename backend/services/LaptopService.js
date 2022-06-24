const axios = require('axios');

// Request to Ali Express

async function loadData(endpoint) {
  let baseUrl = 'https://ali-express1.p.rapidapi.com';
  let response = await axios.get(baseUrl + endpoint, {
    method: 'GET',
    params: { query: 'Intel laptop', Limit: 10 },
    headers: {
      'X-RapidAPI-Host': 'ali-express1.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
    },
  });

  return response.data;
}

async function loadDataById(endpoint) {
  let baseUrl = 'https://ali-express1.p.rapidapi.com';
  let response = await axios.get(baseUrl + endpoint, {
    method: 'GET',
    params: { language: 'en' },
    headers: {
      'X-RapidAPI-Host': 'ali-express1.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
    },
  });

  return response.data;
}

module.exports = {
  loadData,
  loadDataById,
};
