import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { consultarProductos } from '../../utils/funcionesUtiles';
import ProductoOferta from './ProductoOferta'

const ProductoItem = () => {
    const [offers, setOffers] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        consultarProductos().then(productos => {
            const producto1 = productos.find(productoArray => productoArray.id == id)
            setOffers(producto1)
        })
    }, []);


    return (
        <>
            <div className="card mb-4 cardProducto ">
                <ProductoOferta productOferta={offers}></ProductoOferta>
            </div>
        </>
    );
}

export default ProductoItem;
