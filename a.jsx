import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { consultarProductos } from '../../utils/funcionesUtiles';


const Category = () => {

    const [productos, setProductos] = useState([]);



    const { id } = useParams()




    useEffect(() => {


        consultarProductos("../json/productos.json").then(productos => {



            const productosCategoria = productos.filter(producto => producto.idCategoria == id)



            console.log(productosCategoria);


            const cardProductos = productosCategoria.map(producto =>

                <div className="card text-center styleCard" key={producto.id}>
                    <div className='overflow'>
                        <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
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
        })

    }, [id]);

    return (
        <>
        </>
    );
}

export default Category;
