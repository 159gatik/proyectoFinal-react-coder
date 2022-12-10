import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { darkModeContext } from "../context/darkMode";
import CheckIcon from "@mui/icons-material/Check";
import "../styles/cards.css";

const Carrito = () => {
  const {
    carrito,
    quitarProducto,
    vaciarCarrito,
    formatearMonto,
    getCantidadTotal,
  } = useContext(CarritoContext);
  const { darkMode } = useContext(darkModeContext);

  return (
    <>
      {carrito.length ? (
        <div className={darkMode ? "darkMode container-fluid" : " "}>
          <table className="table table-hover">
            <thead>
              <tr className="text-center">
                <th scope="col">
                  <span>producto</span>
                </th>
                <th scope="col">
                  <span>marca</span>
                </th>
                <th scope="col">
                  <span>precio por unidad</span>
                </th>
                <th scope="col">
                  <span>cantidad</span>
                </th>
                <th scope="col">
                  <span>subtotal</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <tr key={item.producto.id} className="text-center">
                  <td className="text-center">
                    <div>
                      <img
                        src={item.producto.img}
                        className="styleCardCarrito "
                        alt={item.producto.nombre}
                      />
                    </div>
                  </td>
                  <td className="text-center">
                    {item.producto.nombre} {item.producto.marca}
                  </td>
                  <td>{formatearMonto(item.producto.precio)} </td>
                  <td>{item.cantidad} </td>
                  <td>
                    {formatearMonto(item.producto.precio * item.cantidad)}
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<DeleteIcon />}
                      className="btnProducto"
                      onClick={() => quitarProducto(item.producto)}
                    >
                      Borrar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center fw-bold">
            Total: {formatearMonto(getCantidadTotal())}
          </div>
          <Button
            variant="contained"
            className="buttomCarrito"
            onClick={() => vaciarCarrito()}
            startIcon={<DeleteIcon />}
          >
            Borrar Todo
          </Button>

          <Link to="/checkout" className="buttomCompra">
            <Button
              variant="contained"
              className="buttomCompra"
              color="success"
              startIcon={<CheckIcon />}
            >
              Enviar Pedido
            </Button>
          </Link>
        </div>
      ) : (
        <div className="backCart">
          <h1>No hay productos en tu carrito😔</h1>
          <button className="btn btn-primary">
            <Link className="nav-link" to={"/"}>
              Volver a inicio
            </Link>
          </button>
        </div>
      )}
    </>
  );
};

export default Carrito;
