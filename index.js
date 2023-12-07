// index.js
const express = require('express');
const swaggerUi = require('swagger-ui-express')
const docsFile = require('./docs.json')
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

/* Routes */
const router = require('./routes')

/* Middlewares */
app.use(router)

app.use('/', swaggerUi.serve, swaggerUi.setup(docsFile))

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
