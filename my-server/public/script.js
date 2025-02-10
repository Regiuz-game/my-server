document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    // Logika permainan dan event handler
});
document.addEventListener('DOMContentLoaded', () => {
    const playWithFriendButton = document.getElementById('playWithFriend');
    const gameSection = document.getElementById('gameSection');
    const playerIdSpan = document.getElementById('playerId');
    const connectButton = document.getElementById('connectButton');
    const friendIdInput = document.getElementById('friendIdInput');

    // Fungsi untuk menghasilkan ID unik untuk setiap pemain
    function generatePlayerId() {
        return 'player-' + Math.random().toString(36).substr(2, 9);
    }

    // Setel ID pemain dan tampilkan di UI
    const playerId = generatePlayerId();
    playerIdSpan.textContent = playerId;

    playWithFriendButton.addEventListener('click', () => {
        // Tampilkan input untuk memasukkan ID teman
        document.querySelector('.invite').style.display = 'block';
    });

    connectButton.addEventListener('click', () => {
        const friendId = friendIdInput.value.trim();
        if (friendId) {
            // Logika untuk menghubungkan dengan teman menggunakan ID
            // Ini memerlukan implementasi backend untuk komunikasi real-time
            alert(`Menghubungkan dengan teman dengan ID: ${friendId}`);
            // Setelah terhubung, tampilkan bagian game
            gameSection.style.display = 'block';
        } else {
            alert('Masukkan ID teman.');
        }
    });
});
