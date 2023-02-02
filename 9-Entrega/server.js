import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import Contenedor from "./db/DB-Contenedor.js";
import config from "./db/conflig_mysql.js";
import createTable from "./table/tableProd-mysql.js";
import router from "./Route/routeFaker.js";


let dbProducts = new Contenedor("products", config); //Esto es para que el chat interactue con los productos on time.

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static(__dirname + "/public"));
app.use("/api", router); //Llamo a router para traer los productos usando Faker.

try {
    await createTable("products")
} catch (err) {
    console.log(err)
}



const expressServer = app.listen(3000, () => console.log('listening on port 3000'));
app.on("error", (err) => {
    console.log(err)
})