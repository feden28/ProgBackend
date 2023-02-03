import { fireProdsDb, fireCartsDb } from "../Firestore/firestoreContainer";
import { mongoProdsDb, mongoCartsDb } from "../MongoDB/mongoContainer";

const dbSelector = process.env.DB_SELECTOR // Booleano para usar Mongo o FB

const cartDbFire = new fireCartsDb();
const prodsDbFire = new fireProdsDb();
const cartDbMongo = new mongoCartsDb();
const prodsDbMongo = new mongoProdsDb();

export const dbConnections = dbSelector === 0 ? [cartDbFire, prodsDbFire] : [cartDbMongo, prodsDbMongo];