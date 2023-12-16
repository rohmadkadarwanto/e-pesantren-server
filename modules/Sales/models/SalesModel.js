const { executeQuery } = require('../../../config/db');

exports.getAllSales = () => {
  const sql = 'SELECT * FROM sales';
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all sales:", error);
      throw { message: "Failed to fetch all sales", error };
    });
};

exports.getSalesById = (salesId) => {
  const sql = 'SELECT * FROM sales WHERE id = ?';
  return executeQuery(sql, [salesId])
    .then(result => result)
    .catch(error => {
      console.error("Error fetching sales by ID:", error);
      throw { message: "Failed to fetch sales by ID", error };
    });
};

exports.createSales = (salesData) => {
  const sql = 'INSERT INTO sales SET ?';
  return executeQuery(sql, [salesData])
    .then(results => {
      const newSales = { id: results.insertId, ...salesData };
      return newSales;
    })
    .catch(error => {
      console.error("Error creating sales:", error);
      throw { message: "Failed to create sales", error };
    });
};

exports.updateSales = (salesId, updatedSalesData) => {
  const sql = 'UPDATE sales SET ? WHERE id = ?';
  return executeQuery(sql, [updatedSalesData, salesId])
    .then(() => ({ message: "Sales updated successfully", id: salesId, ...updatedSalesData }))
    .catch(error => {
      console.error("Error updating sales:", error);
      throw { message: "Failed to update sales", error };
    });
};

exports.deleteSales = (salesId) => {
  const sql = 'DELETE FROM sales WHERE id = ?';
  return executeQuery(sql, [salesId])
    .then(() => ({ message: "Sales deleted successfully" }))
    .catch(error => {
      console.error("Error deleting sales:", error);
      throw { message: "Failed to delete sales", error };
    });
};
