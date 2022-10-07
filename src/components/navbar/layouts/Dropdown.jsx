/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ lista }) => {
    return (
        <>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">productos</a>
                <div class="dropdown-menu">
                    <Link className='dropdown-item' to={"/categoria/bicicletas"}>{lista[0]}</Link>
                    <Link className='dropdown-item' to={"/categoria/indumentaria"}>{lista[1]}</Link>
                    <Link className='dropdown-item' to={"/categoria/accesorios"}>{lista[2]}</Link>
                </div>
            </li>
        </>
    );
}

export default Dropdown;
