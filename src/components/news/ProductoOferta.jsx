import React from 'react';

const ProductoOferta = ({ productOferta }) => {
    return (
        <>
            <div className="row">
                <div className="col-md-4 cardImage ">
                    <img src={"../img/" + productOferta.img} className="img-fluid rounded-start" alt={productOferta.nombre} />
                </div>
                <div className="col-md-8">
                    <div className="card-body card">
                        <h5 className="card-title fw-bold text-center">{productOferta.nombre}</h5>
                        <p className="card-text text-secondary text-center"> <span>Modelo:</span> {productOferta.marca} </p>
                        <p className="card-text text-secondary text-center"><span>Precio ahora:</span> ${productOferta.precioOferta} </p>
                        <p className="card-text text-secondary text-center"><span>Disponibles:</span> {productOferta.stock} </p>
                        <button className='btn btn-dark m'>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductoOferta;
