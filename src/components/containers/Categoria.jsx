import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../utils/firebase";
import { darkModeContext } from "../context/darkMode";
import CardProducto from "./CardProducto";
import Spinner from "./Spinner";
const Categoria = () => {
  const [productosPorCategoria, setProductosPorCategoria] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const { darkMode } = useContext(darkModeContext);
  const { id } = useParams();

  useEffect(() => {
    setShowSpinner(true);
    getProductos()
      .then((productos) => {
        const productosFiltrados = productos.filter(
          (producto) => producto.categoria === id
        );
        setProductosPorCategoria(productosFiltrados);
      })
      .finally(() => setShowSpinner(false));
  }, [id]);

  return (
    <>
      <Spinner show={showSpinner} />
      <div className={darkMode ? "darkMode row" : "row"}>
        <div className="row mw-100 d-flex justify-content-center">
          {productosPorCategoria.map((producto) => (
            <CardProducto producto={producto} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Categoria;
