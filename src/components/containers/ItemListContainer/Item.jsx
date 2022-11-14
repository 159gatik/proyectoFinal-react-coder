/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../../../utils/firebase';
import ItemList from './ItemList';

const Item = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams()


    useEffect(() => {
        getProducto(id).then(producto => {
            setProducto(producto)
        })
    }, [id]);

    if (producto.length != 0) {
        return (
            <div className="card mb-4 cardProducto ">
                <ItemList producto={producto} />
            </div>
        )



    }


}

export default Item;
