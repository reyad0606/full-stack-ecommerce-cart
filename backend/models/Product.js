const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    reauired: true,
  },
  description: {
    type: String,
    reauired: true,
  },
  price: {
    type: Number,
    reauired: true,
  },
  countInStock: {
    type: Number,
    reauired: true,
  },
  imageUrl: {
    type: String,
    reauired: true,
  },
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
