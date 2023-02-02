import config from "../db/conflig_mysql.js";
import knex from "knex";

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

export default createTable;