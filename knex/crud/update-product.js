import database from "../db/index.js";

const updateProduct = async () => {
    try {
        const productFromDB = await database.from("products").select("price", "id");

        await Promise.all(
            productFromDB.map(async (product) =>{
                await database.from("products")
                              .where("id","=", product.id)
                              .update({price: product.price * 2}) 
            })
        )
        console.log(productFromDB);

        database.destroy();
    } catch (error) {
        console.log(error);
        database.destroy();
    }
};

updateProduct();