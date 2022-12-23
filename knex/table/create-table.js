import database from "../db/index.js";

const createTable = async () => {
    try {
        await database.schema.dropTableIfExists("productos");

        await database.schema.createTable("productos", (productosTable) => {
            productosTable.increments("id").primary();
            productosTable.string('title', 30).notNullable();
            productosTable.integer('price').notNullable();

        });

        console.log('tabla de productos creada');

        database.destroy();
    } catch(err) {
        console.log(err);
        database.destroy();
    }
};

createTable();