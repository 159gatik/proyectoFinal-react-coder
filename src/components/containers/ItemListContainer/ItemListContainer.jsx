import React, { useState, useEffect, useContext } from "react";
import { getProductos } from "../../../utils/firebase";
import { darkModeContext } from "../../context/darkMode";
import "../../styles/cards.css";
import CardProducto from "../CardProducto";
import Spinner from "../Spinner";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const { darkMode } = useContext(darkModeContext);

  useEffect(() => {
    setShowSpinner(true);
    getProductos()
      .then((productos) => {
        setProductos(productos);
      })
      .finally(() => setShowSpinner(false));
  }, []);

  return (
    <>
      <Spinner show={showSpinner} />

      <div className={`container-fluid ${darkMode ? "darkMode  " : ""}`}>
        <div className="row">
          {productos.map((producto) => (
            <CardProducto producto={producto} key={producto.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
