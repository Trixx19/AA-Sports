import React from 'react';
import './ProductCard.css';
import { useCart } from '../../contexts/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  // caminho completo para a imagem na pasta public
  const imagePath = `/images/products/${product.image}`;

  return (
    <div className="product-card">
      {      /* Exibimos a imagem do produto */}
      <img src={imagePath} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R$ {product.price.toFixed(2).replace('.', ',')}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default ProductCard;