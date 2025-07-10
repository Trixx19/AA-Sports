// src/components/Header/Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importar o componente Link
import { useCart } from '../../contexts/CartContext';
import './Header.css';

function Header() {
  const { cartItems } = useCart();

  return (
    <header className="main-header">
      {}
      <Link to="/" className="logo">AA-Sports</Link>
      
      <nav className="main-nav">
        {}
        <a href="#masculino">Masculino</a>
        <a href="#feminino">Feminino</a>
        <a href="#ofertas">Ofertas</a>
      </nav>
      
      {}
      <Link to="/cart" className="cart-icon">
        <span role="img" aria-label="carrinho">🛒</span>
        <span className="cart-count">{cartItems.length}</span>
      </Link>
    </header>
  );
}

export default Header;