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
**Update 18-12-2023:**
  - Penambahan Fitur upload gambar pada module news dan client
 **Update 16-12-2023:**
  - Pengahapusan modul Ayah santri, Ibu santi dan Wali santi
  - Modul Santi, Ayah santri, Ibu santi dan Wali santi Satukali input saat melakukan input santri
  - Perubahan endpoint
    - api/{nama module}/create
    - api/{nama module}/update/:{id}
    - api/{nama module}/delete/:{id}
  - Perubahan endpoint pada update, get, dan delete
    - Application by package
    - Client by package/app
    - Santri by nis
    - Assatid by nip
    - Lembaga by code
    - MataPelajaran by code
    - Transaksi by code
    

- **Update 15-12-2023:**
   - Modul Laporan transaksi
   - Ambil package dari tabel application berdasar api key

      - kelas
      - lembaga
      - mata_pelajaran
      - news
      - santri
      - setting_kelas
      - setting_mapel

   - Generate Code

      - lembaga => LB****
      - mata_pelajaran => MP****
      - transaksi => INV***
      - client => CLN***
      - coa_account => CA***
      - coa_subaccount => CS***


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
