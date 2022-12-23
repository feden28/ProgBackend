import database from "../db/index.js";

const deleteProduct = async () => {
    try {
        const productFromDB = await database.from("products").del();
//puedo usar un foreach para mostrar cada uno de los productos.
        console.log(productFromDB);

        database.destroy();
    } catch (error) {
        console.log(error);
        database.destroy();
    }
};

deleteProduct();