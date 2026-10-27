# Laporan Praktikum DOM dan Event JavaScript

## A. Identitas Praktikum

**Nama:** Annisa Fikriyani  
**Kelas:** I252A  
**Mata Kuliah:** Pemrograman Web  
**Materi:** Document Object Model (DOM) dan Event JavaScript    
**Program Studi:** Teknik Informatika  

## B. Tujuan Praktikum

Praktikum ini bertujuan untuk memahami penggunaan Document Object Model (DOM) dan Event pada JavaScript dalam membuat halaman web yang interaktif. Melalui praktikum ini, mahasiswa dapat memanipulasi elemen HTML, menangani interaksi pengguna, melakukan validasi formulir, serta mengembangkan Mini Project menggunakan HTML, CSS, dan JavaScript.

---

# 1. Laporan Praktikum Latihan 1–6

## Latihan 1 – Mengubah Teks Menggunakan DOM

**Tujuan:** Memahami penggunaan `getElementById()` dan `textContent` untuk mengubah isi elemen HTML melalui JavaScript.

**Langkah Kerja:**
1. Membuat elemen judul dan paragraf pada HTML.
2. Mengambil elemen menggunakan `document.getElementById()`.
3. Mengubah isi judul dan paragraf menggunakan `textContent`.
4. Menjalankan halaman pada browser.

**Hasil:** Judul halaman berubah menjadi "Belajar JavaScript DOM" dan isi paragraf berubah menjadi "Saya sedang belajar DOM menggunakan JavaScript." secara otomatis.

**Screenshot Hasil:**

<img width="1917" height="1017" alt="Screenshot 2026-10-27 203900" src="https://github.com/user-attachments/assets/f6d9344e-1633-43a0-825a-5e5c52f6ef18" />

<img width="1905" height="1000" alt="Screenshot 2026-10-27 204059" src="https://github.com/user-attachments/assets/51f60d99-b7a4-4f57-87d7-b7b5b43de6dc" />


## Latihan 2 – Event Click

**Tujuan:** Memahami penggunaan event `click` untuk menjalankan perintah JavaScript saat tombol ditekan.

**Langkah Kerja:**
1. Membuat tombol "Klik Saya" pada HTML.
2. Menghubungkan tombol dengan JavaScript menggunakan `getElementById()`.
3. Menambahkan event `click` menggunakan `addEventListener()`.
4. Menampilkan waktu saat tombol diklik.

**Hasil:** Ketika tombol "Klik Saya" ditekan, isi paragraf berubah menjadi informasi waktu saat tombol diklik.

**Screenshot Hasil:**
<img width="1917" height="1020" alt="Screenshot 2026-10-27 204924" src="https://github.com/user-attachments/assets/8b8a372e-76a2-4e4a-b066-60fb2969e2ae" />


## Latihan 3 – Mengubah Kelas dan Gaya CSS

**Tujuan:** Memahami penggunaan `classList.toggle()` untuk mengubah tampilan elemen HTML secara interaktif.

**Langkah Kerja:**
1. Membuat paragraf dan tombol "Ubah Gaya".
2. Menambahkan kelas `.highlight` dan `.teks-besar` pada CSS.
3. Menggunakan `classList.toggle()` saat tombol diklik.
4. Mengamati perubahan tampilan paragraf.

**Hasil:** Teks berubah menjadi lebih besar, berwarna biru tua, memiliki latar belakang biru muda, dan garis pada bagian kiri. Ketika tombol ditekan kembali, tampilan kembali seperti semula.

**Screenshot Hasil:**
<img width="1827" height="1025" alt="Screenshot 2026-10-27 205819" src="https://github.com/user-attachments/assets/06c2694b-deb8-4596-b941-594f352fdcb0" />

<img width="1917" height="1013" alt="Screenshot 2026-10-27 205826" src="https://github.com/user-attachments/assets/2108d832-a42e-47fd-be19-94fa07bf4966" />

## Latihan 4 – Penghitung Karakter

**Tujuan:** Memahami penggunaan event `input` untuk mendeteksi perubahan teks secara langsung.

