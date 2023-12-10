// modules/News/controllers/NewsController.js
const NewsModel = require('../models/NewsModel');
const Response = require('../../../utils/response');

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
  const { app, title, text, images, type, status } = req.body;
  try {
    const newNews = await NewsModel.createNews({ app, title, text, images, type, status });
    Response.success(res, newNews, 201);
  } catch (error) {
    Response.error(res, error.message);
  }
};

exports.updateNews = async (req, res) => {
  const NewsId = req.params.id;
  const { app, title, text, images, type, status } = req.body;
  try {
    const updatedNews = await NewsModel.updateNews(NewsId, { app, title, text, images, type, status, updated_at: new Date() });
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
