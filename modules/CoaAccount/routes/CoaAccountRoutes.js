// modules/CoaAccount/routes/CoaAccountRoutes.js
const Express = require('express');
const Router = Express.Router();
const CoaAccount = require('../controllers/CoaAccountController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/coa-account', CoaAccount.getAllCoaAccount);
Router.get('/coa-account/:id', CoaAccount.getCoaAccountById);
Router.post('/coa-account/create', CoaAccount.createCoaAccount);
Router.put('/coa-account/update/:id', CoaAccount.updateCoaAccount);
Router.delete('/coa-account/delete/:id', CoaAccount.deleteCoaAccount);

module.exports = Router;
