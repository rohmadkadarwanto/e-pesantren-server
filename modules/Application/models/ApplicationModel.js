const { executeQuery } = require('../../../config/db');

exports.getAllApplication = async () => {
  const sql = 'SELECT * FROM application';
  try {
    return await executeQuery(sql);
  } catch (error) {
    console.error("Error fetching all applications:", error);
    throw { message: "Failed to fetch all applications", error };
  }
};

exports.getApplicationByPackage = async (applicationPackage) => {
  const sql = 'SELECT * FROM application WHERE package = ?';
  try {
    return await executeQuery(sql, [applicationPackage]);
  } catch (error) {
    console.error("Error fetching application by package:", error);
    throw { message: "Failed to fetch application by package", error };
  }
};

exports.createApplication = async (applicationData) => {
  const sql = 'INSERT INTO application SET ?';
  try {
    const results = await executeQuery(sql, [applicationData]);
    const newApplication = { id: results.insertId, ...applicationData };
    return newApplication;
  } catch (error) {
    console.error("Error creating application:", error);
    throw { message: "Failed to create application", error };
  }
};

exports.updateApplication = async (applicationPackage, updatedApplicationData) => {
  const sql = 'UPDATE application SET ? WHERE package = ?';
  try {
    await executeQuery(sql, [updatedApplicationData, applicationPackage]);
    return { message: "Application updated successfully", package: applicationPackage, ...updatedApplicationData };
  } catch (error) {
    console.error("Error updating application:", error);
    throw { message: "Failed to update application", error };
  }
};

exports.deleteApplication = async (applicationPackage) => {
  const sql = 'DELETE FROM application WHERE package = ?';
  try {
    await executeQuery(sql, [applicationPackage]);
    return "Application deleted successfully";
  } catch (error) {
    console.error("Error deleting application:", error);
    throw { message: "Failed to delete application", error };
  }
};
