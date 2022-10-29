
import { Link } from 'react-router-dom';

const CardProducto = producto => {

    return (
        <>
            <div className="card text-center styleCard" key={producto.id}>
                <div className='overflow'>
                    <img src={producto.img} className="card-img-top" alt={producto.nombre} />
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{producto.nombre}</h4>
                    <p className="card-text text-secondary"> <span>Modelo:</span> {producto.marca} </p>
                    <p className="card-text text-secondary"><span>Precio:</span> ${producto.precio} </p>
                    <p className="card-text text-secondary"><span>Disponibles:</span> {producto.stock} </p>
                    <button className='btnProducto'><Link className='nav-link' to={"/producto/" + producto.id}> Ver {producto.nombre} </Link></button>
                </div>
            </div>
        </>
    )

}

export default CardProducto;
