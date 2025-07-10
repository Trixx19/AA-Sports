// src/App.js

import './App.css';
import HomePage from './pages/HomePage';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header/Header';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header /> 
        <HomePage />
      </div>
    </CartProvider>
  );
}

export default App;