import React, { createContext, useState, useContext } from 'react';

//Criando o Contexto
const CartContext = createContext();

// Criando o Provedor do Contexto (Provider)
// O Provider é um componente que vai "abraçar" outros componentes
// e disponibilizar os dados do contexto para eles.
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); // Estado que guarda os itens do carrinho

  
  const addToCart = (product) => {
    setCartItems(prevState => [...prevState, product]);
    console.log(`${product.name} adicionado ao carrinho!`); 
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Criando um Hook customizado para facilitar o uso do contexto
// Com isso, em vez de importar useContext e CartContext em cada componente,
// importamos apenas o useCart.
export function useCart() {
  return useContext(CartContext);
}