const express = require('express')
const Contenedor = require ('../SegundaEntrega/segundaentrega')

const app = express()

const PORT = 8080


const server = app.listen(PORT, () => {
    console.log(`conectado al puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en el servidor conectado: ${error.message}`))


const contenedor = new Contenedor('../SegundaEntrega/productos.txt')

//Ruta a Productos
app.get('/productos', async (req, res) =>{

    let productos = await contenedor.getAll()
    console.log(productos)

    res.send(productos)
})

app.get('/productoRandom', async (req, res) =>{
    let random = Math.trunc(Math.random() *(4-1) + 1)

    let prodRandom = await contenedor.getById(random)
    console.log(prodRandom)
    
    res.send(prodRandom)   
})

app.listen()
