// routes/libros.js
const express = require('express');
const router = express.Router();
const Libro = require('../models/libro');

// Crear nuevo libro
router.post('/', async (req, res) => {
  const { titulo, autor } = req.body;
  try {
    const newLibro = new Libro({ titulo, autor });
    const libro = await newLibro.save();
    res.status(201).json(libro);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Traer un listado de todos los libros
router.get('/', async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Actualizar libro
router.put('/:id', async (req, res) => {
  const { titulo, autor } = req.body;
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro) return res.status(404).json({ message: 'Libro no encontrado' });

    libro.titulo = titulo;
    libro.autor = autor;
    await libro.save();
    res.json(libro);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Eliminar libro
router.delete('/:id', async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro) return res.status(404).json({ message: 'Libro no encontrado' });

    await libro.remove();
    res.json({ message: 'Libro eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