**Langkah Kerja:**
1. Membuat kolom input nama dengan maksimal 40 karakter.
2. Membuat elemen untuk menampilkan jumlah karakter.
3. Menambahkan event `input` menggunakan JavaScript.
4. Menghitung jumlah karakter menggunakan `value.length`.

**Hasil:** Jumlah karakter bertambah atau berkurang secara otomatis saat pengguna mengetik atau menghapus teks.

**Screenshot Hasil:**
<img width="1917" height="1020" alt="Screenshot 2026-10-27 210407" src="https://github.com/user-attachments/assets/ecaed26b-5bec-41b2-9ac2-c1314eee750e" />


## Latihan 5 – Validasi Formulir

**Tujuan:** Memahami proses validasi data formulir menggunakan JavaScript.

**Langkah Kerja:**
1. Membuat formulir yang berisi nama, email, dan usia.
2. Menambahkan event `submit` pada formulir.
3. Menggunakan `event.preventDefault()` untuk mencegah pengiriman formulir secara langsung.
4. Melakukan validasi nama, format email, dan usia.
5. Menampilkan pesan kesalahan atau keberhasilan.

**Hasil:** Formulir dapat memeriksa data yang dimasukkan. Jika data tidak sesuai, sistem menampilkan pesan kesalahan. Jika seluruh data valid, sistem menampilkan pesan keberhasilan dan mereset formulir.

**Screenshot Hasil:**
Jika semua kosong 
<img width="1917" height="1017" alt="Screenshot 2026-10-27 210632" src="https://github.com/user-attachments/assets/087c2bfe-c7fb-402f-a202-ab9d412f6c1d" />

Jika nama kosong
<img width="1917" height="1020" alt="Screenshot 2026-10-27 210656" src="https://github.com/user-attachments/assets/b35e64e2-9aaa-4f41-b2f4-5b69a902781d" />

Jika email tidak valid
<img width="1916" height="1012" alt="Screenshot 2026-10-27 210729" src="https://github.com/user-attachments/assets/387b2447-5e52-4d18-84d1-1ccc0d9d317d" />

Jika usia dibawah 17th
<img width="1917" height="1016" alt="Screenshot 2026-10-27 210820" src="https://github.com/user-attachments/assets/864139e4-323f-4a3a-a119-f0f9251193a4" />

Jika semua data valid
<img width="1917" height="1020" alt="Screenshot 2026-10-27 210924" src="https://github.com/user-attachments/assets/567adefa-8a46-4374-b2c1-5fa95644e2eb" />

## Latihan 6 – Daftar Tugas Sederhana

**Tujuan:** Memahami cara membuat dan memanipulasi elemen HTML secara dinamis menggunakan JavaScript.

**Langkah Kerja:**
1. Membuat kolom input untuk memasukkan tugas.
2. Membuat tombol "Tambah".
3. Menggunakan `document.createElement()` untuk membuat item daftar.
4. Menambahkan tombol "Tandai selesai".
5. Menggunakan `classList.toggle()` untuk mengubah status tugas.

**Hasil:** Pengguna dapat menambahkan tugas baru ke dalam daftar. Ketika tombol "Tandai selesai" diklik, teks tugas akan tercoret. Pengguna juga dapat membatalkan status selesai.

**Screenshot Hasil:**
<img width="1917" height="1015" alt="Screenshot 2026-10-27 211521" src="https://github.com/user-attachments/assets/34235dbc-0c88-4ce9-88ba-9227e7054d69" />

<img width="1908" height="1017" alt="Screenshot 2026-10-27 211604" src="https://github.com/user-attachments/assets/4363d058-ee50-4c40-a733-2d4c05d4f990" />

Tugas ditandai selesai
<img width="1917" height="1023" alt="Screenshot 2026-10-27 211615" src="https://github.com/user-attachments/assets/4d76f75c-45f2-4240-815b-086fcfb0bf0a" />

**Experimen Mandiri**
Menambahkan kolom hapus 
<img width="1917" height="1020" alt="Screenshot 2026-10-27 220030" src="https://github.com/user-attachments/assets/6be5dffb-8f63-4ba1-843d-1e5b875bbf5b" />

