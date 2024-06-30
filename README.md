# Beer E-Commerce Challenge 🍺

## Product Api 🚀

## Description 💬

product-api is a backend API server built with Express for serving product and stock information.

## Technologies Used 🛠️

- **Express**: Version ^4.19.2

## Get Products 📦

- **URL**: `/api/products`
- **Method**: GET
- **Description**: Retrieves a list of products.
- **Example**: `http://localhost:3000/api/products`

## Get Stock and Price by SKU 🏷️

- **URL**: `/api/stock-price/:sku`
- **Method**: GET
- **Description**: Retrieves stock and price information for a specific SKU.
- **Parameters**:
  - `:sku` (path parameter) - SKU of the product.
- **Example**: `http://localhost:3000/api/stock-price/101010`

