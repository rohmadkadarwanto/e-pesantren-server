// modules/News/controllers/NewsController.js
const NewsModel = require('../models/NewsModel');
const Response = require('../../../utils/response');
const appUtils = require('../../../utils/appUtils');
const appConfig = require('../../../config/appConfig');

exports.getAllNews = async (req, res) => {
  try {
    const News = await NewsModel.getAllNews();
    Response.success(res, News);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.getNewsById = async (req, res) => {
  const NewsId = req.params.id;
  try {
    const News = await NewsModel.getNewsById(NewsId);
    Response.success(res, News);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.createNews = async (req, res) => {
  const { title, text, images, type, status } = req.body;
  const apiKey = req.headers[appConfig.app.apiKeyHeader] || appConfig.app.defaultApiKey;
  try {
    // Ambil data aplikasi berdasarkan API key
    const app = await appUtils.getAppFromHeaderKey(apiKey) || 'dpi.pesantren.app';

    const newNews = await NewsModel.createNews({ app, title, text, images, type, status });
    Response.success(res, newNews, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateNews = async (req, res) => {
  const NewsId = req.params.id;
  const { title, text, images, type, status } = req.body;
  try {
    const updatedNews = await NewsModel.updateNews(NewsId, { title, text, images, type, status, updated_at: new Date() });
    Response.success(res, updatedNews);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.deleteNews = async (req, res) => {
  const NewsId = req.params.id;
  try {
    await NewsModel.deleteNews(NewsId);
    Response.success(res, null, 204);
  } catch (error) {
    Response.error(res, error.message);
  }
};
