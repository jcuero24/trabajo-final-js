 // app.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
require("dotenv").config();
const app = express();

// Connect to database
connectDB();

app.use(cors());
app.use(express.json());

// Routes
const libros = require('./routes/libros');
app.use('/api/libros', libros);

module.exports = app;
