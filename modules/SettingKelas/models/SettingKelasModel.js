// modules/SettingKelas/models/{fileName}Model.js
const DB = require('../../../config/db');

exports.getAllSettingKelas = () => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM setting_kelas', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getSettingKelasById = (settingKelasId) => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM setting_kelas WHERE id = ?', [settingKelasId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createSettingKelas = (settingKelasData) => {
  return new Promise((resolve, reject) => {
    DB.query('INSERT INTO setting_kelas SET ?', [settingKelasData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newSettingKelas = { id: results.insertId, ...settingKelasData };
        resolve(newSettingKelas);
      }
    });
  });
};

exports.updateSettingKelas = (settingKelasId, updatedSettingKelasData) => {
  return new Promise((resolve, reject) => {
    DB.query('UPDATE setting_kelas SET ? WHERE id = ?', [updatedSettingKelasData, settingKelasId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: settingKelasId, ...updatedSettingKelasData });
      }
    });
  });
};

exports.deleteSettingKelas = (settingKelasId) => {
  return new Promise((resolve, reject) => {
    DB.query('DELETE FROM setting_kelas WHERE id = ?', [settingKelasId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

