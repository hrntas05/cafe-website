const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001; // 

const productsFilePath = path.join(__dirname, 'products.json');


app.use(cors());


app.use(express.json());


const readProducts = () => {
  try {
    const data = fs.readFileSync(productsFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading products file:', error);
    return [];
  }
};


const writeProducts = (products) => {
  try {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing products file:', error);
  }
};


app.get('/products', (req, res) => {
  const products = readProducts();
  res.json(products);
});


app.post('/products', (req, res) => {
  const products = readProducts();
  const newProduct = { id: Date.now().toString(), ...req.body }; // Simple ID generation
  products.push(newProduct);
  writeProducts(products);
  res.status(201).json(newProduct);
});


app.put('/products/:id', (req, res) => {
  const products = readProducts();
  const productId = req.params.id;
  const updatedProductData = req.body;

  const productIndex = products.findIndex(product => product.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products[productIndex] = { ...products[productIndex], ...updatedProductData };
  writeProducts(products);
  res.json(products[productIndex]);
});


app.delete('/products/:id', (req, res) => {
  const products = readProducts();
  const productId = req.params.id;

  const initialLength = products.length;
  const filteredProducts = products.filter(product => product.id !== productId);

  if (filteredProducts.length === initialLength) {
    return res.status(404).json({ message: 'Product not found' });
  }

  writeProducts(filteredProducts);
  res.status(204).send(); // No content to send back on successful deletion
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});