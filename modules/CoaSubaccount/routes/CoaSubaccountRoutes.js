// modules/CoaSubaccount/routes/CoaSubaccountRoutes.js
const Express = require('express');
const Router = Express.Router();
const CoaSubaccount = require('../controllers/CoaSubaccountController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/coa-subaccount', CoaSubaccount.getAllCoaSubaccount);
Router.get('/coa-subaccount/:id', CoaSubaccount.getCoaSubaccountById);
Router.post('/coa-subaccount/create', CoaSubaccount.createCoaSubaccount);
Router.put('/coa-subaccount/update/:id', CoaSubaccount.updateCoaSubaccount);
Router.delete('/coa-subaccount/delete/:id', CoaSubaccount.deleteCoaSubaccount);

module.exports = Router;
