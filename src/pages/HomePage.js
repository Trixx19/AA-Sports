// src/pages/HomePage.js

import React from 'react';
import './HomePage.css';
import { products } from '../data/products.js'; 
import ProductCard from '../components/ProductCard/ProductCard';

function HomePage() {
  return (
    <main className="product-list">
      <h2>Nossos Produtos</h2>
      <div className="products-grid">
        {products.map(product => (
          // Para cada produto, renderizamos um componente ProductCard
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;