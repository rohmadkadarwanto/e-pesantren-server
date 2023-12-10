// modules/Sales/routes/SalesRoutes.js
const Express = require('express');
const Router = Express.Router();
const Sales = require('../controllers/SalesController');
const apiKeyUtil = require('../../../utils/apiKey');

// Middleware untuk memeriksa API key
Router.use(apiKeyUtil.verifyApiKeyMiddleware);

Router.get('/sales', Sales.getAllSales);
Router.get('/sales/:id', Sales.getSalesById);
Router.post('/sales', Sales.createSales);
Router.put('/sales/:id', Sales.updateSales);
Router.delete('/sales/:id', Sales.deleteSales);

module.exports = Router;
