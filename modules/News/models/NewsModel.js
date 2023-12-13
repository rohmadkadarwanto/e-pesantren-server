// modules/News/models/{fileName}Model.js
const { pool } = require('../../../config/db');

const executeQuery = async (sql, values) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(sql, values);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
};

exports.getAllNews = () => {
  const sql = 'SELECT * FROM news';
  return executeQuery(sql);
};

exports.getNewsById = (newsId) => {
  const sql = 'SELECT * FROM news WHERE id = ?';
  return executeQuery(sql, [newsId]);
};

exports.createNews = (newsData) => {
  const sql = 'INSERT INTO news SET ?';
  return executeQuery(sql, [newsData])
    .then((results) => {
      const newNews = { id: results.insertId, ...newsData };
      return newNews;
    });
};

exports.updateNews = (newsId, updatedNewsData) => {
  const sql = 'UPDATE news SET ? WHERE id = ?';
  return executeQuery(sql, [updatedNewsData, newsId])
    .then(() => ({ id: newsId, ...updatedNewsData }));
};

exports.deleteNews = (newsId) => {
  const sql = 'DELETE FROM news WHERE id = ?';
  return executeQuery(sql, [newsId]);
};
