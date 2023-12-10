// index.js
const Express = require('express');
const SwaggerUi = require('swagger-ui-express');
const DocsFile = require('./docs.json');
const Path = require('path');
const BodyParser = require('body-parser');
const apiKeyUtil = require('./utils/apiKey');
const appConfig = require('./config/appConfig');
require('dotenv').config();

const App = Express();

// Middleware
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended: true }));

// Middleware untuk memeriksa API key di seluruh rute utama
App.use(apiKeyUtil.verifyApiKeyMiddleware);

/* Routes */
const Router = require('./routes');

/* Middlewares */
App.use(Router);

App.use('/', SwaggerUi.serve, SwaggerUi.setup(DocsFile));

// Start the server
App.listen(appConfig.app.port, () => {
  console.log(`Server is running on http://localhost:${appConfig.app.port}`);
});
