
import React, { useState, useEffect, useContext } from 'react';
import { getProductos } from '../../../utils/firebase';
import { darkModeContext } from '../../context/darkMode';
import "../../styles/cards.css"
import CardProducto from '../CardProducto';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { darkMode } = useContext(darkModeContext);

    useEffect(() => {
        getProductos().then(productos => {
            setProductos(productos)
        })
    }, [])

    return (
        <>
            <div className={`container-fluid ${darkMode ? 'darkMode  ' : ''}`}>
                <div className='row' >
                    {productos.map(producto => <CardProducto producto={producto} />)}
                </div>
            </div>
        </>
    );
}

export default ItemListContainer;
