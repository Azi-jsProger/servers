const app = require('../server'); // Импортируйте ваше приложение Express
const serverless = require('serverless-http');

// Экспортируйте обработчик
module.exports = serverless(app);
