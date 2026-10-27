// Mini Project - Form Pendaftaran Workshop

const form = document.getElementById("formWorkshop");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");
const alasan = document.getElementById("alasan");

const jumlahKarakter = document.getElementById("jumlahKarakter");
const infoSesi = document.getElementById("infoSesi");
const pesan = document.getElementById("pesan");
const ringkasan = document.getElementById("ringkasan");

// 1. Menghitung karakter saat mengetik
alasan.addEventListener("input", function () {
    jumlahKarakter.textContent = alasan.value.length;
});

// 2. Menampilkan sesi workshop yang dipilih
sesi.addEventListener("change", function () {
    if (sesi.value !== "") {
        infoSesi.textContent = "Kamu memilih: " + sesi.value;
    } else {
        infoSesi.textContent = "";
    }
});

// 3. Validasi dan pendaftaran
    form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaValue = nama.value.trim();
    const emailValue = email.value.trim();
    const sesiValue = sesi.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    pesan.className = "error";
    ringkasan.hidden = true;

    if (namaValue === "") {
        pesan.textContent = "Nama lengkap wajib diisi!";
        return;
    }

    // Eksperimen 2 - Validasi nama minimal 3 karakter
    if (namaValue.length < 3) {
        pesan.textContent = "Nama harus minimal 3 karakter!";
        return;
    }

    if (!polaEmail.test(emailValue)) {
        pesan.textContent = "Masukkan alamat email yang valid!";
        return;
    }

    if (sesiValue === "") {
        pesan.textContent = "Silakan pilih sesi workshop!";
        return;
    }

    // Pesan sukses
    pesan.className = "success";
    pesan.textContent = "♡ Pendaftaran berhasil! Terima kasih sudah mendaftar.";

    // Menampilkan ringkasan dengan textContent
    ringkasan.replaceChildren();

    const judulRingkasan = document.createElement("h3");
    judulRingkasan.textContent = "Ringkasan Pendaftaran ♡";
    ringkasan.appendChild(judulRingkasan);

    const data = [
        "Nama: " + namaValue,
        "Email: " + emailValue,
        "Sesi: " + sesiValue,
        "Alasan: " + (alasan.value.trim() || "-")
    ];

    data.forEach(function (teks) {
        const p = document.createElement("p");
        p.textContent = teks;
        ringkasan.appendChild(p);
    });

    ringkasan.hidden = false;
});

// 4. Tombol reset
form.addEventListener("reset", function () {
    jumlahKarakter.textContent = "0";
    infoSesi.textContent = "";
    pesan.textContent = "";
    pesan.className = "";
    ringkasan.replaceChildren();
    ringkasan.hidden = true;
});


// Eksperimen 4 - Sembunyikan dan tampilkan paragraf
const tombolInfo = document.getElementById("tombolInfo");
const teksInfo = document.getElementById("teksInfo");

tombolInfo.addEventListener("click", function () {
    teksInfo.classList.toggle("sembunyi");

    if (teksInfo.classList.contains("sembunyi")) {
        tombolInfo.textContent = "Tampilkan Informasi";
    } else {
        tombolInfo.textContent = "Sembunyikan Informasi";
    }
});


// Eksperimen Mandiri - Workshop Checklist

// Eksperimen Mandiri - Workshop Checklist
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");
const progressTugas = document.getElementById("progressTugas");

// Menghitung jumlah tugas selesai
function updateProgress() {
    const total = daftarTugas.children.length;
    const selesai = daftarTugas.querySelectorAll("li.selesai").length;

    progressTugas.textContent =
        selesai + " dari " + total + " persiapan selesai ♡";
}

// Menambahkan tugas
tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis persiapan terlebih dahulu!";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const tulisan = document.createElement("span");
    const tombolHapus = document.createElement("button");

    // Membuat checkbox
    checkbox.type = "checkbox";
    checkbox.className = "cek-tugas";

    tulisan.textContent = teks;

    label.className = "label-tugas";
    label.append(checkbox, tulisan);

    // Event ketika checkbox diklik
    checkbox.addEventListener("change", function () {
        item.classList.toggle("selesai", checkbox.checked);
        updateProgress();
    });

    // Membuat tombol hapus icon sampah
    tombolHapus.type = "button";
    tombolHapus.className = "hapus-tugas";
    tombolHapus.textContent = "🗑️";
    tombolHapus.setAttribute("aria-label", "Hapus " + teks);
    tombolHapus.title = "Hapus tugas";

    tombolHapus.addEventListener("click", function () {
        item.remove();
        pesanTugas.textContent = "Persiapan berhasil dihapus.";
        updateProgress();
    });

    item.append(label, tombolHapus);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Persiapan berhasil ditambahkan!";
    inputTugas.focus();

    updateProgress();
});
