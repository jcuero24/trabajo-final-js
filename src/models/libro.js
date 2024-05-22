 // src/app.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
require("dotenv").config();
const app = express();

// Conectar a la base de datos
connectDB();

app.use(cors());
app.use(express.json());

// Rutas
const libros = require('./routes/libros');
app.use('/api/libros', libros);

module.exports = app;
