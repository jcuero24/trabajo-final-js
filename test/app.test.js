const request = require("supertest");
const app = require("../src/app");
const mongoose = require("mongoose");

describe("Endpoints de libros", () =>{
    test("Deberia obtener una lista de libros", async ()=>{
        const res = await request(app).get("/libros");

        expect(res.statusCode).toEqual(200);

        expect(Array.isArray(res.body)).toBe(true);
    })

    test("Debería crear un nuevo libro", async () => {
        const res = await request(app)
          .post("/libros")
          .send({ titulo: "Libro prueba", autor: "Autor prueba" });

        expect(res.statusCode).toEqual(200);
    
        expect(res.body.titulo).toEqual("Libro prueba")
    })

    afterAll(async () => {
        await mongoose.connection.close()
      })
      
}); 


