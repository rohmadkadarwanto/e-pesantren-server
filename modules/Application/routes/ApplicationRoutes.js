// modules/Application/routes/ApplicationRoutes.js
const Express = require('express');
const Router = Express.Router();
const Application = require('../controllers/ApplicationController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/application', Application.getAllApplication);
Router.get('/application/:id', Application.getApplicationById);
Router.get('/application/:package', Application.getApplicationByPackage);
Router.post('/application', Application.createApplication);
Router.put('/application/:id', Application.updateApplication);
Router.delete('/application/:id', Application.deleteApplication);

module.exports = Router;
