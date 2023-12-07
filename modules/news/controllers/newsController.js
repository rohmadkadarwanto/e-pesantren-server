// modules/news/controllers/newsController.js
const newsModel = require('../models/newsModel');
const response = require('../../../utils/response');

exports.getAllNews = async (req, res) => {
  try {
    const news = await newsModel.getAllNews();
    response.success(res, news);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.getNewsById = async (req, res) => {
  const newsId = req.params.id;
  try {
    const news = await newsModel.getNewsById(newsId);
    response.success(res, news);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.createNews = async (req, res) => {
  const newsData = req.body;
  try {
    const newNews = await newsModel.createNews(newsData);
    response.success(res, newNews, 201);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.updateNews = async (req, res) => {
  const newsId = req.params.id;
  const updatedNewsData = req.body;
  try {
    const updatedNews = await newsModel.updateNews(newsId, updatedNewsData);
    response.success(res, updatedNews);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};

exports.deleteNews = async (req, res) => {
  const newsId = req.params.id;
  try {
    await newsModel.deleteNews(newsId);
    response.success(res, null, 204);
  } catch (error) {
    console.error(error);
    response.error(res, 'Internal Server Error', 500);
  }
};
