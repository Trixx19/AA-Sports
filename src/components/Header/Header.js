// src/components/Header/Header.js

import React from 'react';
import { useCart } from '../../contexts/CartContext'; // Importa nosso hook do carrinho
import './Header.css'; 

function Header() {
  // Usamos o hook para acessar os dados do carrinho
  const { cartItems } = useCart();

  return (
    <header className="main-header">
      <div className="logo">AA-Sports</div>
      <nav className="main-nav">
        <a href="#masculino">Masculino</a>
        <a href="#feminino">Feminino</a>
        <a href="#ofertas">Ofertas</a>
      </nav>
      <div className="cart-icon">
        <span role="img" aria-label="carrinho">🛒</span>
        {/* Exibimos a quantidade de itens que estão no array cartItems */}
        <span className="cart-count">{cartItems.length}</span>
      </div>
    </header>
  );
}

export default Header;