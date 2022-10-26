/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../../../utils/firebase';
const Item = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        getProducto(id).then(prod => {
            console.log(prod);
            // const producto1 = productos.find(productoArray => productoArray.id == id)
            // setProducto(producto1)
        })
    }, [id]);
    return (
        <>





            <div className="card mb-4 cardProducto ">
                {/* <ItemList producto={producto}></ItemList> */}
            </div>

        </>
    );
}

export default Item;
