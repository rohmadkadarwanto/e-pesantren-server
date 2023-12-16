const { executeQuery } = require('../../../config/db');

exports.getAllNews = () => {
  const sql = 'SELECT * FROM news';
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all news:", error);
      throw { message: "Failed to fetch all news", error };
    });
};

exports.getNewsById = (newsId) => {
  const sql = 'SELECT * FROM news WHERE id = ?';
  return executeQuery(sql, [newsId])
    .then(result => result)
    .catch(error => {
      console.error("Error fetching news by ID:", error);
      throw { message: "Failed to fetch news by ID", error };
    });
};

exports.createNews = (newsData) => {
  const sql = 'INSERT INTO news SET ?';
  return executeQuery(sql, [newsData])
    .then(results => {
      const newNews = { id: results.insertId, ...newsData };
      return newNews;
    })
    .catch(error => {
      console.error("Error creating news:", error);
      throw { message: "Failed to create news", error };
    });
};

exports.updateNews = (newsId, updatedNewsData) => {
  const sql = 'UPDATE news SET ? WHERE id = ?';
  return executeQuery(sql, [updatedNewsData, newsId])
    .then(() => ({ message: "News updated successfully", id: newsId, ...updatedNewsData }))
    .catch(error => {
      console.error("Error updating news:", error);
      throw { message: "Failed to update news", error };
    });
};

exports.deleteNews = (newsId) => {
  const sql = 'DELETE FROM news WHERE id = ?';
  return executeQuery(sql, [newsId])
    .then(() => ({ message: "News deleted successfully" }))
    .catch(error => {
      console.error("Error deleting news:", error);
      throw { message: "Failed to delete news", error };
    });
};
