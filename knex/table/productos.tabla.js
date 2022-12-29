import knex from "knex";

const config = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "mibase",
  },
  pool: { min: 0, max: 7 },
};

const database = knex(config);

const createTable = async () => {
    try {
        await database.schema.dropTableIfExists("productos");

        await database.schema.createTable("productos", (productosTable) => {
            productosTable.increments("id").primary();
            productosTable.string('title', 30).notNullable();
            productosTable.integer('price').notNullable();
            productosTable.string("thumbnail", 500).notNullable();

        });

        console.log('tabla de productos creada');

        database.destroy();
    } catch(err) {
        console.log(err);
        database.destroy();
    }
};

createTable();