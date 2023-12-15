const { executeQuery } = require('../../../config/db');

exports.getLaporan = async (req, res) => {
  try {
    // Mengambil data transaksi_detail beserta informasi coa_account dan coa_subaccount terkait
    const results = await executeQuery(`
      SELECT
        td.id AS transaksi_detail_id,
        td.transaksi,
        td.account,
        td.sub_account,
        td.amount,
        td.type,
        td.created_at AS transaksi_detail_created_at,
        ca.id AS coa_account_id,
        ca.code AS coa_account_code,
        ca.name AS coa_account_name,
        ca.type AS coa_account_type,
        ca.normal_balance AS coa_account_normal_balance,
        cs.id AS coa_subaccount_id,
        cs.account_code AS coa_subaccount_account_code,
        cs.code AS coa_subaccount_code,
        cs.name AS coa_subaccount_name
      FROM transaksi_detail td
      LEFT JOIN coa_account ca ON td.account = ca.code
      LEFT JOIN coa_subaccount cs ON td.sub_account = cs.code
    `);

    const laporan = results.map(result => ({
      transaksi_detail: {
        id: result.transaksi_detail_id,
        transaksi: result.transaksi,
        account: {
          id: result.coa_account_id,
          code: result.coa_account_code,
          name: result.coa_account_name,
          type: result.coa_account_type,
          normal_balance: result.coa_account_normal_balance,
        },
        sub_account: {
          id: result.coa_subaccount_id,
          account_code: result.coa_subaccount_account_code,
          code: result.coa_subaccount_code,
          name: result.coa_subaccount_name,
        },
        amount: result.amount,
        type: result.type,
        created_at: result.transaksi_detail_created_at,
      },
    }));

    res.json({ laporan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get laporan' });
  }
};
