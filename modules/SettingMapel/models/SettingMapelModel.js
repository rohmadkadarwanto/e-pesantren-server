// modules/SettingMapel/models/{fileName}Model.js
const DB = require('../../../config/db');

exports.getAllSettingMapel = () => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM setting_mapel', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getSettingMapelById = (settingMapelId) => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM setting_mapel WHERE id = ?', [settingMapelId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createSettingMapel = (settingMapelData) => {
  return new Promise((resolve, reject) => {
    DB.query('INSERT INTO setting_mapel SET ?', [settingMapelData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newSettingMapel = { id: results.insertId, ...settingMapelData };
        resolve(newSettingMapel);
      }
    });
  });
};

exports.updateSettingMapel = (settingMapelId, updatedSettingMapelData) => {
  return new Promise((resolve, reject) => {
    DB.query('UPDATE setting_mapel SET ? WHERE id = ?', [updatedSettingMapelData, settingMapelId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: settingMapelId, ...updatedSettingMapelData });
      }
    });
  });
};

exports.deleteSettingMapel = (settingMapelId) => {
  return new Promise((resolve, reject) => {
    DB.query('DELETE FROM setting_mapel WHERE id = ?', [settingMapelId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};


