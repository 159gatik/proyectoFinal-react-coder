/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Buttom from '../navbar/content/Buttom';
import Search from '../navbar/layouts/Search';
import Secciones from '../navbar/layouts/Secciones'
import Cartwidget from '../navbar/content/Cartwidget.jsx';
import { darkModeContext } from '../context/darkMode';
import { Switch, FormGroup, FormControlLabel } from '@mui/material'
import "../styles/App.css"
// import Login from '../navbar/layouts/Login';
// import Register from '../navbar/layouts/Register'

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useContext(darkModeContext);
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
                        <FormGroup>
                            <FormControlLabel control={<Switch defaultChecked color="warning" />} onClick={() => toggleDarkMode()} />
                        </FormGroup>
                        <Search busqueda="Ingrese producto" />
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
