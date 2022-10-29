
import React, { useState, useEffect, useContext } from 'react';
import { getProductos } from '../../../utils/firebase';
import { darkModeContext } from '../../context/darkMode';
import { Link } from 'react-router-dom';
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
            <div className={darkMode ? 'darkMode row justify-content-center' : 'row justify-content-center'}>
                {productos.map(producto => <CardProducto producto={producto} />)}
            </div>
        </>
    );
}

export default ItemListContainer;
