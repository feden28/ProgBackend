import express from 'express';
import productRouter from "./routes/products.route.js";
import baseRouter from "./routes/base.route.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import path from "path";
import { engine } from 'express-handlebars';
import {Server as IOServer } from "socket.io";

const app = express();
const PORT = 8083;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const expressServer = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

const io = new IOServer(expressServer);
const mensajes = [];

app.use(express.static(__dirname + "/public"));
app.use('/images', express.static(path.join(__dirname + '/uploads')));


//Escuchamos el evento por default de socket io que se ejecuta cuando conecta un cliente y envia un mensaje
io.on("connection", (socket) => {
    console.log(`New conection, socket ID: ${socket.id}`);

    socket.emit("server:message", mensajes); //actualiza la lista cuando un cliente se conecta

    socket.on("client:message", (messageInfo) => {
       
        mensajes.push(messageInfo); //agrega el nuevo mensaje registrado

        io.emit("server:message", mensajes); // muestra los mensajes actualizados

    });
});

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


// app.listen(PORT, (error)=>{
//     if(error){
//         console.log('Error al iniciar el servidor');
//     }else{
//         console.log(`Servidor levantado en puerto ${PORT}`);

//     }
// });