// modules/Application/routes/ApplicationRoutes.js
const Express = require('express');
const Router = Express.Router();
const AuthController = require('../controllers/AuthController');
const apiKeyUtil = require('../../../utils/apiKey');
const apiKeyMiddleware = require('../../../utils/apiKey').apiKeyMiddleware;
const authUtils = require('../utils/authUtils');

// Middleware untuk memeriksa API key
Router.use(apiKeyMiddleware);

Router.post('/register', AuthController.registerUser);
Router.post('/login', AuthController.loginUser);
Router.post('/logout', authUtils.verifyTokenMiddleware, AuthController.logoutUser);
Router.post('/reset-password', authUtils.verifyTokenMiddleware, AuthController.resetPassword);

// Rute yang memerlukan otorisasi
Router.get('/profile', authUtils.verifyTokenMiddleware, (req, res) => {
  // Akses informasi pengguna dari req.user
  res.json({ user: req.user });
});


// Rute untuk mengelola API key
Router.post('/verify-api-key', authUtils.verifyTokenMiddleware, async (req, res) => {
  try {
    const { apiKey } = req.body;
    const isValidApiKey = await apiKeyUtil.verifyApiKey(apiKey);

    res.json({ isValidApiKey });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to verify API key' });
  }
});

module.exports = Router;
