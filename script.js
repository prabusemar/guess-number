// Mendapatkan jawaban berupa angka acak antara 1 dan 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber); // Tampilkan angka acak pada konsol untuk keperluan debug

// Mengambil elemen input tebakan
const guessInput = document.getElementById('guessInput');

// Mengambil elemen untuk menampilkan pesan
const message = document.getElementById('message');

// Menginisialisasi jumlah percobaan
let attempts = 3;

// Fungsi untuk memeriksa tebakan
function checkGuess() {
    // Mendapatkan tebakan pengguna
    const userGuess = parseInt(guessInput.value);

    // Memeriksa apakah tebakan benar
    if (userGuess === randomNumber) {
        message.textContent = `Selamat! Anda menebak dengan benar. Angka yang dicari adalah ${randomNumber}.`;
        message.style.color = 'green';
        guessInput.disabled = true; // Menonaktifkan input setelah tebakan benar
    } else {
        // Memberikan clue apakah angka yang ditebak terlalu tinggi atau terlalu rendah
        const clue = userGuess < randomNumber ? 'terlalu rendah' : 'terlalu tinggi';
        
        attempts--;
        if (attempts === 0) {
            message.textContent = `Game Over! Angka yang benar adalah ${randomNumber}.`;
            message.style.color = 'red';
            guessInput.disabled = true; // Menonaktifkan input setelah habis percobaan
        } else {
            message.textContent = `Tebakan salah. Angka yang Anda masukkan ${clue}. Anda memiliki ${attempts} kesempatan lagi.`;
            message.style.color = 'red';
        }
    }
    // Mengosongkan input
    guessInput.value = '';
}
