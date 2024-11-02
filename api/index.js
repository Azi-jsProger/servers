const app = require('../server'); // Импортируйте ваше приложение Express
const serverless = require('serverless-http');

module.exports.handler = serverless(app); // Экспортируйте обработчик
