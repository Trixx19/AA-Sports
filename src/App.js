import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 1. Importar ferramentas de roteamento

import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import Header from './components/Header/Header';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      {/* BrowserRouter "abraça" tudo que terá rotas */}
      <BrowserRouter> 
        <div className="App">
          <Header />
          
          {/* Routes define a área onde as páginas serão trocadas */}
          <Routes>
            {/* Cada Route é uma regra: "Se a URL for X, mostre o componente Y" */}
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          
          {/* Futuramente, podemos adicionar um Footer aqui, fora das rotas */}
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;