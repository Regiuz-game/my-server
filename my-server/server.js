const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Menyajikan file statis dari direktori 'public'
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('Pengguna terhubung:', socket.id);

    socket.on('disconnect', () => {
        console.log('Pengguna terputus:', socket.id);
    });

    // Tambahkan event lain sesuai kebutuhan
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server berjalan pada http://localhost:${PORT}`);
});

