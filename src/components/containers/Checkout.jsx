import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
// import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
const Checkout = () => {
  const { compraRealizada } = useContext(CarritoContext);

  const formularioReferenciado = React.useRef();

  const consultarFormulario = (e) => {
    e.preventDefault();
    const datosFormulario = new FormData(formularioReferenciado.current);
    console.log(Object.fromEntries(datosFormulario));
  };

  return (
    <>
      <div className="container">
        <form onSubmit={consultarFormulario} ref={formularioReferenciado}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input type="text" className="form-control" name="nombre" />
          </div>
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input type="text" className="form-control" name="nombre" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">
              Direccion
            </label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              placeholder="Ingresa tu domicilio"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Atras
          </button>

          <Link to="/">
            {" "}
            <button
              type="submit"
              onClick={() => compraRealizada()}
              className="btn btn-success"
              to="/"
            >
              finalizar compra
            </button>{" "}
          </Link>
        </form>
      </div>
    </>
  );
};

export default Checkout;
