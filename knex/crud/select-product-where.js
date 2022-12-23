import database from "../db/index.js";

const selectProductBy = async () => {
    try {
        const productFromDB = await database
        .from("products")
        .select("*")
        .where({title: "Cuaderno"});


//puedo usar un foreach para mostrar cada uno de los productos.
        console.log(productFromDB);

        database.destroy();
    } catch (error) {
        console.log(error);
        database.destroy();
    }
};

selectProductBy();