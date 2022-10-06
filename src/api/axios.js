const axios = require('axios');

const api = axios.create({
    baseURL: 'https://tankistpro-food.ru/',
  });

  module.exports = { api };