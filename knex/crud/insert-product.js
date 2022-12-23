import database from "../db/index.js";

const insertProduct = async() => {
    try {
      const product = [
        {
          "title": "Escuadra",
          "price": 123.45,
          "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
        },
        {
          "title": "Calculadora",
          "price": 234.56,
          "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
        },
        {
          "title": "Cuaderno",
          "price": 200.5,
          "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
        }
      ]  ;

      await database("products").insert(product);
      console.log ('productos insertados');
      database.destroy("productos")


    }catch (err) {
        console.log (err);
        database.destroy("productos")
    }
};

insertProduct();