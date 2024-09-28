// Elemen-elemen DOM
const tebakanInput = document.getElementById('tebakanInput');
const pesan = document.getElementById('pesan');
const actionButton = document.querySelector('button');

// Variabel permainan
let nomorAcak, kesempatan;

// Inisialisasi permainan
function initGame() {
    nomorAcak = Math.floor(Math.random() * 10) + 1;
    kesempatan = 3;
    tebakanInput.disabled = false;
    tebakanInput.value = '';
    pesan.textContent = `Anda memiliki ${kesempatan} kesempatan untuk menebak angka 1-10.`;
    pesan.style.color = 'black';
    actionButton.textContent = 'Kirim Tebakan';
    actionButton.removeEventListener('click', initGame);
    actionButton.addEventListener('click', handleGuess);
    console.log(nomorAcak); // Untuk debug
}

// Menangani tebakan
function handleGuess() {
    const tebakan = parseInt(tebakanInput.value);

    if (isNaN(tebakan) || tebakan < 1 || tebakan > 10) {
        pesan.textContent = 'Masukkan angka valid antara 1 dan 10.';
        return;
    }

    kesempatan--;

    if (tebakan === nomorAcak) {
        endGame(`Selamat! Anda menebak dengan benar. Angka yang dicari adalah ${nomorAcak}.`, 'green');
    } else if (kesempatan === 0) {
        endGame(`Game Over! Angka yang benar adalah ${nomorAcak}.`, 'red');
    } else {
        const clue = tebakan < nomorAcak ? 'terlalu rendah' : 'terlalu tinggi';
        pesan.textContent = `Tebakan salah. Angka yang Anda masukkan ${clue}. Anda memiliki ${kesempatan} kesempatan lagi.`;
        pesan.style.color = 'red';
    }

    tebakanInput.value = '';
}

// Mengakhiri permainan
function endGame(message, color) {
    pesan.textContent = message;
    pesan.style.color = color;
    tebakanInput.disabled = true;
    actionButton.textContent = 'Main Lagi';
    actionButton.removeEventListener('click', handleGuess);
    actionButton.addEventListener('click', initGame);
}

// Memulai permainan
initGame();
