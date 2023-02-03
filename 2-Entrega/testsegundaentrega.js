const Contenedor = require ('./segundaentrega.js')
const log = (p) => console.log(p)


//Objetos de Prueba
const item1 ={
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
}

const item2 ={
    title: "Cuaderno",
    price: 200.5,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
}

const item3 ={
    title: "Escuadra",
    price: 200.5,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
}

async function main() {
    //Instancio mi contenedor referenciando a mi archivo .txt
    const contenedor = new Contenedor('./productos.txt')

    //Obtengo todos los objetos de mi array

    let datos = await contenedor.getAll()
    log(datos)
    
    
    //Agrego un elemento al array
    let id1 = await contenedor.save(item1)
    log(id1)

    //Agrego un elemento al array
    let id3 = await contenedor.save(item2)
    log(id3)


    //Agrego un Elemento Existente
    let id2 = await contenedor.save(item3)
    log(id2)

    //Obtengo un elemento del array por su ID
    let buscar1 = await contenedor.getById(3)
    log(buscar1)

    //Elimino un Elemento del array por su ID
    let borra1 = await contenedor.deleteById(3)
    log(datos)
    
    //Elimino todos los objetos del array
    //let vaciar = await contenedor.deleteAll()

}

main()