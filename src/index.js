import express from 'express';
import products from './data/products.js';
import stockPrice from './data/stock-price.js';

const app = express();
const port = 3000;

// Ruta para obtener productos
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Ruta para obtener stock y precio por SKU
app.get('/api/stock-price/:sku', (req, res) => {
    const sku = req.params.sku;
    const stockPriceInfo = stockPrice[sku];

    if (stockPriceInfo) {
        // Convertir el precio de centavos a dólares
        const priceInDollars = (stockPriceInfo.price / 100).toFixed(2);
        res.json({ ...stockPriceInfo, price: priceInDollars });
    } else {
        res.status(404).send('SKU no encontrado');
    }
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
