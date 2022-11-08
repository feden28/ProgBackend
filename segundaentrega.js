const fs = require('fs')

class Contenedor {
    //el constructor recibe el nombre del archivo
    constructor (route){
        this.route = route
    }

    //funcion para guardar un nuevo objeto
    async save(obj){
        //obtenemos todos los objetos
        const listar = await this.getAll()

        //Si el array no es cero, y el titulo del objeto coincide con un titulo dentro del array, objeto repetido:
        if (listar.length > 0 && listar.some((elem) => elem.title === obj.title)) {
            
            return console.log (`El objeto ya se encuentra en el catálogo`)
        }

        //identificamos el ultimo id y lo incrementamos
        let nuevoId
        if(listar.lenght == 0){ //si el array está vacio, entonces el objeto ocupa el lugar 1.
           nuevoId=1 
        } else { //si el array no está vacio, entonces el objeto ocupa el lugar i+1.
            
            //el indice comienza en 0, por ende mi ultimo lugar es la cantidad de objetos menos 1.
            nuevoId= listar[listar.length - 1].id + 1
        }
        //guardamos el nuevo objeto y pusheamos en el array original

        const nuevoObjeto = {...obj, id: nuevoId} //asigna al objeto el ID nuevo

        listar.push(nuevoObjeto) //insertar el nuevo objeto en el array.


        //lo insertamos al archivo con un trycatch
        try {
            const data = await fs.promises.writeFile(this.route, JSON.stringify(listar, null ,2))
            return nuevoId
        }catch (error){
            //todo: error
            throw new Error (`Error al guardar un nuevo objeto: ${error}`)
            
        }
    }


    //funcion para obtener los objetos
    async getAll(){
        try {
            const data = await fs.promises.readFile(this.route, 'utf8')
            return JSON.parse(data)
        }catch (error){
            //todo: devuelve array vacio
            return []
        }
    }

    //funcion para obtener un objeto por su ID.
    async getById(id) {
        try {
            const listar = await this.getAll()

            return listar.find(item => item.id === id)
            
        } catch (error) {
            throw new Error (`No se pudo encontrar el objeto buscado: ${error}`)   
        }      
    }

    //funcion para borrar todos los objetos
    async deleteAll(){
        try {
            const data = await fs.promises.writeFile(this.route, JSON.stringify([], null,2))
            
        }catch (error){
            throw new Error (`Error al intentar eliminar el arreglo: ${error}`)
        }
    }

    //funcion para borrar el objeto según un ID
    async deleteById(id) {
        const listar = await this.getAll()


        //listamos nuevamente el array, filtrando la coincidencia de id.
        const nuevolistar = listar.filter( item => item.id != id)


        //pisamos el archivo anterior con el nuevo Listar
        try {
            const data = await fs.promises.writeFile(this.route, JSON.stringify(nuevolistar, null,2))
            
        }catch (error){
            throw new Error (`Error al intentar eliminar el objeto: ${error}`)
        }
    }
}

module.exports = Contenedor;