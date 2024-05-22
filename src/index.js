 // src/index.js
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}/`);
});


 


/*const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
 
const mongoUri = process.env.MONGODB_URI;
const uri =  "mongodb+srv://cueroj505:powering24@clusterpsoft.bixbcyd.mongodb.net/?retryWrites=true&w=majority&appName=ClusterPsoft"; 

try{
  mongoose.connect(mongoUri)
  console.log("Conectado a MongoDB")
  }catch (error){
  console.error("Error de conexion", error);
  };

  const db = mongoose.connection;

  const libroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
  }); 

  const Libro = mongoose.model("Libro", libroSchema);

  app.post("/libros", async (req, res) => {
    const libro = new Libro({
      titulo: req.body.titulo,
      autor: req.body.autor,
    });

    try {
      await libro.save();
      res.json(libro);
    } catch (error) {
      res.status(500).send("Error al guardar el libro");
    }
  });

 app.listen(3000, () => {
    console.log("Servidor ejecutandose en https://localhost:3000/" )
});*/

/*
//crear un nuevo libro
app.post("/libros", async (req, res) => {
    const libro = new Libro({
      titulo: req.body.titulo,
      autor: req.body.autor,
    });
  


const db = mongoose.connection;

const libroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
}); 

const Libro = mongoose.model("Libro", libroSchema);

app.post("/libros", async (req, res) => {
    const libro = new Libro({
      titulo: req.body.titulo,
      autor: req.body.autor,
    });
    try {
      await libro.save();
      res.json(libro);
    } catch (error) {
      res.status(500).send("Error al guardar el libro");
    }
  });

 


 

app.listen(5000, () => {
    console.log("Servidor ejecutandose en https://localhost:5000/" )
});




try {
  await libro.save();
  res.json(libro);
} catch (error) {
  res.status(500).send("Error al guardar el libro");
}
});*/
