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
                         { nombre: "Panera", precio: 350, stock: 1000}
                        ])

db.mensajes.insertMany([{ email: "feden.28@gmail.com", mensaje: "Hola"},
                        { email: "feden.28@gmail.com", mensaje: "soy"},
                        { email: "feden.28@gmail.com", mensaje: "Federico"},
                        { email: "feden.28@gmail.com", mensaje: "Como"},
                        { email: "feden.28@gmail.com", mensaje: "Estas?"}
                        ])


db.productos.find() //mostrar la coleccion PRODUCTOS completa.
db.productos.find().pretty()

db.productos.estimatedDocumentCount() //Cantidad de documentos en la colección?

db.mensajes.find() //mostrar la coleccion MENSAJES completa.
db.mensajes.find().pretty()

db.mensajes.estimatedDocumentCount() //Cantidad de documentos en la colección?


db.productos.insertOne({ nombre: "Jarra Vidrio", precio: 1700, stock: 200})

db.productos.find({ precio: { $lt: 1000}}) //Documentos con Precio menor a 1000

db.productos.find({ precio: { $in: [1000,3000] }})  //Busca Documentos con precio entre 1000 a 3000 inclusive.

db.productos.find({ precio: { $gt:3000 }})  //Busca Documentos con precio mayor a 3000.

db.productos.find({}, { nombre: 1 , _id: 0}).skip(2).limit(1).sort({precio: 1}) //skip saltea las primeras dos posiciones, limit limita los documentos que se muestran (uno solo), sort ordena por precio de manera ascendente (-1 para descendente).


db.productos.updateMany({precio: { $gt: 0}}, {$set: {"stock":100}}, {upsert: true})

db.productos.updateMany({precio: { $gt: 400}}, {$set: {stock: 0}}, {upsert: false})

db.productos.deleteMany({precio: { $lt: 200}})

//use admin

db.createUser({user: "Pepe", pwd: "asd456", roles: [{role: "read", db: "mibase"}]})

















