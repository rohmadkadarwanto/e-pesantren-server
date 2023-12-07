// modules/coa_subaccount/models/coaSubaccountModel.js
const db = require('../../../config/db');

exports.getAllCoaSubaccounts = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM coa_subaccount', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getCoaSubaccountById = (coaSubaccountId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM coa_subaccount WHERE id = ?', [coaSubaccountId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createCoaSubaccount = (coaSubaccountData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO coa_subaccount SET ?', [coaSubaccountData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newCoaSubaccount = { id: results.insertId, ...coaSubaccountData };
        resolve(newCoaSubaccount);
      }
    });
  });
};

exports.updateCoaSubaccount = (coaSubaccountId, updatedCoaSubaccountData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE coa_subaccount SET ? WHERE id = ?', [updatedCoaSubaccountData, coaSubaccountId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: coaSubaccountId, ...updatedCoaSubaccountData });
      }
    });
  });
};

exports.deleteCoaSubaccount = (coaSubaccountId) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM coa_subaccount WHERE id = ?', [coaSubaccountId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
