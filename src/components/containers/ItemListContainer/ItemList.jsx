import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { CarritoContext } from '../../context/CarritoContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { darkModeContext } from '../../context/darkMode';

const ItemList = ({ producto }) => {

    const [cantidad, setCantidad] = useState(1);

    const { carrito, agregarProducto, quitarProducto } = useContext(CarritoContext)
    const { darkMode } = useContext(darkModeContext);

    const cantidadProducto = (operacion) => {
        if (operacion == "+") {
            if (cantidad < producto.stock) {
                setCantidad(cantidad + 1)
            }
        }
        else {
            if (cantidad > 1) {
                setCantidad(cantidad - 1)
            }
        }
    }

    return (
        <>

            <div className="row mt-5">
                <div className="col-md-4 ">
                    <img src={producto.img} className="img-fluid rounded-start cardImage" alt={producto.nombre} />
                </div>
                <div className="col-md-8">
                    <div className="card-body card detailCard">
                        <h5 className="card-title fw-bold text-center">{producto.nombre}</h5>
                        <p className="card-text text-secondary text-center"> <span>Modelo:</span> {producto.marca} </p>
                        <p className="card-text text-secondary text-center"><span>Precio:</span> ${producto.precio} </p>
                        <p className="card-text text-secondary text-center"><span>Disponibles:</span> {producto.stock} </p>
                        <p className="card-text text-center text-danger"><span>10% de descuento pagando con Efectivo o Depósito/Transferencia Bancaria
                            15% de recargo en 12 cuotas (Solicitar link de pago por Whatsapp)</span></p>
                        <div className='container detailBottom'>
                            <Button variant='outlined' color='error' onClick={() => cantidadProducto("-")}><ArrowBackIcon baseClassName="fas" className="fa-plus-circle" /></Button>
                            <p className="card-text text-secondary number"> {cantidad} </p>
                            <Button variant='outlined' className='detailWidth' color='error' onClick={() => cantidadProducto("+")}><ArrowForwardIcon baseClassName="fas" className="fa-plus-circle" /></Button>
                            <Button variant='outlined' startIcon={<ShoppingCartCheckoutIcon />} onClick={() => agregarProducto(producto, cantidad)}> Comprar </Button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default ItemList;
