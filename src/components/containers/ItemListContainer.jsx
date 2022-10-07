
import React, { useState, useEffect } from 'react';
import { consultarProductos } from '../../utils/funcionesUtiles';
import { Link } from 'react-router-dom';
import "../styles/cards.css"


const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarProductos().then(productos => {

            const cardProductos = productos.map(producto =>

                <div className="card text-center styleCard" key={producto.id}>
                    <div className='overflow'>
                        <img src={"../img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">{producto.nombre}</h4>
                        <p className="card-text text-secondary"> <span>Modelo:</span> {producto.marca} </p>
                        <p className="card-text text-secondary"><span>Precio:</span> ${producto.precio} </p>
                        <p className="card-text text-secondary"><span>Disponibles:</span> {producto.stock} </p>

                        <button className='btnProducto'><Link className='nav-link' to={"/producto/" + producto.id}> Ver {producto.nombre} </Link></button>

                    </div>
                </div>)
            setProductos(cardProductos)
        }

        )
    }, [])


    return (
        <>
            <h1 className='text-center'>{greeting}</h1>
            <div className='row mw-100 d-flex justify-content-center'>
                {productos}
            </div>
        </>
    );
}

export default ItemListContainer;
