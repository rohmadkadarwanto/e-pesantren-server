// config/db.js
const mysql = require('mysql2/promise');
const appConfig = require('./appConfig');

const dbConfig = {
  host: appConfig.db.host,
  user: appConfig.db.user,
  password: appConfig.db.password,
  database: appConfig.db.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

const executeQuery = async (sql, values) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute(sql, values);
    return rows || [];
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
};


module.exports = {
  executeQuery,
  dbConfig,
  pool,
};
