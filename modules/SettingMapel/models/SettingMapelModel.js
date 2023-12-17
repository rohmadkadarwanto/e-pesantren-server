const { executeQuery } = require('../../../config/db');

exports.getAllSettingMapel = () => {
  const sql = `SELECT
    sm.id,
    am.name AS asatid_name,
    k.name AS kelas_name,
    l.name AS lembaga_name,
    mp.name AS mata_pelajaran_name,
    sm.status
    FROM
    setting_mapel sm
    JOIN asatid am ON sm.asatid = am.nip
    JOIN kelas k ON sm.kelas = k.id
    JOIN lembaga l ON sm.lembaga = l.code
    JOIN mata_pelajaran mp ON sm.mapel = mp.code;
    `;
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all setting mapel:", error);
      throw { message: "Failed to fetch all setting mapel", error };
    });
};

exports.getSettingMapelById = (settingMapelId) => {
  const sql = `SELECT
    sm.id,
    am.name AS asatid_name,
    k.name AS kelas_name,
    l.name AS lembaga_name,
    mp.name AS mata_pelajaran_name,
    sm.status
    FROM
        setting_mapel sm
    JOIN asatid am ON sm.asatid = am.nip
    JOIN kelas k ON sm.kelas = k.id
    JOIN lembaga l ON sm.lembaga = l.code
    JOIN mata_pelajaran mp ON sm.mapel = mp.code
     WHERE id = ?;
    `;
  return executeQuery(sql, [settingMapelId])
    .then(result => result)
    .catch(error => {
      console.error("Error fetching setting mapel by ID:", error);
      throw { message: "Failed to fetch setting mapel by ID", error };
    });
};

exports.createSettingMapel = (settingMapelData) => {
  const sql = 'INSERT INTO setting_mapel SET ?';
  return executeQuery(sql, [settingMapelData])
    .then(results => {
      const newSettingMapel = { id: results.insertId, ...settingMapelData };
      return newSettingMapel;
    })
    .catch(error => {
      console.error("Error creating setting mapel:", error);
      throw { message: "Failed to create setting mapel", error };
    });
};

exports.updateSettingMapel = (settingMapelId, updatedSettingMapelData) => {
  const sql = 'UPDATE setting_mapel SET ? WHERE id = ?';
  return executeQuery(sql, [updatedSettingMapelData, settingMapelId])
    .then(() => ({ message: "Setting mapel updated successfully", id: settingMapelId, ...updatedSettingMapelData }))
    .catch(error => {
      console.error("Error updating setting mapel:", error);
      throw { message: "Failed to update setting mapel", error };
    });
};

exports.deleteSettingMapel = (settingMapelId) => {
  const sql = 'DELETE FROM setting_mapel WHERE id = ?';
  return executeQuery(sql, [settingMapelId])
    .then(() => ({ message: "Setting mapel deleted successfully" }))
    .catch(error => {
      console.error("Error deleting setting mapel:", error);
      throw { message: "Failed to delete setting mapel", error };
    });
};
