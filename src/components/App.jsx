import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
// import Carrito from './containers/Carrito.jsx';
import ItemListContainer from './containers/ItemListContainer.jsx';
import Navbar from './containers/Navbar.jsx';
import './styles/App.css'
import Item from './containers/Item.jsx';
import About from './containers/About.jsx';
import Contacto from './containers/Contacto.jsx';
import Carrito from './containers/Carrito.jsx';
import Categoria from './containers/Categoria.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<Item />} />
          <Route path="/categoria/:id" element={<Categoria />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
