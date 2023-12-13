// utils/apiKey.js
const DB = require('../config/db');
const appConfig = require('../config/appConfig');
const Response = require('./response');
const apiKeyUtil = require('./apiKey');

exports.generateApiKey = () => {
  const apiKey = crypto.randomBytes(32).toString('hex');
  return apiKey;
};

exports.saveApiKey = async (namaAplikasi, package, client) => {
  try {
    const apiKey = this.generateApiKey();

    const query = 'INSERT INTO application (name, package, client, `key`, status, type) VALUES (?, ?, ?, ?, ?, ?)';
    await DB.query(query, [namaAplikasi, package, client, apiKey, 1, 1]);

    return apiKey;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to save API key');
  }
};

exports.verifyApiKey = async (apiKey) => {
  try {
    const result = await DB.query('SELECT * FROM application WHERE `key` = ? AND `status` = 1', [apiKey]);

    if (result.length === 0) {
      return false;
    }

    const Application = result[0];

    return true;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to verify API key');
  }
};

exports.apiKeyMiddleware = async (req, res, next) => {
  const apiKey = req.headers[appConfig.app.apiKeyHeader] || appConfig.app.defaultApiKey;

  if (!apiKey) {
    return Response.error(res, 'API key is required', 401);
  }

  try {
    if (apiKey === 'default-api-key') {
      return Response.error(res, 'Default API key is not allowed', 401);
    }

    const isValidApiKey = await this.verifyApiKey(apiKey);

    if (!isValidApiKey) {
      return Response.error(res, 'Invalid API key', 401);
    }

    //req.apiKey = apiKey;
    next();
  } catch (error) {
    console.error(error);
    return Response.error(res, 'Authentication failed', 500);
  }
};
