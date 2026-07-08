const serverless = require('serverless-http');
const app = require('../../api/index');

// Expose Express app wrapped in serverless-http handler for Netlify
module.exports.handler = serverless(app);
