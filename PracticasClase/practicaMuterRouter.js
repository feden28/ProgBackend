//import express, {Router} from 'express';
const express = require('express');
const Router = express;

const app = express();
const router = Router();
const personas = [];
const mascotas = [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));

router
.route("/personas")
.get((req, res) => {
        res.json(personas);
    })

.post((req, res) => {
        const { nombre, apellido, edad} = req.body;

        if(!nombre || !apellido || !edad) {
            res.status(400).send( "Debe enviar los datos de la persona completos.");
        }
        personas.push({nombre, apellido, edad});
        res.status(201).json({nombre, apellido, edad})
    });

router
    .route("/mascotas")
    .get((req, res) => {
        res.json(mascotas);
    })
    .post((req, res) => {
        const { nombre, raza, edad} = req.body;

        if(!nombre || !raza || !edad) {
            res.status(400).send( "Debe enviar los datos de la mascota completos.");
        }
        mascotas.push({nombre, raza, edad});
        res.status(201).json({nombre, raza, edad})
    });

app.use('/', router)


app.listen(8081, () => {
    console.log('Servidor on port 8081')
})
app.on ("error", (err)=>{
    console.log(err)
})