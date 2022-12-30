//use ecommerce

db.createCollection('mensajes')
db.createCollection('productos')

db.productos.insertMany([{ nombre: "Vaso", precio: 200, stock: 1000},
                         { nombre: "Tenedor", precio: 100, stock: 1000},
                         { nombre: "Cuchillo", precio: 200, stock: 1000},
                         { nombre: "Cuchara", precio: 150, stock: 500},
                         { nombre: "Copa", precio: 400, stock: 700},
                         { nombre: "Servilleta", precio: 100, stock: 5000},
                         { nombre: "Afilador", precio: 1000, stock: 100},
                         { nombre: "Pelapapas", precio: 400, stock: 250},
                         { nombre: "Espatula", precio: 600, stock: 800},
                         { nombre: "Panera", precio: 350, stock: 1000}])


db.productos.find() //mostrar la coleccion PRODUCTOS completa.
db.productos.find().pretty()

db.productos.estimatedDocumentCount() //Cantidad de documentos en la colección?


db.productos.find({ precio: { $lt: 1000}}) //Documentos con Precio menor a 1000

db.productos.find({ precio: { $in: [1000,3000] }})  //Busca Documentos con precio entre 1000 a 3000 inclusive.