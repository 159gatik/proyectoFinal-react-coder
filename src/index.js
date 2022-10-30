import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles/index.css';
import App from './components/App';
import { CarritoProvider } from './components/context/CarritoContext';
// import './utils/baseDeDatos.js'
import './utils/pruebas.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);