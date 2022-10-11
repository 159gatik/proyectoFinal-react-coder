import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { consultarProductos } from '../../utils/funcionesUtiles';


const Ofertas = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        consultarProductos('../json/productos.json').then(productos => {
            const productosOferta = productos.filter(productoArray => productoArray.descuento == id)


            const cardProductos = productosOferta.map(productOferta =>
                <div className="card text-center styleCard cardProducto" key={productOferta.id}>
                    <div className='overflow'>
                        <img src={"../img/" + productOferta.img} className="card-img-top" alt={productOferta.nombre} />
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">{productOferta.nombre}</h4>
                        <p className="card-text text-secondary"> <span>Modelo:</span> {productOferta.marca} </p>
                        <p className="card-text text-secondary text-decoration-line-through"><span>Antes:</span> ${producto.precio} </p>
                        <p className="card-text text-secondary"><span>Ahora:</span> ${productOferta.precioOferta} </p>
                        <p className="card-text text-secondary"><span>Disponibles:</span> {productOferta.stock} </p>
                        <button className='btnProducto'><Link className='nav-link' to={"/ofertas/" + productOferta.id}> Ver {producto.nombre} </Link></button>
                    </div>
                </div>)

            setProducto(cardProductos)
        })
    }, [id]);
    return (


        <>
            <div className='row'>{producto}</div>

        </>
    );
}

export default Ofertas;
