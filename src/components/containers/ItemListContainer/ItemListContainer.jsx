
import React, { useState, useEffect, useContext } from 'react';
import { getProductos } from '../../../utils/firebase';
import { darkModeContext } from '../../context/darkMode';
import { Link } from 'react-router-dom';
import "../../styles/cards.css"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { darkMode } = useContext(darkModeContext);

    useEffect(() => {
        getProductos().then(productos => {
            const cardProductos = productos.map(producto =>
                <div className="card text-center styleCard" key={producto[0]}>
                    <div className='overflow'>
                        <img src={producto[1].img} className="card-img-top" alt={producto.nombre} />
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">{producto[1].nombre}</h4>
                        <p className="card-text text-secondary"> <span>Modelo:</span> {producto[1].marca} </p>
                        <p className="card-text text-secondary"><span>Precio:</span> ${producto[1].precio} </p>
                        <p className="card-text text-secondary"><span>Disponibles:</span> {producto[1].stock} </p>
                        <button className='btnProducto'><Link className='nav-link' to={"/producto/" + producto[0]}> Ver {producto[1].nombre} </Link></button>
                    </div>
                </div>)
            setProductos(cardProductos)
        }
        )
    }, [])
    return (
        <>
            <div className={darkMode ? 'darkMode row justify-content-center' : 'row justify-content-center'}>
                {productos}
            </div>
        </>
    );
}

export default ItemListContainer;
