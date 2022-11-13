import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import { DarkModeProvider } from './context/darkMode.jsx';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer.jsx';
import Navbar from './containers/Navbar.jsx';
import './styles/App.css'
import Item from './containers/ItemListContainer/Item.jsx';
import About from './containers/About.jsx';
import Form from './containers/Form.jsx';
import Carrito from './containers/Carrito.jsx';
import Categoria from './containers/Categoria.jsx';
import Footer from './containers/Footer.jsx';
import Checkout from './containers/Checkout.jsx';
function App() {
  return (
    <>



      <div id="page-container">
        <div id="content-wrap">
          <DarkModeProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/producto/:id" element={<Item />} />
                <Route path="/categoria/:id" element={<Categoria />} />
                <Route path="/about" element={<About />} />
                <Route path="/form" element={<Form />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="*" element={<h1>Error 404</h1>} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </BrowserRouter>
          </DarkModeProvider>

        </div>

        <Footer />
      </div>




    </>
  );
}

export default App;
