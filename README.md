# e-pesantren-server
Sistem Management Pondok Pesantren

## Instalasi

1. Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) di sistem Anda.
2. Clone repositori ini ke dalam direktori lokal:

    ```bash
    git clone https://github.com/username/nama-repo.git
    ```

3. Pindah ke direktori proyek:

    ```bash
    cd nama-repo
    ```

4. Instal dependencies:

    ```bash
    npm install
    ```

5. Salin file `.env.example` menjadi `.env` dan sesuaikan konfigurasi database sesuai kebutuhan.

6. Jalankan proyek:

    ```bash
    npm start
    ```

7. Buka browser atau gunakan alat pengujian API (seperti [Postman](https://www.postman.com/)) untuk mengakses endpoint-endpoint yang disediakan.

## Testing Berhasil
- OS: Linux mint 18 , Windows 10, Linux CentOS 7

## Update

- **Update 15-12-2023:**
# Ambil package dari tabel application berdasar api key

1.kelas
2.lembaga
3.mata_pelajaran
4.news
5.santri
6.setting_kelas
7.setting_mapel

# Generate Code

1.lembaga => LB****
2.mata_pelajaran => MP****
3.transaksi => INV***
4.client => CLN***
5.coa_account => CA***
6.coa_subaccount => CS***


- **Update 13-12-2023:**
  - Penambahan modul auth
    - /api/auth/register
    - /api/auth/login
    - /api/auth/logout
    - /api/auth/profile
    - /api/auth/verify-api-key

    Tambahkan header 'authorization' untuk tokennya akan didapatkan ketika berhasil login

  - Penambahan package 'bcryptjs' dan 'jsonwebtoken'

- **Update 10-12-2023:**
  - Penambahan appConfig yang digunakan untuk mengatur default aplikasi seperti defaultApiKey, port dan sebaginya
  - Penambahan apiKey yang diambil dari tabel application untuk memeriksa API key di seluruh rute utama
  - Perubahan seluruh kode dan pemanbana parameter disetiap proses POST dan PUT
  - Perubahan pada bagian dokumentasi dan pemanbana parameter disetiap proses POST dan PUT


## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
