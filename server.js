const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const marvelRoutes = require('./routes/marvelRoutes');
const { connectDB } = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api', marvelRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
