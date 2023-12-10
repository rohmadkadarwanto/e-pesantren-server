// utils/apiKey.js
const DB = require('../config/db');
const appConfig = require('../config/appConfig');
const Response = require('./response');

exports.verifyApiKeyMiddleware = async (req, res, next) => {
  const apiKey = req.headers['api-key'] || appConfig.app.defaultApiKey;

  if (!apiKey) {
    return Response.error(res, 'API key is required', 401);
  }

  try {
    if (apiKey === 'default-api-key') {
      // Lakukan sesuatu jika menggunakan nilai default
      return Response.error(res, 'Default API key is not allowed', 401);
    }

    DB.query('SELECT * FROM application WHERE `key` = ?', [apiKey], (error, results) => {
      if (error) {
        console.error(error);
        return Response.error(res, 'Authentication failed', 500);
      }

      const aplikasi = results[0];

      if (!aplikasi) {
        return Response.error(res, 'Invalid API key', 401);
      }

      req.aplikasi = aplikasi;
      next();
    });
  } catch (error) {
    console.error(error);
    Response.error(res, 'Authentication failed', 500);
  }
};
