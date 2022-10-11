/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Buttom from '../navbar/content/Buttom';
import Form from '../navbar/layouts/Form';
import Secciones from '../navbar/layouts/Secciones'
import Cartwidget from '../navbar/content/Cartwidget.jsx';
import "../styles/App.css"


const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className='navbar-brand tittle' to="/">
                        Pinto.Bike
                    </Link>
                    <Buttom />
                    <div className="collapse navbar-collapse " id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <Secciones />
                        </ul>
                        <Form busqueda="Ingrese producto" />
                    </div>
                    <ul className="navbar-nav me-auto ">
                        <li className="nav-item">
                            <Link className='nav-link' to="/carrito"><Cartwidget /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
