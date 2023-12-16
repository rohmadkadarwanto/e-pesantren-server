const { executeQuery } = require('../../../config/db');

exports.getAllSantri = () => {
  const sql = `
    SELECT
      s.*,
      a.nama AS nama_ayah,
      a.pekerjaan AS pekerjaan_ayah,
      a.alamat AS alamat_ayah,
      i.nama AS nama_ibu,
      i.pekerjaan AS pekerjaan_ibu,
      i.alamat AS alamat_ibu,
      w.nama AS nama_wali,
      w.pekerjaan AS pekerjaan_wali,
      w.alamat AS alamat_wali
    FROM
      santri s
    LEFT JOIN ayah_santri a ON s.nis = a.nis
    LEFT JOIN ibu_santri i ON s.nis = i.nis
    LEFT JOIN wali_santri w ON s.nis = w.nis
  `;
  return executeQuery(sql)
    .then(result => result)
    .catch(error => {
      console.error("Error fetching all santri:", error);
      throw { message: "Failed to fetch all santri", error };
    });
};

exports.getSantriByNis = (santriNis) => {
  const sql = `
    SELECT
      s.*,
      a.nama AS nama_ayah,
      a.pekerjaan AS pekerjaan_ayah,
      a.alamat AS alamat_ayah,
      i.nama AS nama_ibu,
      i.pekerjaan AS pekerjaan_ibu,
      i.alamat AS alamat_ibu,
      w.nama AS nama_wali,
      w.pekerjaan AS pekerjaan_wali,
      w.alamat AS alamat_wali
    FROM
      santri s
    LEFT JOIN ayah_santri a ON s.nis = a.nis
    LEFT JOIN ibu_santri i ON s.nis = i.nis
    LEFT JOIN wali_santri w ON s.nis = w.nis
    WHERE s.nis = ?
  `;
  return executeQuery(sql, [santriNis])
    .then(result => result)
    .catch(error => {
      console.error("Error fetching santri by nis:", error);
      throw { message: "Failed to fetch santri by Nis", error };
    });
};

exports.createSantri = (data) => {
  const santriSql = 'INSERT INTO santri SET ?';
  const ayahSantriSql = 'INSERT INTO ayah_santri SET ?';
  const ibuSantriSql = 'INSERT INTO ibu_santri SET ?';
  const waliSantriSql = 'INSERT INTO wali_santri SET ?';

  const santriData = {
    nis: data.nis,
    app: data.app,
    name: data.name,
    tmp_lahir: data.tmp_lahir,
    tgl_lahir: data.tgl_lahir,
    address: data.address,
    status: data.status
  };

  const ayahSantriData = {
    nis: data.nis,
    nama: data.ayah_santri.nama,
    pekerjaan: data.ayah_santri.pekerjaan,
    alamat: data.ayah_santri.alamat
  };

  const ibuSantriData = {
    nis: data.nis,
    nama: data.ibu_santri.nama,
    pekerjaan: data.ibu_santri.pekerjaan,
    alamat: data.ibu_santri.alamat
  };

  const waliSantriData = {
    nis: data.nis,
    nama: data.wali_santri.nama,
    pekerjaan: data.wali_santri.pekerjaan,
    alamat: data.wali_santri.alamat
  };

  return executeQuery(santriSql, [santriData])
    .then((santriResults) => {
      executeQuery(ayahSantriSql, [ayahSantriData]);
      executeQuery(ibuSantriSql, [ibuSantriData]);
      executeQuery(waliSantriSql, [waliSantriData]);
      const newSantri = { nis: santriData.nis, ...santriData, ...ayahSantriData, ...ibuSantriData, ...waliSantriData };

      return newSantri;

    })
    .catch((error) => {
      console.error("Error creating santri:", error);
      throw { message: "Failed to create santri", error };
    });
};

exports.updateSantri = (santriNis, data) => {
  const santriSql = 'UPDATE santri SET ? WHERE nis = ?';
  const ayahSantriSql = 'UPDATE ayah_santri SET ? WHERE nis = ?';
  const ibuSantriSql = 'UPDATE ibu_santri SET ? WHERE nis = ?';
  const waliSantriSql = 'UPDATE wali_santri SET ? WHERE nis = ?';

  const santriData = {
    nis: santriNis,
    app: data.app,
    name: data.name,
    tmp_lahir: data.tmp_lahir,
    tgl_lahir: data.tgl_lahir,
    address: data.address,
    status: data.status
  };

  const ayahSantriData = {
    nis: data.nis,
    nama: data.ayah_santri.nama,
    pekerjaan: data.ayah_santri.pekerjaan,
    alamat: data.ayah_santri.alamat
  };

  const ibuSantriData = {
    nis: data.nis,
    nama: data.ibu_santri.nama,
    pekerjaan: data.ibu_santri.pekerjaan,
    alamat: data.ibu_santri.alamat
  };

  const waliSantriData = {
    nis: data.nis,
    nama: data.wali_santri.nama,
    pekerjaan: data.wali_santri.pekerjaan,
    alamat: data.wali_santri.alamat
  };
  
  return executeQuery(santriSql, [santriData, santriNis])
    .then((results) => {
      executeQuery(ayahSantriSql, [ayahSantriData, santriNis]);
      executeQuery(ibuSantriSql, [ibuSantriData, santriNis]);
      executeQuery(waliSantriSql, [waliSantriData, santriNis]);
      return { message: "Santri updated successfully", nis: santriNis, ...santriData, ...ayahSantriData, ...ibuSantriData, ...waliSantriData };
    })
    .catch(error => {
      console.error("Error updating santri:", error);
      throw { message: "Failed to update santri", error };
    });
};

exports.deleteSantri = (santriNis) => {
  const santriSql = 'DELETE FROM santri WHERE nis = ?';
  const ayahSantriSql = 'DELETE FROM ayah_santri WHERE nis = ?';
  const ibuSantriSql = 'DELETE FROM ibu_santri WHERE nis = ?';
  const waliSantriSql = 'DELETE FROM wali_santri WHERE nis = ?';

  return executeQuery(santriSql, [santriNis])
    .then((results) => {
      executeQuery(ayahSantriSql, [santriNis]);
      executeQuery(ibuSantriSql, [santriNis]);
      executeQuery(waliSantriSql, [santriNis]);
      return { message: "Santri deleted successfully", nis: santriNis };
    })
    .catch(error => {
      console.error("Error deleting santri:", error);
      throw { message: "Failed to delete santri", error };
    });
};
