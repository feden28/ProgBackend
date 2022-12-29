import knex from "knex";
import path, { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const config = {
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "../database/coderhouse.sqlite"),
  },
  useNullAsDefault: true,
};

const database = knex(config);

const createChatTable = async () => {
  try {
    await database.schema.createTable("chat", (chatTable) => {
      chatTable.increments("id").primary();
      chatTable.string("username", 100).notNullable();
      chatTable.string("message", 500).notNullable();
      //chatTable.string("time", 250).notNullable();
    });

    console.log("Tabla Chat Creada");
    database.destroy();
  } catch (err) {
    console.log(err);
  }
};

createChatTable();