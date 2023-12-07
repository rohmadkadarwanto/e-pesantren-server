// modules/news/models/newsModel.js
const db = require('../../../config/db');

exports.getAllNews = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM news', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getNewsById = (newsId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM news WHERE id = ?', [newsId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createNews = (newsData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO news SET ?', [newsData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newNews = { id: results.insertId, ...newsData };
        resolve(newNews);
      }
    });
  });
};

exports.updateNews = (newsId, updatedNewsData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE news SET ? WHERE id = ?', [updatedNewsData, newsId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: newsId, ...updatedNewsData });
      }
    });
  });
};

exports.deleteNews = (newsId) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM news WHERE id = ?', [newsId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
