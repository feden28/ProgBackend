import { randomProd } from "../data/randomProduct";

const getRandomProds = (req, res) => {

    res.status(200).json(randomProd())

}

export const prodController = { getRandomProds };
