// modules/SettingMapel/models/{fileName}Model.js
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

exports.getAllSettingMapel = () => {
  const sql = 'SELECT * FROM setting_mapel';
  return executeQuery(sql);
};

exports.getSettingMapelById = (settingMapelId) => {
  const sql = 'SELECT * FROM setting_mapel WHERE id = ?';
  return executeQuery(sql, [settingMapelId]);
};

exports.createSettingMapel = (settingMapelData) => {
  const sql = 'INSERT INTO setting_mapel SET ?';
  return executeQuery(sql, [settingMapelData])
    .then((results) => {
      const newSettingMapel = { id: results.insertId, ...settingMapelData };
      return newSettingMapel;
    });
};

exports.updateSettingMapel = (settingMapelId, updatedSettingMapelData) => {
  const sql = 'UPDATE setting_mapel SET ? WHERE id = ?';
  return executeQuery(sql, [updatedSettingMapelData, settingMapelId])
    .then(() => ({ id: settingMapelId, ...updatedSettingMapelData }));
};

exports.deleteSettingMapel = (settingMapelId) => {
  const sql = 'DELETE FROM setting_mapel WHERE id = ?';
  return executeQuery(sql, [settingMapelId]);
};
