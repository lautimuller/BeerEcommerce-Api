const express = require('express');
const router = express.Router();
const products = require('../data/products').default;
const stockPrice = require('../data/stock-price').default;

router.get('/products', (req, res) => {
    const productsWithStockPrice = products.map(product => ({
        ...product,
        skus: product.skus.map(sku => ({
            ...sku,
            price: stockPrice[sku.code]?.price,
            stock: stockPrice[sku.code]?.stock
        }))
    }));
    
    res.json(productsWithStockPrice);
});

router.get('/stock-price/:sku', (req, res) => {
    const { sku } = req.params;
    const stockPriceInfo = stockPrice[sku];
    
    if (!stockPriceInfo) {
        return res.status(404).json({ message: 'Stock and price information not found' });
    }

    res.json(stockPriceInfo);
});

module.exports = router;
