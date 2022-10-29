import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
// import { consultarProductos } from '../../utils/funcionesUtiles';
import { getProducto, getProductos } from '../../utils/firebase';
import { darkModeContext } from '../context/darkMode';
import ItemList from './ItemListContainer/ItemList';
const Categoria = () => {

    const [producto, setProducto] = useState([]);

    const { darkMode } = useContext(darkModeContext);
    const { id } = useParams()

    useEffect(() => {
        getProductos().then(productos => {
            const categoryProducts = productos.filter(productoCategorias => productoCategorias[0].idCategoria == id)
            const cardProductos = categoryProducts.map(producto =>
                <div className="card text-center styleCard" key={producto[0]}>
                    <div className='overflow'>
                        <img src={producto[1].img} className="card-img-top" alt={producto.nombre} />
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">{producto[1].nombre}</h4>
                        <p className="card-text text-secondary"> <span>Modelo:</span> {producto[1].marca} </p>
                        <p className="card-text text-secondary"><span>Precio:</span> ${producto[1].precio} </p>
                        <p className="card-text text-secondary"><span>Disponibles:</span> {producto[1].stock} </p>
                        <button className='btnProducto'><Link className='nav-link' to={"/producto/" + producto[0]}> Ver {producto.nombre} </Link></button>
                    </div>
                </div>)
            setProducto(cardProductos)
        })
    }, [id]);


    return (
        <div className={darkMode ? 'darkMode row' : 'row'}>
            <div className='row mw-100 d-flex justify-content-center'>
                {producto}
            </div>
        </div>
    )

}

export default Categoria;
