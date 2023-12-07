// modules/sales/models/salesModel.js
const db = require('../../../config/db');

exports.getAllSales = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM sales', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getSalesById = (salesId) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM sales WHERE id = ?', [salesId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

exports.createSales = (salesData) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO sales SET ?', [salesData], (error, results) => {
      if (error) {
        reject(error);
      } else {
        const newSales = { id: results.insertId, ...salesData };
        resolve(newSales);
      }
    });
  });
};

exports.updateSales = (salesId, updatedSalesData) => {
  return new Promise((resolve, reject) => {
    db.query('UPDATE sales SET ? WHERE id = ?', [updatedSalesData, salesId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve({ id: salesId, ...updatedSalesData });
      }
    });
  });
};

exports.deleteSales = (salesId) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM sales WHERE id = ?', [salesId], (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};
