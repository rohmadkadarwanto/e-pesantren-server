// index.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userRoutes = require('./modules/user/routes/userRoutes');
const aplikasiRoutes = require('./modules/aplikasi/routes/aplikasiRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', userRoutes);
app.use('/api', aplikasiRoutes);
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
