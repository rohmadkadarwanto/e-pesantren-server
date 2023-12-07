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

## Endpoint API

#### Modul User

- **Get All Users:**
  - Method: GET
  - Endpoint: `/api/users`

- **Get User by ID:**
  - Method: GET
  - Endpoint: `/api/users/:id`

- **Create User:**
  - Method: POST
  - Endpoint: `/api/users`

- **Update User by ID:**
  - Method: PUT
  - Endpoint: `/api/users/:id`


#### Modul Aplikasi

- **Get All Aplikasi:**
  - Method: GET
  - Endpoint: `/api/aplikasi`

- **Get Aplikasi by ID:**
  - Method: GET
  - Endpoint: `/api/aplikasi/:id`

- **Create Aplikasi:**
  - Method: POST
  - Endpoint: `/api/aplikasi`

- **Update Aplikasi by ID:**
  - Method: PUT
  - Endpoint: `/api/aplikasi/:id`

#### Modul Kelas

- **Get All kelas:**
  - Method: GET
  - Endpoint: `/api/kelas`

- **Get kelas by ID:**
  - Method: GET
  - Endpoint: `/api/kelas/:id`

- **Create kelas:**
  - Method: POST
  - Endpoint: `/api/kelas`

- **Update kelas by ID:**
  - Method: PUT
  - Endpoint: `/api/kelas/:id`

#### Modul asatid

- **Get All asatid:**
  - Method: GET
  - Endpoint: `/api/asatid`

- **Get asatid by ID:**
  - Method: GET
  - Endpoint: `/api/asatid/:id`

- **Create asatid:**
  - Method: POST
  - Endpoint: `/api/asatid`

- **Update asatid by ID:**
  - Method: PUT
  - Endpoint: `/api/asatid/:id`

#### Modul Ayah santri

- **Get All ayah_santri:**
  - Method: GET
  - Endpoint: `/api/ayah_santri`

- **Get ayah_santri by ID:**
  - Method: GET
  - Endpoint: `/api/ayah_santri/:id`

- **Create ayah_santri:**
  - Method: POST
  - Endpoint: `/api/ayah_santri`

- **Update ayah_santri by ID:**
  - Method: PUT
  - Endpoint: `/api/ayah_santri/:id`

#### Modul client

- **Get All client:**
  - Method: GET
  - Endpoint: `/api/client`

- **Get client by ID:**
  - Method: GET
  - Endpoint: `/api/client/:id`

- **Create client:**
  - Method: POST
  - Endpoint: `/api/client`

- **Update client by ID:**
  - Method: PUT
  - Endpoint: `/api/client/:id`

#### Modul coa account

- **Get All coa_account:**
  - Method: GET
  - Endpoint: `/api/coa_account`

- **Get coa_account by ID:**
  - Method: GET
  - Endpoint: `/api/coa_account/:id`

- **Create coa_account:**
  - Method: POST
  - Endpoint: `/api/coa_account`

- **Update coa_account by ID:**
  - Method: PUT
  - Endpoint: `/api/coa_account/:id`

#### Modul coa subaccount

- **Get All coa_subaccount:**
  - Method: GET
  - Endpoint: `/api/coa_subaccount`

- **Get coa_subaccount by ID:**
  - Method: GET
  - Endpoint: `/api/coa_subaccount/:id`

- **Create coa_subaccount:**
  - Method: POST
  - Endpoint: `/api/coa_subaccount`

- **Update coa_subaccount by ID:**
  - Method: PUT
  - Endpoint: `/api/coa_subaccount/:id`

#### Modul ibu santri

- **Get All ibu_santri:**
  - Method: GET
  - Endpoint: `/api/ibu_santri`

- **Get ibu_santri by ID:**
  - Method: GET
  - Endpoint: `/api/ibu_santri/:id`

- **Create ibu_santri:**
  - Method: POST
  - Endpoint: `/api/ibu_santri`

- **Update ibu_santri by ID:**
  - Method: PUT
  - Endpoint: `/api/ibu_santri/:id`

#### Modul lembaga

- **Get All lembaga:**
  - Method: GET
  - Endpoint: `/api/lembaga`

- **Get lembaga by ID:**
  - Method: GET
  - Endpoint: `/api/lembaga/:id`

