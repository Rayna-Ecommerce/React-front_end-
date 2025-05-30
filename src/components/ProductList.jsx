import React from 'react';
import ProductCard from './ProductCard';


const products = [
  { id: 1,
    name: 'Es Kopi gula aren',
    description: 'Perpaduan espresso dan manisnya gula aren khas.',
    price: 15000,
    image: '/es_kopi_gula_aren.jpg' },
  { id: 2,
    name: 'Latte Caramel',
    desscription: 'Creamy dengan sentuhan caramel yang menggoda.',
    price: 20000,
    image: '/asset/latte_caramel'
       },
  { id: 3,
    name: 'Cold Brew Coffe',
    description: ' Rasa kopi murni yang menyegarkan untuk hari yang panjang.',
    price: 25000,
    image: '/asset/cold_brew_coffe.jpg'
      }
];

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
