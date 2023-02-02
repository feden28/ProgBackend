//Configuración para Sqlite database
import path, { dirname, join } from "path";
import { fileURLToPath } from "url";

    const __dirname = dirname(fileURLToPath(import.meta.url));

    const config = {
        client: 'sqlite3',
        connection: { filename: path.resolve(__dirname, ) },  //Falta ENLACE AL URL DE CHAT SQLITE
        useNullAsDefault: true
    }

export default config;