import express from 'express';
import products from './data/products.js';
import stockPrice from './data/stock-price.js';

const app = express();
const port = 3000;

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/stock-price/:sku', (req, res) => {
    const sku = req.params.sku;
    const stockPriceInfo = stockPrice[sku];

    if (stockPriceInfo) {
        const priceInDollars = (stockPriceInfo.price / 100).toFixed(2);
        res.json({ ...stockPriceInfo, price: priceInDollars });
    } else {
        res.status(404).send('SKU not found');
    }
});

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
});
