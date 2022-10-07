/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Dropdown from './Dropdown.jsx';
import { Link } from 'react-router-dom';
const Secciones = () => {

    const ListCategory = ["bicicletas", "indumentaria", "accesorios"]
    return (
        <>
            <li className="nav-item">
                <Link className='nav-link active' to="/"> inicio</Link>
            </li>
            <Dropdown lista={ListCategory}></Dropdown>
            <li className="nav-item">
                <Link className='nav-link active' to="/producto">novedades</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link active' to="/about">ayuda</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link active' to="/contacto">contacto </Link>
            </li>
        </>
    );
}

export default Secciones;
