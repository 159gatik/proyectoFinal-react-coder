import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
// import { consultarProductos } from '../../utils/funcionesUtiles';
import { getProductos } from '../../utils/firebase';
import { darkModeContext } from '../context/darkMode';
import CardProducto from './CardProducto';
const Categoria = () => {

    const [productosPorCategoria, setProductosPorCategoria] = useState([]);

    const { darkMode } = useContext(darkModeContext);
    const { id } = useParams()

    useEffect(() => {
        getProductos().then(productos => {
            const productosFiltrados = productos.filter(producto => producto.categoria === id)
            setProductosPorCategoria(productosFiltrados)
        })
    }, [id]);


    return (
        <div className={darkMode ? 'darkMode row' : 'row'}>
            <div className='row mw-100 d-flex justify-content-center'>

                {productosPorCategoria.map(producto => <CardProducto producto={producto} />)}

            </div>
        </div>
    )

}

export default Categoria;
