class Usuario {
    libros = [];
    mascotas = [];
    static contadorMascotas = 0
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    
    }



    getFullName() {
        console.log(`El nombre del usuario es: ${this.nombre} ${this.apellido}`);
    }


    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
        console.log(`Se agrego la mascota ${nombreMascota}`);
        this.constructor.contadorMascotas = this.constructor.contadorMascotas + 1;
    } 

    countMascota() {
        console.log(`Actualmente tienes estas mascotas ${this.mascotas} ingresadas`);
        console.log(`Actualmente tienes ${this.constructor.contadorMascotas} mascotas ingresadas`);
    }

    addBook(libro , autor) {
        this.libros.push({nombreLibro: libro, autorLibro: autor});
    }

    getBookNames() {
        let listaLibros = this.libros.map(libro => {
            return {
                nombreLibro: `${libro.nombreLibro}`,
               // autorLibro: `${libro.autorLibro}`
            };
        })

        console.log(listaLibros);
    }

}

let usuario1 = new Usuario('Juan', 'Perez');

usuario1.getFullName();
usuario1.addMascota('Perro');
usuario1.addMascota('Loro');
usuario1.countMascota();

usuario1.addBook('La Biblia', 'Los 12 Apostoles')
usuario1.addBook('Don Quijote', 'Miguel de Cervantes')
usuario1.addBook('Harry Potter', 'J.K. Rowling')
usuario1.addBook('El Señor de los Anillos', 'J.R.R. Tolkien')

usuario1.getBookNames();
