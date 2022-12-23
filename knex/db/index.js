import knex from "knex";

const config = {
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "productos",
    },
    pool: {min: 0, max:100},
}

const database = knex(config);


export default database();