- **Create lembaga:**
  - Method: POST
  - Endpoint: `/api/lembaga`

- **Update lembaga by ID:**
  - Method: PUT
  - Endpoint: `/api/lembaga/:id`

#### Modul mata pelajaran

- **Get All mata_pelajaran:**
  - Method: GET
  - Endpoint: `/api/mata_pelajaran`

- **Get mata_pelajaran by ID:**
  - Method: GET
  - Endpoint: `/api/mata_pelajaran/:id`

- **Create mata_pelajaran:**
  - Method: POST
  - Endpoint: `/api/mata_pelajaran`

- **Update mata_pelajaran by ID:**
  - Method: PUT
  - Endpoint: `/api/mata_pelajaran/:id`

#### Modul news

- **Get All news:**
  - Method: GET
  - Endpoint: `/api/news`

- **Get news by ID:**
  - Method: GET
  - Endpoint: `/api/news/:id`

- **Create news:**
  - Method: POST
  - Endpoint: `/api/news`

- **Update news by ID:**
  - Method: PUT
  - Endpoint: `/api/news/:id`

#### Modul sales

- **Get All sales:**
  - Method: GET
  - Endpoint: `/api/sales`

- **Get sales by ID:**
  - Method: GET
  - Endpoint: `/api/sales/:id`

- **Create sales:**
  - Method: POST
  - Endpoint: `/api/sales`

- **Update sales by ID:**
  - Method: PUT
  - Endpoint: `/api/sales/:id`

#### Modul santri

- **Get All santri:**
  - Method: GET
  - Endpoint: `/api/santri`

- **Get santri by ID:**
  - Method: GET
  - Endpoint: `/api/santri/:id`

- **Create santri:**
  - Method: POST
  - Endpoint: `/api/santri`

- **Update santri by ID:**
  - Method: PUT
  - Endpoint: `/api/santri/:id`

#### Modul setting kelas

- **Get All setting_kelas:**
  - Method: GET
  - Endpoint: `/api/setting_kelas`

- **Get setting_kelas by ID:**
  - Method: GET
  - Endpoint: `/api/setting_kelas/:id`

- **Create setting_kelas:**
  - Method: POST
  - Endpoint: `/api/setting_kelas`

- **Update setting_kelas by ID:**
  - Method: PUT
  - Endpoint: `/api/setting_kelas/:id`

#### Modul setting mapel

- **Get All setting_mapel:**
  - Method: GET
  - Endpoint: `/api/setting_mapel`

- **Get setting_mapel by ID:**
  - Method: GET
  - Endpoint: `/api/setting_mapel/:id`

- **Create setting_mapel:**
  - Method: POST
  - Endpoint: `/api/setting_mapel`

- **Update setting_mapel by ID:**
  - Method: PUT
  - Endpoint: `/api/setting_mapel/:id`

#### Modul transaksi

- **Get All transaksi:**
  - Method: GET
  - Endpoint: `/api/transaksi`

- **Get transaksi by ID:**
  - Method: GET
  - Endpoint: `/api/transaksi/:id`

- **Create transaksi:**
  - Method: POST
  - Endpoint: `/api/transaksi`

- **Update transaksi by ID:**
  - Method: PUT
  - Endpoint: `/api/transaksi/:id`

#### Modul transaksi_detail

- **Get All transaksi_detail:**
  - Method: GET
  - Endpoint: `/api/transaksi_detail`

- **Get transaksi_detail by ID:**
  - Method: GET
  - Endpoint: `/api/transaksi_detail/:id`

- **Create transaksi_detail:**
  - Method: POST
  - Endpoint: `/api/transaksi_detail`

- **Update transaksi_detail by ID:**
  - Method: PUT
  - Endpoint: `/api/transaksi_detail/:id`

#### Modul wali santri

- **Get All wali_santri:**
  - Method: GET
  - Endpoint: `/api/wali_santri`

- **Get wali_santri by ID:**
  - Method: GET
  - Endpoint: `/api/wali_santri/:id`

- **Create wali_santri:**
  - Method: POST
  - Endpoint: `/api/wali_santri`

- **Update wali_santri by ID:**
  - Method: PUT
  - Endpoint: `/api/wali_santri/:id`

###
## Kontribusi

Silakan berkontribusi dengan cara membuka *issue* atau *pull request*.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
