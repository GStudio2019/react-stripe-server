const stripeAPI = require('stripe')(process.env.REACT_APP_SECRET_KEY);

module.exports = stripeAPI;