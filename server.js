const express = require('express');
const session = require('express-session');
const path = require('path');
const { initializeDatabase } = require('./models/database');

const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'gembala-podcast-secret-key-2024',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }
}));

initializeDatabase();

app.use('/', indexRoutes);
app.use('/admin', adminRoutes);
app.use('/api', apiRoutes);

app.use((req, res) => {
  res.status(404).send('Halaman tidak ditemukan');
});

app.listen(PORT, () => {
  console.log(`🎙️ Youth Podcast Blog berjalan di http://localhost:${PORT}`);
  console.log(`📝 Admin panel: http://localhost:${PORT}/admin`);
  console.log(`   Login: admin / gembala123`);
});
