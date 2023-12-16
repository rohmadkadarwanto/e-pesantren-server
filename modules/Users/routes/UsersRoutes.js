// modules/Users/routes/UsersRoutes.js
const Express = require('express');
const Router = Express.Router();
const Users = require('../controllers/UsersController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/users', Users.getAllUsers);
Router.get('/users/:id', Users.getUsersById);
Router.post('/users/create', Users.createUsers);
Router.put('/users/update/:id', Users.updateUsers);
Router.delete('/users/delete/:id', Users.deleteUsers);

module.exports = Router;
