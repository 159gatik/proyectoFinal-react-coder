import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import { darkModeContext } from '../context/darkMode';
import CheckIcon from '@mui/icons-material/Check';
import "../styles/cards.css"

const Carrito = () => {

    const { carrito, quitarProducto, vaciarCarrito, formatearMonto } = useContext(CarritoContext)
    const { darkMode } = useContext(darkModeContext);

    const getCantidadTotal = () => {
        let resultado = 0;
        carrito.forEach(item => {
            resultado += item.producto.precio * item.cantidad
        });
        return resultado;
    }
    return (
        <>
            {carrito.length ?
                <div className={darkMode ? 'darkMode container-fluid' : ' '} >

                    <table className="table table-hover">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col"><span>producto</span></th>
                                <th scope="col"><span>marca</span></th>
                                <th scope="col"><span>precio por unidad</span></th>
                                <th scope="col"><span>cantidad</span></th>
                                <th scope="col"><span>subtotal</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map(item => <>
                                <tr className='text-center' key={item.producto.id}>
                                    <td className='text-center'>
                                        <div><img src={item.producto.img} className="styleCardCarrito " alt={item.producto.nombre} /> </div>
                                    </td>
                                    <td scope="row" className='text-center'>{item.producto.nombre} {item.producto.marca} </td>
                                    <td>{formatearMonto(item.producto.precio)} </td>
                                    <td>{item.cantidad} </td>
                                    <td> {formatearMonto(item.producto.precio * item.cantidad)} </td>
                                    <td scope="col"><Button variant='contained' color='error' startIcon={<DeleteIcon />} className='btnProducto' onClick={() => quitarProducto(item.producto)}>Borrar</Button></td>
                                </tr>
                            </>
                            )}
                            <div className='text-center fw-bold'>Total: {formatearMonto(getCantidadTotal())}</div>
                        </tbody>
                    </table>
                    <Button variant="contained" className="buttomCarrito" onClick={() => vaciarCarrito()} startIcon={<DeleteIcon />}> Borrar Todo</Button>
                    <Button to="/checkout" variant="contained" className='buttomCompra' color="success" startIcon={<CheckIcon />} ><Link to="/checkout" className='buttomCompra'>Enviar Pedido</Link></Button>
                </div>
                : <div className='backCart'>  <h1>No hay productos en tu carrito😔</h1> <button className='btn btn-primary'><Link className='nav-link' to={"/"}> Volver a inicio </Link></button> </div>
            }
        </>
    );

}

export default Carrito;
