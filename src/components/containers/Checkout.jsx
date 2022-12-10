import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { createOrdenDeCompra } from "../../utils/firebase";
// import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
const Checkout = () => {
  const { compraRealizada, getCantidadTotal } = useContext(CarritoContext);

  const formularioReferenciado = React.useRef();

  const consultarFormulario = (e) => {
    e.preventDefault();
    const datosFormulario = new FormData(formularioReferenciado.current);
    const datosForm = Object.fromEntries(datosFormulario);

    const nuevaOrden = {
      ...datosForm,
      precio: getCantidadTotal(),
    };

    createOrdenDeCompra(nuevaOrden).then((response) => {
      compraRealizada(response.id);
    });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={consultarFormulario} ref={formularioReferenciado}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              name="apellido"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dni" className="form-label">
              Dni
            </label>
            <input type="number" className="form-control" name="dni" required />
          </div>
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">
              Direccion
            </label>
            <input
              type="text"
              className="form-control"
              name="direccion"
              placeholder="Ingresa tu domicilio"
              required
            />
          </div>

          <Link to="/carrito">
            <button type="submit" className="btn btn-primary">
              Atras
            </button>
          </Link>

          {/* <Link to="/"> */}
          <button type="submit" className="btn btn-success">
            Finalizar
          </button>
          {/* </Link> */}
        </form>
      </div>
    </>
  );
};

export default Checkout;
