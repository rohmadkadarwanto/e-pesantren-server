// modules/News/routes/NewsRoutes.js
const Express = require('express');
const Router = Express.Router();
const News = require('../controllers/NewsController');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.get('/news', News.getAllNews);
Router.get('/news/:id', News.getNewsById);
Router.post('/news', News.createNews);
Router.put('/news/:id', News.updateNews);
Router.delete('/news/:id', News.deleteNews);

module.exports = Router;