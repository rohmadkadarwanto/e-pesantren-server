// modules/Application/routes/ApplicationRoutes.js
const Express = require('express');
const Router = Express.Router();
const Application = require('../controllers/ApplicationController');
const apiKeyUtil = require('../../../utils/apiKey');

// Middleware untuk memeriksa API key
Router.use(apiKeyUtil.verifyApiKeyMiddleware);

Router.get('/application', Application.getAllApplication);
Router.get('/application/:id', Application.getApplicationById);
Router.post('/application', Application.createApplication);
Router.put('/application/:id', Application.updateApplication);
Router.delete('/application/:id', Application.deleteApplication);

module.exports = Router;
