const express = require('express');
const app = express();
const path = require('path');

// Mengatur EJS sebagai view engine
app.set('view engine', 'ejs');
// Menentukan lokasi folder views
app.set('views', path.join(__dirname, 'views'));

// Melayani file statis dari folder 'public'
// Misalnya, jika CSS Anda ada di public/style.css, bisa diakses
app.use(express.static(path.join(__dirname, 'public')));

// Mendefinisikan rute untuk merender chuy.ejs
app.get('/', (req, res) => { // Atau app.get('/chuy', ...) jika Anda ingin URL spesifik
    res.render('cihuy'); // 'chuy' merujuk pada chuy.ejs di folder views
});

const PORT = process.env.PORT || 3000; // Port default 3000
app.listen(PORT, () => {
    console.log(`Server sedang berjalan di http://localhost:${PORT}/`);
    console.log(`Silakan buka URL di atas di browser Anda.`);
});