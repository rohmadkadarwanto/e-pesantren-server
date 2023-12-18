// modules/Application/routes/ApplicationRoutes.js
const Express = require('express');
const Router = Express.Router();
const Application = require('../controllers/ApplicationController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/application', Application.getAllApplication);
Router.get('/application/:package', Application.getApplicationById);
Router.post('/application/create', Application.createApplication);
Router.put('/application/update/:package', Application.updateApplication);
Router.delete('/application/delete/:id', Application.deleteApplication);
module.exports = Router;