<img width="487" height="263" alt="Screenshot 2026-10-27 220039" src="https://github.com/user-attachments/assets/8320f97f-cc43-4566-addd-ce35df599ab8" />


### Kesimpulan Latihan 1–6

Melalui latihan ini, saya memahami cara menggunakan DOM untuk mengakses dan mengubah elemen HTML serta menggunakan Event JavaScript untuk merespons interaksi pengguna. Materi ini menjadi dasar dalam pembuatan halaman web yang lebih dinamis dan interaktif.

---

# 2. Laporan Praktikum Mini Project

## Bloom & Learn ♡ – Workshop Registration

### A. Deskripsi Mini Project

Bloom & Learn merupakan website pendaftaran workshop bertema teknologi dan kreativitas digital. Website ini dibuat menggunakan HTML, CSS, dan JavaScript dengan tampilan bernuansa baby pink yang sederhana, responsif, dan mudah digunakan.

Mini Project ini menerapkan konsep DOM dan Event JavaScript untuk membuat formulir pendaftaran interaktif, validasi input, penghitung karakter, informasi workshop, serta daftar persiapan workshop.

### B. Tujuan Mini Project

- Menerapkan DOM dan Event JavaScript dalam sebuah website.
- Membuat formulir pendaftaran dengan validasi data.
- Menampilkan respons secara langsung terhadap interaksi pengguna.
- Mengembangkan fitur tambahan agar website lebih interaktif.
- Membuat tampilan website yang menarik dan responsif.

### C. Teknologi yang Digunakan

| Teknologi | Fungsi |
|---|---|
| HTML | Membuat struktur halaman website |
| CSS | Mengatur desain, warna, dan tata letak |
| JavaScript | Menjalankan validasi dan interaksi pengguna |
| Visual Studio Code | Editor untuk membuat dan mengedit program |
| Browser | Menjalankan dan menguji website |

### D. Fitur Mini Project

**1. Form Pendaftaran Workshop**

Pengguna dapat mengisi nama lengkap, email, memilih sesi workshop, dan menuliskan alasan mengikuti workshop.
<img width="1917" height="1018" alt="Screenshot 2026-10-27 214912" src="https://github.com/user-attachments/assets/d5f8a250-d44d-4d7b-a291-97c1871b7e80" />


**2. Validasi Formulir**

Sistem memeriksa nama, format email, dan pilihan sesi workshop. Jika data tidak valid, sistem akan menampilkan pesan kesalahan.

Jika email tidak valid
<img width="925" height="1018" alt="Screenshot 2026-10-27 215238" src="https://github.com/user-attachments/assets/c24f285d-54dc-4ac2-8359-8a2ce61dd13b" />

Jika nama kosong
<img width="926" height="1017" alt="Screenshot 2026-10-27 215315" src="https://github.com/user-attachments/assets/957d6813-593a-4206-becc-834870b1d078" />

Jika dropdown tidak dipilih 
<img width="926" height="1017" alt="Screenshot 2026-10-27 215315" src="https://github.com/user-attachments/assets/a6935a16-2642-4f09-abd3-1571089d3585" />


**3. Penghitung Karakter**

Jumlah karakter pada kolom alasan mengikuti workshop akan dihitung secara otomatis dengan batas maksimal 200 karakter.

<img width="747" height="240" alt="image" src="https://github.com/user-attachments/assets/0a0728f8-b111-4086-8306-2a223e73c575" />


**4. Dropdown Sesi Workshop**

Ketika pengguna memilih sesi workshop, website akan langsung menampilkan informasi sesi yang dipilih menggunakan event `change`.

<img width="753" height="285" alt="image" src="https://github.com/user-attachments/assets/b9434a41-3494-4d37-b73d-bcf69cd13ab3" />


**5. Pesan Keberhasilan dan Ringkasan**

Setelah data berhasil divalidasi, website menampilkan pesan keberhasilan serta ringkasan informasi pendaftaran.
<img width="922" height="1017" alt="Screenshot 2026-10-27 215039" src="https://github.com/user-attachments/assets/41a94751-328f-4e63-bf2f-0293a714082a" />


