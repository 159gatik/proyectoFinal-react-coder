import React, { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Cartwidget = () => {
    const { carrito } = useContext(CarritoContext)

    return (
        <>
            <div className='iconCart' >
                <button type="button" className="btn btn-dark"><FontAwesomeIcon icon={faCartShopping} /></button>
                <span className='badge badge-warning' id='lblCartCount'> {carrito.length} </span>
            </div>



        </>
    );
}

export default Cartwidget;
