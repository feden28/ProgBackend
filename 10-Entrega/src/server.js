import express, { json,urlencoded } from "express";
import session, { Session } from "express-session";
import MongoStore from "connect-mongo";
import { dirname, join } from "path";
import { fileURLToPath } from "url";


/*const mongoOptions = { //Esto para usar con mongo Atlas
    useNewUrlParser: true,
    useUnifiedTopology: true,
};*/

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    resave: false,
    saveUninitialized: false,
    rolling: true,
    secret: 'coderhouse',
    store: new MongoStore({ mongoUrl: 'mongodb://127.0.0.1/27017',
    /*mongoOptions,*/})
}))

const expressServer = app.listen(3000, () => console.log('listening on port 3000'));
app.on("error", (err) => {
    console.log(err)
})