**6. Tombol Reset**

Tombol Reset digunakan untuk mengosongkan formulir, menghapus pesan, dan mengembalikan tampilan ke kondisi awal.

<img width="782" height="230" alt="image" src="https://github.com/user-attachments/assets/64904fc9-635d-42e6-85e1-0f85466bb342" />


**7. My Workshop Checklist**

Fitur ini digunakan untuk mencatat persiapan sebelum mengikuti workshop. Pengguna dapat menambahkan persiapan, menandai tugas selesai menggunakan checkbox, serta menghapus tugas menggunakan tombol ikon tempat sampah.
<img width="1645" height="1018" alt="Screenshot 2026-10-27 220924" src="https://github.com/user-attachments/assets/5e5188ab-2865-4d4b-9296-59d4ddb63bea" />


### Eksperimen Mandiri

**1. Menambahkan Tombol Hapus pada To-do List**

Menambahkan tombol hapus pada setiap item daftar tugas menggunakan event `click` dan metode `remove()`.

**Hasil:** Item yang dipilih dapat dihapus dari daftar tanpa memuat ulang halaman.
<img width="1917" height="1016" alt="Screenshot 2026-10-27 221305" src="https://github.com/user-attachments/assets/c361384c-b310-4265-a00f-2971d86c2353" />

<img width="1917" height="1011" alt="Screenshot 2026-10-27 221315" src="https://github.com/user-attachments/assets/93788772-eb72-421c-8781-49de64501306" />


**2. Validasi Nama Minimal 3 Karakter**

Menambahkan validasi agar nama peserta harus memiliki minimal 3 karakter.

**Hasil:** Jika nama kurang dari 3 karakter, sistem menampilkan pesan kesalahan dan proses pendaftaran tidak dilanjutkan.
<img width="1916" height="1018" alt="image" src="https://github.com/user-attachments/assets/78d270a7-48ca-4332-9eb9-5a4a6a57f03f" />


**3. Event Change pada Dropdown Sesi**

Menggunakan event `change` untuk menampilkan informasi sesi workshop yang dipilih.

**Hasil:** Informasi sesi berubah secara otomatis sesuai pilihan pengguna.

<img width="755" height="187" alt="image" src="https://github.com/user-attachments/assets/9c4d90e7-29f7-4826-bf0f-4ac978f7cec3" />


**4. Menyembunyikan dan Menampilkan Paragraf**

Menambahkan tombol untuk menyembunyikan atau menampilkan informasi workshop menggunakan `classList.toggle()`.

**Hasil:** Paragraf dapat disembunyikan dan ditampilkan kembali ketika tombol diklik.

<img width="1908" height="1013" alt="image" src="https://github.com/user-attachments/assets/c0aa83f7-11cc-4e2e-894e-3e9c60ae957a" />

<img width="961" height="1018" alt="image" src="https://github.com/user-attachments/assets/cf7c3b8c-12d8-4294-8927-e5221c7bfc23" />


**5. Eksperimen Atribut Defer**

Melakukan percobaan dengan menghapus atribut `defer` pada pemanggilan file JavaScript di bagian `<head>`.

**Hasil:** Ketika atribut `defer` dihapus, JavaScript dijalankan sebelum elemen HTML di bagian `<body>` selesai diproses. Hal ini menyebabkan beberapa elemen belum ditemukan sehingga terjadi error ketika JavaScript mencoba memasang event listener. Data yang diisi tidak masuk/tidak tampil

<img width="1917" height="1010" alt="image" src="https://github.com/user-attachments/assets/558acb22-e31b-4c9c-8814-ec0eb15fdaa4" />


### G. Kesimpulan Mini Project

Melalui Mini Project Bloom & Learn, saya dapat menerapkan konsep DOM dan Event JavaScript dalam pembuatan website pendaftaran workshop yang interaktif. Fitur validasi formulir, penghitung karakter, dropdown, checklist, dan manipulasi tampilan membantu saya memahami cara JavaScript berinteraksi dengan elemen HTML serta meningkatkan pengalaman pengguna.

---
