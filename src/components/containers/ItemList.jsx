import React from 'react';
const ItemList = ({ producto }) => {
    return (
        <>
            <div className="row mt-5">
                <div className="col-md-4 ">
                    <img src={"../img/" + producto.img} className="img-fluid rounded-start cardImage" alt={producto.nombre} />
                </div>
                <div className="col-md-8">
                    <div className="card-body card ">
                        <h5 className="card-title fw-bold text-center">{producto.nombre}</h5>
                        <p className="card-text text-secondary text-center"> <span>Modelo:</span> {producto.marca} </p>
                        <p className="card-text text-secondary text-center"><span>Precio:</span> ${producto.precio} </p>
                        <p className="card-text text-secondary text-center"><span>Disponibles:</span> {producto.stock} </p>
                        <p className="card-text text-center text-danger"><span>10% de descuento pagando con Efectivo o Depósito/Transferencia Bancaria
                            15% de recargo en 12 cuotas (Solicitar link de pago por Whatsapp)</span></p>
                        <button className='btn btn-dark m'>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemList;
