const { executeQuery } = require('../../../config/db');

exports.getAllCoaSubaccount = () => {
  const sql = `
    SELECT
      ca.id AS coa_account_id,
      ca.code AS account_code,
      ca.name AS coa_account_name,
      ca.type AS coa_account_type,
      ca.normal_balance AS coa_account_normal_balance,
      cs.id AS coa_subaccount_id,
      cs.code AS code,
      cs.name AS name
    FROM coa_account ca
    LEFT JOIN coa_subaccount cs ON ca.code = cs.account_code;
    `;
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all coa subaccounts:", error);
      throw { message: "Failed to fetch all coa subaccounts", error };
    });
};

exports.getCoaSubaccountById = (coaSubaccountId) => {
  const sql = 'SELECT * FROM coa_subaccount WHERE id = ?';
  const sql = `
    SELECT
      ca.id AS coa_account_id,
      ca.code AS account_code,
      ca.name AS coa_account_name,
      ca.type AS coa_account_type,
      ca.normal_balance AS coa_account_normal_balance,
      cs.id AS coa_subaccount_id,
      cs.code AS code,
      cs.name AS name
    FROM coa_account ca
    LEFT JOIN coa_subaccount cs ON ca.code = cs.account_code
    WHERE cs.id = ?;
    `;
  return executeQuery(sql, [coaSubaccountId])
    .then(result => result)
    .catch(error => {
      console.error("Error fetching coa subaccount by ID:", error);
      throw { message: "Failed to fetch coa subaccount by ID", error };
    });
};

exports.createCoaSubaccount = (coaSubaccountData) => {
  const sql = 'INSERT INTO coa_subaccount SET ?';
  return executeQuery(sql, [coaSubaccountData])
    .then(results => {
      const newCoaSubaccount = { id: results.insertId, ...coaSubaccountData };
      return newCoaSubaccount;
    })
    .catch(error => {
      console.error("Error creating coa subaccount:", error);
      throw { message: "Failed to create coa subaccount", error };
    });
};

exports.updateCoaSubaccount = (coaSubaccountId, updatedCoaSubaccountData) => {
  const sql = 'UPDATE coa_subaccount SET ? WHERE id = ?';
  return executeQuery(sql, [updatedCoaSubaccountData, coaSubaccountId])
    .then(() => ({ message: "Coa subaccount updated successfully", id: coaSubaccountId, ...updatedCoaSubaccountData }))
    .catch(error => {
      console.error("Error updating coa subaccount:", error);
      throw { message: "Failed to update coa subaccount", error };
    });
};

exports.deleteCoaSubaccount = (coaSubaccountId) => {
  const sql = 'DELETE FROM coa_subaccount WHERE id = ?';
  return executeQuery(sql, [coaSubaccountId])
    .then(() => ({ message: "Coa subaccount deleted successfully" }))
    .catch(error => {
      console.error("Error deleting coa subaccount:", error);
      throw { message: "Failed to delete coa subaccount", error };
    });
};
