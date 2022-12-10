import React, { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cartwidget = () => {
  const { carrito } = useContext(CarritoContext);
  const [cantidadProductos, setCantidadProductos] = useState(0);

  const getCantidad = () => {
    let resultado = 0;
    carrito.forEach((item) => {
      resultado += item.cantidad;
    });
    return resultado;
  };

  useEffect(() => {
    setCantidadProductos(getCantidad());
  }, [carrito]);

  return (
    <>
      <div className="iconCart">
        <button type="button" className="btn btn-dark">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        {cantidadProductos > 0 && (
          <span className="badge badge-warning" id="lblCartCount">
            {cantidadProductos}
          </span>
        )}
      </div>
    </>
  );
};

export default Cartwidget;
