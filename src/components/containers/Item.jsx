/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { consultarProductos } from '../../utils/funcionesUtiles';
import ItemList from './ItemList';
const Item = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        consultarProductos().then(productos => {
            const producto1 = productos.find(productoArray => productoArray.id == id)
            setProducto(producto1)
        })
    }, []);
    return (
        <>
            <div className="card mb-4 cardProducto ">
                <ItemList producto={producto}></ItemList>
            </div>
        </>
    );
}

export default Item;
