import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import { darkModeContext } from '../context/darkMode';
import CheckIcon from '@mui/icons-material/Check';
import "../styles/cards.css"

const Carrito = () => {

    const { carrito, agregarProducto, quitarProducto, vaciarCarrito, compraRealizada } = useContext(CarritoContext)
    const { darkMode } = useContext(darkModeContext);

    return (
        <>
            {carrito.length ?
                <div className={darkMode ? 'darkMode row' : 'row '}>


                    {carrito.map(item =>
                        <>
                            <table className="table table-hover">
                                <thead>
                                    <tr className='text-center'>
                                        <th scope="col" className='text-center'>
                                            <img src={item.producto.img} className="styleCardCarrito " alt={item.producto.nombre} />
                                        </th>
                                        <th scope="col"><span>precio</span></th>
                                        <th scope="col"><span>cantidad</span></th>
                                        <th scope="col"><span>precio total</span></th>
                                        <th scope="col"><Button variant='contained' color='error' startIcon={<DeleteIcon />} className='btnProducto' onClick={() => quitarProducto(item.producto)}>Borrar</Button></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-center'>
                                        <th scope="row" className='text-center'>{item.producto.nombre} {item.producto.marca} </th>
                                        <td>${item.producto.precio} </td>
                                        <td>{item.cantidad} </td>
                                        <td>${item.producto.precio * item.cantidad} </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    )}
                    <Button variant="contained" className="buttomCarrito" onClick={() => vaciarCarrito()} startIcon={<DeleteIcon />}> Borrar Todo</Button>
                    <Button to="/checkout" variant="contained" className='buttomCompra' color="success" startIcon={<CheckIcon />} ><Link to="/checkout" className='buttomCompra'>Enviar Pedido</Link></Button>
                </div>
                : <div className='backCart'>  <h1>No hay productos en tu carrito😔</h1> <button className='btn btn-primary'><Link className='nav-link' to={"/"}> Volver a inicio </Link></button> </div>
            }

        </>

    );

}

export default Carrito;
