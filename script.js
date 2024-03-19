// Mendapatkan jawaban berupa angka acak antara 1 dan 10
// Membangkitkan angka acak antara 1 dan 10
const nomorAcak = Math.floor(Math.random() * 10) + 1;
console.log(nomorAcak); // Tampilkan angka acak pada konsol untuk keperluan debug

// Mengambil elemen input tebakan
const tebakanInput = document.getElementById('tebakanInput');

// Mengambil elemen untuk menampilkan pesan
const pesan = document.getElementById('pesan');

// Menentukan jumlah percobaan
let kesempatan = 3;

// Fungsi untuk memeriksa tebakan
function cekTebakan() {
    // Mendapatkan tebakan pengguna
    const tebakan = parseInt(tebakanInput.value);

    // Memeriksa apakah tebakan benar
    if (tebakan === nomorAcak) {
        // Pesan untuk tebakan yang benar
        pesan.textContent = `Selamat! Anda menebak dengan benar. Angka yang dicari adalah ${nomorAcak}.`;
        pesan.style.color = 'green';
        tebakanInput.disabled = true; // Menonaktifkan input setelah tebakan benar
    } else {
        // Memberikan clue apakah angka yang ditebak terlalu tinggi atau terlalu rendah
        const clue = tebakan < nomorAcak ? 'terlalu rendah' : 'terlalu tinggi';
        
        // Mengurangi jumlah kesempatan
        kesempatan--;

        // Memeriksa apakah permainan berakhir
        if (kesempatan === 0) {
            // Pesan jika permainan berakhir
            pesan.textContent = `Game Over! Angka yang benar adalah ${nomorAcak}.`;
            pesan.style.color = 'red';
            tebakanInput.disabled = true; // Menonaktifkan input setelah habis percobaan
        } else {
            // Pesan jika ketika masih ada kesempatan tebakan salah akan memberikan clue
            pesan.textContent = `Tebakan salah. Angka yang Anda masukkan ${clue}. Anda memiliki ${kesempatan} kesempatan lagi.`;
            pesan.style.color = 'red';
        }
    }
    // Mengosongkan input
    tebakanInput.value = '';
}