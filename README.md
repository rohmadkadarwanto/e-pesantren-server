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

### Modul User

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


### Modul Aplikasi

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


## Kontribusi

Silakan berkontribusi dengan cara membuka *issue* atau *pull request*.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).
