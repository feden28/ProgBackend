import express from 'express';

const app = express();
const frase = "Hola mundo como estan"

app.get('/api/frase', (req, res) => {
    res.json({frase}); //frase: frase,
})

app.get('/api/letra/:num', (req, res) => {
    const indiceLetra = Number(req.params.num)-1; //porque el indice de un objeto empieza en cero, 
    
    res.json({ letra: frase[indiceLetra] }); 
    
});

app.get('/api/palabra/:num', (req, res) => {
    const indicePalabra = Number(req.params.num) - 1;
    const frasexPalabra = frase.split(" ");

    res.json({ palabra: frasexPalabra[indicePetra]});

});


app.listen(3000, (err) => {
    if (err) {
        console.log(err);

    }else {
       console.log('listening on port 3000');
    }
});