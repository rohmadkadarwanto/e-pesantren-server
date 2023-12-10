// modules/CoaAccount/routes/CoaAccountRoutes.js
const Express = require('express');
const Router = Express.Router();
const CoaAccount = require('../controllers/CoaAccountController');
const apiKeyUtil = require('../../../utils/apiKey');

// Middleware untuk memeriksa API key
Router.use(apiKeyUtil.verifyApiKeyMiddleware);

Router.get('/coa-account', CoaAccount.getAllCoaAccount);
Router.get('/coa-account/:id', CoaAccount.getCoaAccountById);
Router.post('/coa-account', CoaAccount.createCoaAccount);
Router.put('/coa-account/:id', CoaAccount.updateCoaAccount);
Router.delete('/coa-account/:id', CoaAccount.deleteCoaAccount);

module.exports = Router;
