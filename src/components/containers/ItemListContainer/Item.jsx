/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../../utils/firebase";
import ItemList from "./ItemList";
import Spinner from "../Spinner";
const Item = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setShowSpinner(true);
    getProducto(id)
      .then((producto) => {
        setProducto(producto);
      })
      .finally(() => setShowSpinner(false));
  }, [id]);

  if (producto.length != 0) {
    return (
      <>
        <Spinner show={showSpinner} />
        <div className="card mb-4 cardProducto ">
          <ItemList producto={producto} />
        </div>
      </>
    );
  }
};

export default Item;
