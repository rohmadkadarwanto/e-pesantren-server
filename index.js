// index.js
const Express = require('express');
const SwaggerUi = require('swagger-ui-express');
const Cors = require('cors');
const DocsFile = require('./docs.json');
const Path = require('path');
const BodyParser = require('body-parser');
const appConfig = require('./config/appConfig');
const apiKeyUtil = require('./utils/createApiKey');
const apiKeyMiddleware = require('./utils/apiKey').apiKeyMiddleware;
/* Routes */
const Router = require('./routes');
require('dotenv').config();

const App = Express();

// Middleware
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended: true }));

App.use(Cors());

// Middleware untuk memeriksa API key di seluruh rute utama
//App.use(apiKeyMiddleware);



/* Middlewares */
App.use(Router);

App.use('/', SwaggerUi.serve, SwaggerUi.setup(DocsFile));

// Start the server
App.listen(appConfig.app.port, () => {
  console.log(`Server is running on http://localhost:${appConfig.app.port}`);
});
