// modules/Application/models/{fileName}Model.js
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

exports.getAllApplication = () => {
  const sql = 'SELECT * FROM application';
  return executeQuery(sql);
};

exports.getApplicationById = (applicationId) => {
  const sql = 'SELECT * FROM application WHERE id = ?';
  return executeQuery(sql, [applicationId]);
};

exports.getApplicationByPackage = (applicationPackage) => {
  const sql = 'SELECT * FROM application WHERE package = ?';
  return executeQuery(sql, [applicationPackage]);
};

exports.getApplicationByKey = (applicationKey) => {
  const sql = 'SELECT * FROM application WHERE key = ?';
  return executeQuery(sql, [applicationKey]);
};


exports.getAppByApiKey = (apiKey) => {
  return new Promise((resolve, reject) => {
    db.execute('SELECT app FROM application WHERE `key` = ?', [apiKey])
      .then(([rows]) => {
        if (rows.length > 0) {
          resolve(rows[0].app);
        } else {
          reject(new Error('Invalid API key'));
        }
      })
      .catch(reject);
  });
};



exports.createApplication = (applicationData) => {
  const sql = 'INSERT INTO application SET ?';
  return executeQuery(sql, [applicationData])
    .then((results) => {
      const newApplication = { id: results.insertId, ...applicationData };
      return newApplication;
    });
};

exports.updateApplication = (applicationId, updatedApplicationData) => {
  const sql = 'UPDATE application SET ? WHERE id = ?';
  return executeQuery(sql, [updatedApplicationData, applicationId])
    .then(() => ({ id: applicationId, ...updatedApplicationData }));
};

exports.deleteApplication = (applicationId) => {
  const sql = 'DELETE FROM application WHERE id = ?';
  return executeQuery(sql, [applicationId]);
};
