const express = require('express');
const routes = express.Router();

const ProductController = require('../src/controllers/ProductController')

routes.get('/products', ProductController.list);
routes.get('/products/:id', ProductController.show)
routes.post('/products', ProductController.create);
routes.delete('/products/:id', ProductController.destroy);
routes.put('/products/:id', ProductController.update);

module.exports = routes;