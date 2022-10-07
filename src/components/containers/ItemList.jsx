import React from 'react';
const ItemList = ({ producto }) => {
    return (
        <>

            <div className="row">
                <div className="col-md-4 cardImage ">
                    <img src={"../img/" + producto.img} className="img-fluid rounded-start" alt={producto.nombre} />
                </div>
                <div className="col-md-8">
                    <div className="card-body card">
                        <h5 className="card-title fw-bold text-center">{producto.nombre}</h5>
                        <p className="card-text text-secondary text-center">{producto.marca}</p>
                        <p className="card-text text-secondary text-center">$ {producto.precio}</p>
                        <p className="card-text text-secondary text-center">Stock: {producto.stock}</p>
                        <button className='btn btn-dark m'>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemList;
