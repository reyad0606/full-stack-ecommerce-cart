const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getSpecificProduct,
} = require('../controller/productController');

//@desc GET all products from db
//@route GET /api/products

router.get('/', getAllProducts);

//@desc GET specific products by id from db
//@route GET /api/products/:id

router.get('/:id', getSpecificProduct);

module.exports = router;
