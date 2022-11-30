import express from 'express';
import productRouter from "./routes/products.route.js";
import baseRouter from "./routes/base.route.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import path from "path";
import { engine } from 'express-handlebars';

const app = express();
const PORT = 8083;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/images', express.static(path.join(__dirname + '/uploads')));

app.engine("hbs", engine({
    extname: ".hbs",
    defaultLayout: join(__dirname, "/views/layouts/main.hbs"),
    layoutsDir: join(__dirname, "/views/layouts"),
    partialsDir: join(__dirname, "/views/partials"),

}))

app.set("view engine", "hbs");
app.set("views", join(__dirname, "/views"));

app.use("/products", productRouter);
app.use("/", baseRouter);


app.listen(PORT, (error)=>{
    if(error){
        console.log('Error al iniciar el servidor');
    }else{
        console.log(`Servidor levantado en puerto ${PORT}`);

    }
});