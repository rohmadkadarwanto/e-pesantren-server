// modules/coa_account/models/coaAccountModel.js
const db = require('../../../config/db');

exports.getAllCoaAccounts = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM coa_account', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getCoaAccountById = (coaAccountId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM coa_account WHERE id = ?', [coaAccountId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createCoaAccount = (coaAccountData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO coa_account SET ?', [coaAccountData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newCoaAccount = { id: results.insertId, ...coaAccountData };
        resolve(newCoaAccount);
      }
    });
  });
};

exports.updateCoaAccount = (coaAccountId, updatedCoaAccountData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE coa_account SET ? WHERE id = ?', [updatedCoaAccountData, coaAccountId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: coaAccountId, ...updatedCoaAccountData });
      }
    });
  });
};

exports.deleteCoaAccount = (coaAccountId) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM coa_account WHERE id = ?', [coaAccountId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
