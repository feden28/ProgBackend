import { faker } from '@faker-js/faker';

export const randomProd = () => {
    const res = [];

    for (let i=0; i<=4; i++) {
        res.push ({
            title: faker.commerce.productName(),
            price: faker.commerce.price(),
            thumbnail: faker.image.imageUrl(),
        })
    }   
    return res
}