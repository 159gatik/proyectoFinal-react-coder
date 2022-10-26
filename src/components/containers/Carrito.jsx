import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import { darkModeContext } from '../context/darkMode';
import "../styles/cards.css"
const Carrito = (producto) => {
    const { carrito, agregarProducto, quitarProducto, vaciarCarrito } = useContext(CarritoContext)
    const { darkMode } = useContext(darkModeContext);
    const [carritoLocal, setCarritoLocal] = useState([]);
    useEffect(() => {
        const prodMostrar = carrito.map(producto =>
            <>
                <table class="table table-hover">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col" className='text-center'>
                                <img src={producto.img} className="styleCardCarrito " alt={producto.nombre} />
                            </th>
                            <th scope="col"><span>precio</span></th>
                            <th scope="col"><span>cantidad</span></th>
                            <th scope="col"><span>precio total</span></th>
                            <th scope="col"><Button variant='contained' color='error' startIcon={<DeleteIcon />} className='btnProducto' onClick={() => quitarProducto(producto)}>Borrar</Button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                            <th scope="row" className='text-center'>{producto.nombre} {producto.marca} </th>
                            <td>${producto.precio} </td>
                            <td>{producto.cantidad} </td>
                            <td>${producto.precio * producto.cantidad} </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
        setCarritoLocal(prodMostrar)
    }, [carrito]);

    const carro = (carrito.length != 0) ? <div className={darkMode ? 'darkMode row' : 'row '}>{carritoLocal} <Button variant="contained" onClick={() => vaciarCarrito()} startIcon={<DeleteIcon />}> Borrar Todo</Button></div> : <>
        <div className='backCart'>  <h1>No hay productos en tu carrito😔</h1> <button className='btn btn-primary'><Link className='nav-link' to={"/"}> Volver a inicio </Link></button> </div> </>



    return (
        <>
            {carro}
        </>
    );
}

export default Carrito;
