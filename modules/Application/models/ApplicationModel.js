// modules/Application/models/{fileName}Model.js
const DB = require('../../../config/db');

exports.getAllApplication = () => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM application', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getApplicationById = (applicationId) => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM application WHERE id = ?', [applicationId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.getApplicationByPackage = (applicationPackage) => {
  return new Promise((resolve, reject) => {
    DB.query('SELECT * FROM application WHERE package = ?', [applicationPackage], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createApplication = (applicationData) => {
  return new Promise((resolve, reject) => {
    DB.query('INSERT INTO application SET ?', [applicationData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newApplication = { id: results.insertId, ...applicationData };
        resolve(newApplication);
      }
    });
  });
};

exports.updateApplication = (applicationId, updatedApplicationData) => {
  return new Promise((resolve, reject) => {
    DB.query('UPDATE application SET ? WHERE id = ?', [updatedApplicationData, applicationId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: applicationId, ...updatedApplicationData });
      }
    });
  });
};

exports.deleteApplication = (applicationId) => {
  return new Promise((resolve, reject) => {
    DB.query('DELETE FROM application WHERE id = ?', [applicationId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
