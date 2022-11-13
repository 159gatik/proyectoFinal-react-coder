import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Search = ({ busqueda }) => {
    return (
        <>
            <form className="d-flex">
                <input className="form-control me-sm-2" type="text" placeholder={busqueda} />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar producto</button>
            </form>

        </>
    );
}

export default Search;
